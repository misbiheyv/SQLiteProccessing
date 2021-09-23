const sqlite3 = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database('./db/test.db');

let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];

let placeholders = languages.map((lang) => '(?)').join(',');
let sql = 'INSERT INTO products(name) VALUES ' + placeholders;

// output the INSERT statement
console.log(sql);

db.run(sql, languages, function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
});

// close the database connection
db.close();