// src/config/database.js
import initSqlJs from 'sql.js';

let db;

const initDatabase = async () => {
  const SQL = await initSqlJs();
  db = new SQL.Database();
  createTables();
  verifyTables();
};

const createTables = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    );
  `);
};

const verifyTables = () => {
  const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
  console.log('Tabelas no banco de dados:', tables);

  tables[0].values.forEach(table => {
    const tableName = table[0];
    const columns = db.exec(`PRAGMA table_info(${tableName})`);
    console.log(`Colunas da tabela ${tableName}:`, columns);
  });
};

export const insertUser = (name, email) => {
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  stmt.run([name, email]);
  stmt.free();
};

export const getUsers = () => {
  const stmt = db.prepare('SELECT * FROM users');
  const users = [];
  while (stmt.step()) {
    users.push(stmt.getAsObject());
  }
  stmt.free();
  return users;
};

export default initDatabase;