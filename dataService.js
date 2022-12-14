const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
    host: 'localhost',
    database: 'mascotadb',
    username: 'postgres',
    dialect: 'postgres',
    password: '3l3f4nt3',
    port:'5432'
});

const connection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connection();

module.exports = sequelize;