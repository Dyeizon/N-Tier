var mysql = require('mysql');
var config;
config = {
    mysql_pool : mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'Batman',
        database : 'devweb'
    })
};
module.exports = config;