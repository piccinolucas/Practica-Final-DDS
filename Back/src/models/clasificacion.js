import sequelize from "./dataBase.js";
import { DataTypes } from "sequelize";

const Clasificaciones = sequelize.define(
    'Clasificaciones',
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        Titulo: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.STRING(250),
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
)

export default Clasificaciones