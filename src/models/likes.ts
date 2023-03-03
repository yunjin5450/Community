import {
    DataTypes,
    Model,
  } from 'sequelize';
  import sequelize from './index';
  
  export class Likes extends Model{
    public readonly likeId!: number;
    public postId! : number;
    public userId! : number;
    public nickname! : string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
    public static associations:{        
    };
  }
  
  Likes.init(
    {
        likeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName:'Likes',
        tableName:'Likes',
    }
  );
  
  export default Likes