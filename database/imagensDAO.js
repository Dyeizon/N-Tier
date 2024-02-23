const mysqlConfig = require("./connection").mysql_pool;

const gerarImagem = () => {
  return new Promise((resolve, reject) => {
    mysqlConfig.getConnection(function (err, connection) {
      connection.query('SELECT * FROM imagens ORDER BY RAND() LIMIT 1', function(err, rows) {
        if (err) reject(err);
        else resolve(rows);
        connection.release();
      });
    })
  }
)}

module.exports = async () => {
  try {
      const rows = await gerarImagem();
      return JSON.stringify(rows);
    } catch (err) {
      throw err;
  }
};