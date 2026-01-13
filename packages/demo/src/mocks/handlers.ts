import { http, HttpResponse } from 'msw';

const dumy = {
  MEMO_LIST: [
    {
      idx: 'init-1',
      type: 'memo',
      props:
        'Welcome to MemoFlow! 👋 Capture your thoughts instantly. This is a "Memo" card, perfect for quick snippets and reminders.',
    },
    {
      idx: 'init-2',
      type: 'todo',
      props: [
        { isAvail: true, todo: 'Try adding a new memo' },
        { isAvail: false, todo: 'Explore different card types' },
        { isAvail: false, todo: 'Google Drive Sync (Coming Soon)' },
      ],
    },
    {
      idx: 'init-3',
      type: 'note',
      props: [
        { idx: 1, type: 'h1', value: 'Structured Thinking' },
        {
          idx: 2,
          type: 'p',
          value:
            'Use "Note" cards to organize ideas with headers and paragraphs. Ideal for project outlines.',
        },
        {
          idx: 3,
          type: 'p',
          value: 'You can edit as much as you want.',
        },
      ],
    },
    {
      idx: 'init-4',
      type: 'draft',
      props:
        'The "Draft" card is your canvas for long-form writing. Journal your day or brainstorm your next big project here. Your data is stored locally and securely. 🔒',
    },
  ],
  MEMO_CONFIG: {
    sort: 'oldest',
  },
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
    const index = parseInt((params.index as string[])[0]);
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
    const index = parseInt((params.index as string[])[0]);
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
  http.get('/memo-config', () => {
    return HttpResponse.json(dumy.MEMO_CONFIG, { status: 200 });
  }),
  http.post('/memo-config', async ({ request }) => {
    const body = await request.json();
    dumy['MEMO_CONFIG'] = body as (typeof dumy)['MEMO_CONFIG'];
    return HttpResponse.text('success save Memo config', { status: 200 });
  }),
];
