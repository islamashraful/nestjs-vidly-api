// TODO: Use strong typing here
export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
});
