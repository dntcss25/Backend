const mysql2 = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',    
    user: 'root',         
    password: '',         
    database: 'projectdb'    
  });
  
  module.exports = pool.promise(); 