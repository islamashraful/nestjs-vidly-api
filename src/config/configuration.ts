export interface AppConfigurationType {
  environment: string;
  port: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
}

export const configuration: () => AppConfigurationType = () => ({
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
});
