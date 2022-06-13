import mongoose from 'mongoose';
import bodyParser from 'koa-body';
import Koa from 'koa';
import Router from './routes';
import ENV from './config/enviroment';
import ERROR from './config/errors';

const env = ENV();

const app = new Koa();
const router = Router();
if (env.db.user === undefined || env.db.password === undefined || env.db.port === undefined) {
  throw new Error(ERROR.MISSING_ENV_VARIABLES);
}

mongoose
  .connect(`mongodb://${env.db.user}:${env.db.password}@mongo:${env.db.port}/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => console.log('Connected to db '))
  .catch(err => {
    console.log(err);
    throw new Error('Error to connect to db ');
  });

app
  .use(bodyParser())
  .use(router.routes()).use(router.allowedMethods());

app.listen(
  env.api.port,
  () => console.log(`server running in port ${env.api.port}`),
);
