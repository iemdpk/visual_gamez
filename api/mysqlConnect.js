var mysql = require('mysql');

var con = mysql.createConnection({
host: 'localhost', 
port: 3306, 
database: 'ApartMental',
user: 'root', 
password: 'deepak' 
});
const connect = () =>{ 
con.connect(function(err) {
  console.log("Connected!");
});
}
module.exports =  {
  connect,
  con,
};
