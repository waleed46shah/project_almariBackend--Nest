import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserInfo } from './UserInfo';

@Entity('userlogin', { schema: 'public' })
export class UserLogin {
  @PrimaryColumn('bigint', { name: 'id' })
  ID: number;

  @Column('character varying', { name: 'email', length: 100 })
  EMAIL: string;

  @Column('character varying', { name: 'password', length: 30 })
  PASSWORD: string;

  @ManyToOne(() => UserInfo, (userInfo) => userInfo.USERLOGIN)
  @JoinColumn([{ name: 'userid', referencedColumnName: 'ID' }])
  USERID: UserInfo;
}
