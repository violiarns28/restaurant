import Koa from 'koa';
import { env } from './lib/env';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

console.log('Server started');
app.listen(env.PORT);
