import mysql from "mysql2";

const hostName = process.env.MYSQL_HOST;
const dbName = process.env.MYSQL_DB_NAME;
const dbPassword = process.env.MYSQL_PASSWORD;
const dbUsername = process.env.MYSQL_USERNAME;

const db = mysql.createConnection({
  host: hostName,
  user: dbUsername,
  password: dbPassword,
  database: dbName,
});


export default db;

export const connectDb = () => {
  db.connect((err) => {
    if (err) {
      console.log("Database have some Error: ", err);
    } else {
      console.log("Database Connected Sucessfully!");
    }
  });
};
