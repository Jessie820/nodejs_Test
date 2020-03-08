const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
    ctx.body = '안녕 여긴 재윤이와 냥냥이의 home';
});

app.listen(4000, () => {
    console.log('listening to port 4000');
});