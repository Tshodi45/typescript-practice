// src/models/user.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/config';

class User extends Model {
  static init(arg0: { id: { type: any; autoIncrement: boolean; primaryKey: boolean; }; name: { type: any; allowNull: boolean; }; email: { type: any; allowNull: boolean; }; password: { type: any; allowNull: boolean; }; }, arg1: { sequelize: import("sequelize").Sequelize; tableName: string; }) {
      throw new Error('Method not implemented.');
  }
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
