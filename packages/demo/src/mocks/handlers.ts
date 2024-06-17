import { http, HttpResponse } from 'msw';

const dumy = {
  MEMO_LIST: [
    { idx: 'a1', type: 'memo', props: '여기다 메모를 작성해보세요.' },
    {
      idx: 'a2',
      type: 'todo',
      props: [
        { isAvail: true, todo: '메모장을 켜기' },
        { isAvail: false, todo: '새로운 메모를 작성해보세요.' },
      ],
    },
  ],
};

export const handlers = [
  http.get('/memoList', () => {
    return HttpResponse.json(dumy.MEMO_LIST, { status: 200 });
  }),
  http.post('/memoList', async ({ request }) => {
    const body = await request.json();
    dumy['MEMO_LIST'] = body as (typeof dumy)['MEMO_LIST'];
    return HttpResponse.text('success save memo', { status: 200 });
  }),
  http.get('/memoItem/:index', ({ params }) => {
    const index = parseInt(params.index[0]);
    return HttpResponse.json(dumy.MEMO_LIST[index], { status: 200 });
  }),
  http.post('/memoItem', async ({ request }) => {
    const { index, value } = (await request.json()) as {
      index: any;
      value: any;
    };
    dumy.MEMO_LIST[index] = value;
    return HttpResponse.text('success save memo', { status: 200 });
  }),
  http.get('/memoContext/:index', ({ params }) => {
    const index = parseInt(params.index[0]);
    return HttpResponse.json(dumy.MEMO_LIST[index].props, { status: 200 });
  }),
  http.post('/memoContext', async ({ request }) => {
    const { index, value } = (await request.json()) as {
      index: any;
      value: any;
    };
    dumy.MEMO_LIST[index].props = value;
    return HttpResponse.text('success save memo', { status: 200 });
  }),
];
