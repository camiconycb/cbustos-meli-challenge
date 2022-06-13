import dotenv from 'dotenv';

export default () => {
  dotenv.config();

  const Env = {
    api: {
      port: process.env.DEFAULT_APP_PORT,
    },
    db: {
      user: process.env.USER_MONGO,
      password: process.env.PASSWORD_MONGO,
      port: process.env.DB_PORT,
    },
  };
  return Env;
};
