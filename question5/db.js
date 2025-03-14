const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('Midterm squelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,  
});

(async () => {
  try {
    
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
