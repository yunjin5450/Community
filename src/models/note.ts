import {
    DataTypes,
    Model,
  } from 'sequelize';
  import sequelize from './index';
  
  export class Notes extends Model{
    public readonly noteId!: number;
    public userId! : string;
    public nickname! : string;
    public title! :string;
    public content! : string;
    public receiver! : string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
    public static associations:{        
    };
  }
  
  Notes.init(
    {
        noteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        receiver: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName:'Notes',
        tableName:'Notes',
    }
  );
  
  export default Notes