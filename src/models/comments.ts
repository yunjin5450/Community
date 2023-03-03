import {
    DataTypes,
    Model,
  } from 'sequelize';
  import sequelize from './index';
  
  export class Comments extends Model{
    public readonly commentId!: number;
    public postId! : number;
    public userId! : number;
    public category! : JSON;
    public nickname! : string;
    public comment! : string;
    public likes! : number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
    public static associations:{        
    };
  }
  
  Comments.init(
    {
        commentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: { category: [] },
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
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
        modelName:'Comments',
        tableName:'Comments',
    }
  );
  
  export default Comments