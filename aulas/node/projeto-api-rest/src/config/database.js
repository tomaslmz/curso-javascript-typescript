require('dotenv').config();

module.exports = {
  /* SQLite */
  dialect: 'mysql',
  host: process.env.HOST,

  /* MySQL / MariaDB */
  // host: process.env.DATABASE_HOST,
  // port: process.env.DATABASE_PORT,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  /* ALL */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
