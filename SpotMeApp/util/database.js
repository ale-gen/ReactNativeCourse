import * as SQLite from "expo-sqlite";
import Place from "../models/Place";

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
                longitude REAL NOT NULL,
                locationTip TEXT NOT NULL
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

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO places (imageUri, address, latitude, longitude, locationTip) VALUES(?, ?, ?, ?, ?)`,
        [
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
          place.locationTip,
        ],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const places = [];
          for (const placeDTO of result.rows._array) {
            places.push(
              new Place(
                placeDTO.imageUri,
                {
                  address: placeDTO.address,
                  lat: placeDTO.latitude,
                  lng: placeDTO.longitude,
                },
                placeDTO.locationTip,
                placeDTO.id
              )
            );
          }
          resolve(places);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
