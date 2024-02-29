const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'pauladas'
  });
  
  
  connection.connect((error)=>{
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error);
      } else {
        console.log('Conectado ao MySQL com sucesso!');
      }
  })

  module.exports = connection