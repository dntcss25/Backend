const mysql2 = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',    
    user: 'root',         
    password: '',         
    database: 'school_db'    
  });
  
  module.exports = pool.promise(); 