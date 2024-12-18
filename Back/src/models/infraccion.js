import  { DataTypes } from "sequelize";
import sequelize from "./dataBase.js";
import Clasificaciones from "./clasificacion.js";

const Infracciones = sequelize.define(
    'Infracciones',
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        Dni: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "El DNI del ingresante es necesario"
                }
            }
        },
        Fecha: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "La hora de ingreso es necesaria"
                }
            }
        },
        Importe: {
            type: DataTypes.FLOAT
        },
        Lugar: {
            type: DataTypes.STRING(200),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "El chequeo de ingreso con notebook es necesario"
                }
            }
        },
        Eliminado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'El estado eliminado es requerido.'
                }
            }
            },
        IdClasificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "La clasificación es requerida"
                }
            },
            references: {
                model: Clasificaciones,
                key: "Id"
            }
            }
    },
    {    
        timestamps: false
    }
)

Clasificaciones.hasMany(Infracciones, {
    foreignKey: "Id"
})

Infracciones.belongsTo(Clasificaciones, {
    foreignKey: "IdClasificacion"
})

export default Infracciones
