const { expect } = require('chai');


const SQLiteCrud = require('../index');

const PATH = 'data/sqlite3_test.db';


describe('Tests DB functinos', () => {
  it('should throw an error', () => {
    let error = false;
    try {
      new SQLiteCrud('../somepath/db');
    } catch (err) {
      console.log('here');
      error = true;
    }

    expect(error).to.equal(true);
    
  });
  it('should connect to the database', () => {
    let error = false;
    try {
      new SQLiteCrud(PATH);
    } catch (err) {
      error = true;
    }

    expect(error).to.equal(false);
  });
});
