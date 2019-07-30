# sqlite3-promisify

[![Build Status](https://api.travis-ci.com/arshadkazmi42/sqlite3-promisify.svg?branch=master)](https://api.travis-ci.com/arshadkazmi42/sqlite3-promisify)

Promisifying node-sqlite3 functions

## Install

```
npm i sqlite3-promisify
```

## Usage

```javascript

const SQLiteCrud = require('sqlite3-promisify');
const PATH = __dirname + 'tests/data/sqlite3.db';
const DB_NAME = 'sqlite3_test';

const Db = new SQLiteCrud(DB_PATH);
const rows = await SqliteCrud.all(`SELECT * FROM ${DB_NAME};`);
console.log(rows);

////////// OUTPUT ////////////
// [ 
//   { id: 1, name: 'Arshad', email: 'arshadkazmi42@gmail.com' },
//   { id: 2, name: 'Sqlite3', email: 'sqlite3@db.com' }
// ]


const row = await SqliteCrud.get(`SELECT * FROM ${DB_NAME} WHERE id = ?;`, [1]);
console.log(row);

////////// OUTPUT ////////////
// { id: 1, name: 'Arshad', email: 'arshadkazmi42@gmail.com' }
```

## API

- #### `connect(path)`
  Takes SQLite `DB path` as input and returns sqlite3 object.
  - **Params**
    - path (string) - Database absolute path

- #### `serialize()`
  Serialize consecutive db calls.

- #### `get(query, values={Optional})`
  Executes select queries and returns only first result row. 
  - **Params**
    - query (string) - SQL query
    - values (array) - Values for the query

- #### `all(query, values={Optional})`
  Executes any query and returns all the result rows
  - **Params**
    - query (string) - SQL query
    - values (array) - Values for the query

- #### `run(query, values={Optional})`
  Executes query which does not returns any results
  - **Params**
    - query (string) - SQL query
    - values (array) - Values for the query

- #### `close()`
  Closes the db connection

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/sqlite3-promisify/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>

