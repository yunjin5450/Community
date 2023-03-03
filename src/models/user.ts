import {
  DataTypes,
  Model,
} from 'sequelize';
import sequelize from './index';

export class Users extends Model{
  public readonly userId!: number;
  public id! : string;
  public password! : string;
  public nickname! : string;
  public Email!: string;
  public naverId! : string;
  public kakaoId! : string;
  public googleId! : string;
  public provider! : string;
  public phone! : string;
  public birth! : string;
  public admin! : boolean;
  public refreshToken! : string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations:{        
  };
}

Users.init(
  {
      userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },
      id: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: false
      },
      nickname: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: false
      },
      Email: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: false
      },
      naverId: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      kakaoId: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      googleId: {
          type: DataTypes.STRING,
          allowNull: true
      },
      provider: {
          type: DataTypes.STRING,
          allowNull: true
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: false
      },
      birth: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: false
      },
      admin: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
      },
      refreshToken: {
          type: DataTypes.STRING,
          allowNull: true 
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
      modelName:'Users',
      tableName:'Users',
  }
);

export default Users