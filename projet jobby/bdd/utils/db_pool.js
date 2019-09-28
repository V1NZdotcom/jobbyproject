var mysql = require('mysql')
var util = require('util')



var connectionLimit 	= process.env.DB_CONNECTION_LIMIT || 100
var host 				= process.env.DB_HOST || '127.0.0.1'
var port 				= process.env.DB_PORT || '3306'
var user 				= process.env.DB_USER || 'jobbyuser'
var database 			= process.env.DB_DATABASE || 'jobbydb'
var password 			=  process.env.DB_PASSWORD || 'keepapi'


var options = {
  connectionLimit: connectionLimit,
  host: host,
  port: port,
  user: user,
  password: password,
  database: database,
  supportBigNumbers: true,
  debug: false,
  trace: false,
  multipleStatements: true
}

//    debug: ['ComQueryPacket'],
// console.log(options)

var pool = mysql.createPool(options)
/* var connection = mysql.createConnection(options);

connection.connect();
*/
pool.query = util.promisify(pool.query)

module.exports = pool
