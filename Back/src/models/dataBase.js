import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/infracciones.db'
})

export default sequelize