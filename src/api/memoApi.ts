import client from './core';

/**
 * 굳이 클래스로 묶을 이유는 없지만 같은 유형끼리 API를 묶어서 관리하는 것은 유지보수하기 편리하다.
 * api 서버 주소가 달라짐에 따라서 url를 다르게 한다거나 개발 환경 서버 프로덕트 환경등 여러가지 조건을 컨트롤 하는 등
 * API 레이어를 두는게 당연히 컴포넌트 같은데서 바로 API호출 하는 주먹구구 방식보다 여러모로 좋은건 당연한거 아닐까?
 */
class MemoApi {
  url: string;
  constructor() {
    this.url = process.env.NODE_ENV === 'development' ? '' : 'product';
  }

  async getMemoList() {
    // msw를 활용하는 코드를 작성하기 위해서 api 호출을 흉내내지만 사실 해당 프로젝트는 벡엔드 서버는 사용하지 않는다.
    if (process.env.NODE_ENV === 'development') {
      const res = await client.get(`${this.url}/memoList`);
      return res;
    } else {
      const check = localStorage.getItem('MEMO_LIST');
      if (check === null) {
        localStorage.setItem('MEMO_LIST', JSON.stringify([]));
        return [];
      } else return JSON.parse(check);
    }
  }
}

export default MemoApi;
