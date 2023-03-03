import {
    DataTypes,
    Model,
  } from 'sequelize';
  import sequelize from './index';
  
  export class News extends Model{
    public readonly postId!: number;
    public userId! : number;
    public nickname! : string;
    public title! :string;
    public content! : string;
    public admin! : boolean;
    public image! : string;
    public likes! : number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
    public static associations:{        
    };
  }
  
  News.init(
    {
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
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
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
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
        modelName:'News',
        tableName:'News',
    }
  );
  
  export default News