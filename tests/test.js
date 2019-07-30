const { expect } = require('chai');


const SQLiteCrud = require('../index');

const PATH = __dirname + '/data/sqlite3.db';
const DB_NAME = 'sqlite3_test';
const ROWS = [ 
  { id: 1, name: 'Arshad', email: 'arshadkazmi42@gmail.com' },
  { id: 2, name: 'Sqlite3', email: 'sqlite3@db.com' }
];
const UPDATE_ROW = [ 
  { id: 1, name: 'arshadkazmi42', email: 'arshadkazmi42@gmail.com' } 
];


describe('Tests DB functinos', () => {
  it('should connect to the database', async () => {
    let error = false;
    try {
      const SqliteCrud = new SQLiteCrud(PATH);
      await SqliteCrud.close();
    } catch (err) {
      error = true;
    }
    expect(error).to.equal(false);
  });
  it('should show rows', async () => {
    const SqliteCrud = new SQLiteCrud(PATH);
    const rows = await SqliteCrud.all(`SELECT * FROM ${DB_NAME};`);
    await SqliteCrud.close();
    expect(rows).to.deep.equal(ROWS);
  });
  it('should update row', async () => {
    const SqliteCrud = new SQLiteCrud(PATH);
    await SqliteCrud.run(`UPDATE ${DB_NAME} SET name = 'arshadkazmi42' WHERE id = 1;`);
    const row = await SqliteCrud.all(`SELECT * FROM ${DB_NAME} WHERE id = 1;`);
    await SqliteCrud.run(`UPDATE ${DB_NAME} SET name = 'Arshad' WHERE id = 1;`);
    await SqliteCrud.close();
    expect(row).to.deep.equal(UPDATE_ROW);
  });
});
