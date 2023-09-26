import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                imageUri TEXT NOT NULL, 
                address TEXT NOT NULL, 
                latitude REAL NOT NULL, 
                longitude REAL NOT NULL
            ) `,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}