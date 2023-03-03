import dotenv from 'dotenv';
dotenv.config();

type Config = {
  username: string,
  password: string,
  database : string,
  host : string,
  [key: string]: string | boolean;
}

interface IConfig {
  development : Config;
}

const config:IConfig = {
  development : {
    username : process.env.DB_USERNAME!,
    password : process.env.DB_PASSWORD!,
    database : process.env.DB_DBNAME!,
    host : process.env.DB_HOST!,
    dialect : "mysql"
  }
};

export default config;