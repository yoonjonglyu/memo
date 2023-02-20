import { rest } from 'msw';

const dumy = {
  MEMO_LIST: [] as any,
};

export const handlers = [
  rest.get('/memoList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dumy.MEMO_LIST));
  }),
  rest.post('/memoList', (req, res, ctx) => {
    dumy['MEMO_LIST'] = req;
    return res(ctx.status(200), ctx.text('success save memo'));
  }),
];
