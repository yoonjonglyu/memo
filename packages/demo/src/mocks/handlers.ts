import { rest } from 'msw';

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
  rest.get('/memoList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dumy.MEMO_LIST));
  }),
  rest.post('/memoList', async (req, res, ctx) => {
    const body = await req.json();
    dumy['MEMO_LIST'] = body;
    return res(ctx.status(200), ctx.text('success save memo'));
  }),
  rest.get('/memoItem/:index', (req, res, ctx) => {
    const index = parseInt(req.params.index[0]);
    return res(ctx.status(200), ctx.json(dumy.MEMO_LIST[index]));
  }),
  rest.post('/memoItem', async (req, res, ctx) => {
    const { index, value } = await req.json();
    dumy.MEMO_LIST[index] = value;
    return res(ctx.status(200), ctx.text('success save memo'));
  }),
  rest.get('/memoContext/:index', (req, res, ctx) => {
    const index = parseInt(req.params.index[0]);
    return res(ctx.status(200), ctx.json(dumy.MEMO_LIST[index].props));
  }),
  rest.post('/memoContext', async (req, res, ctx) => {
    const { index, value } = await req.json();
    dumy.MEMO_LIST[index].props = value;
    return res(ctx.status(200), ctx.text('success save memo'));
  }),
];
