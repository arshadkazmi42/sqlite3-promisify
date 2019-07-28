const sqlite3 = require('sqlite3');


function SQLiteCrud(path) {

  this.db = this.connect(path);
}


SQLiteCrud.prototype.connect = function (path) {
  return new sqlite3.Database(path, (err) => {
    if (err) {
      console.error(err);
      throw new Error('Failed to connect to database');
    }

    console.info(`Connected to db ${path}`);
  });
};


SQLiteCrud.prototype.serialize = function () {
  const that = this;
  return new Promise((resolve) => {
    that.db.serialize(function () {
      return resolve('DB Serialized');
    });
  });
};


SQLiteCrud.prototype.get = function (query, values = []) {
  const that = this;
  return new Promise(function (resolve, reject) {
    that.db.get(query, values, function (err, row) {
      if (err) {
        return reject(err);
      }

      return resolve(row);
    });
  });
};


SQLiteCrud.prototype.all = function (query, values = []) {
  const that = this;
  return new Promise(function (resolve, reject) {
    that.db.all(query, values, function (err, rows) {
      if (err) {
        return reject(err);
      }

      return resolve(rows);
    });
  });
};


SQLiteCrud.prototype.run = function (query, values = []) {
  const that = this;
  return new Promise(function (resolve, reject) {
    that.db.run(query, values, function (err, rows) {
      if (err) {
        return reject(err);
      }

      return resolve(rows);
    });
  });
};


SQLiteCrud.prototype.close = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    that.db.close(function (err) {
      if (err) {
        return reject(err);
      }

      return resolve('Connection Closed');
    });
  });
};


module.exports = SQLiteCrud;
