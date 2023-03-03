import { Sequelize, Options } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

class options implements Options {
    dialect!:'mysql';
    username!: string;
    password!: string;
    host!: string;
}

const createDBOptions = new options();
createDBOptions.username = process.env.DB_USERNAME!; 
createDBOptions.password = process.env.DB_PASSWORD!; 
createDBOptions.host = process.env.DB_HOST!;
createDBOptions.dialect = 'mysql';

let db_name = process.env.DB_DBNAME || "sideProject";
const dbCreateSequelize = new Sequelize(createDBOptions);

console.log(`==create DB ${db_name}`);

dbCreateSequelize
.getQueryInterface()
.createDatabase(db_name)
.then(() => {
    console.log('DB create Success');
})
.catch((e) => {
    console.log('create DB Error :', e)
})