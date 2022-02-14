async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:123456@localhost:3306/landscape");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectPessoa() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM PESSOA;');
    return rows;
}

module.exports = {selectPessoa}