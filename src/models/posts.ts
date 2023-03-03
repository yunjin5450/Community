import {
  DataTypes,
  Model,
} from 'sequelize';
import sequelize from './index';
  
export class Posts extends Model{
  public readonly postId!: number;
  public userId! : number;
  public nickname! : string;
  public category! : JSON;
  public option!: string;
  public title! : string;
  public content! : string;
  public image! : string;
  public likes! : number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  
  public static associations:{        
  };
}
  
Posts.init(
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
        category: {
          type: DataTypes.JSON,
          allowNull: false,
          defaultValue: { category: [] },
        },
        option: {
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
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        likes: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        }
  }, 
  {
    sequelize,
    modelName: 'Posts',
    tableName:'Posts',
  }
);

export default Posts
