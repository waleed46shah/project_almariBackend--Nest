import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UserLogin } from './UserLogin';

@Entity('userinfo', { schema: 'public' })
export class UserInfo {
  @PrimaryColumn('bigint', { name: 'id' })
  ID: number;

  @Column('character varying', {
    name: 'firstname',
    nullable: true,
    length: 30,
  })
  FIRSTNAME: string | null;

  @Column('character varying', {
    name: 'lastname',
    nullable: true,
    length: 30,
  })
  LASTNAME: string | null;

  @Column('integer', { name: 'age', nullable: true })
  AGE: number | null;

  @Column('character varying', { name: 'city', nullable: true })
  CITY: string | null;

  @Column('character varying', { name: 'gender', nullable: true })
  GENDER: string | null;

  @OneToMany(() => UserLogin, (userlogin) => userlogin.USERID)
  USERLOGIN: UserLogin[];
}
