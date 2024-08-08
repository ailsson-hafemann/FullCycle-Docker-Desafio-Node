const express = require("express");
const app = new express();
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const name = 'teste_' + Math.random()
const sql = `INSERT INTO people(name) values ('${name}')`
connection.query(sql)

app.get('/', (req, res) => {listPeople(res, connection)})
app.listen(port, () => {
    console.log("Server running on 3000");
});


function listPeople(res, connection){
    const sql = `SELECT id, name FROM people`;

    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw error
        };

        let table = '<table>';
        table += '<tr><th>#</th><th>Name</th></tr>';
        for(let people of results) {
            table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
        }

        table += '</table>';
        res.send('<h1>Full Cycle Rocks!</h1>' + table);
    });
    connection.end();
}