import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false, tableName: 'user' })
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;
}
