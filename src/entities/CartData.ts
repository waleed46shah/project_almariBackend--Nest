import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cartdata', { schema: 'public' })
export class Cartdata {
  @PrimaryColumn({ type: 'bigint', name: 'id' })
  ID: string;

  @Column('character varying', { name: 'title', length: 100, nullable: true })
  TITLE: string | null;

  @Column({ name: 'price', type: 'int8', nullable: true })
  PRICE: number | null;

  @Column('character varying', { name: 'image', length: 1000, nullable: true })
  IMAGE: string | null;

  @Column('character varying', {
    name: 'itemlink',
    nullable: true,
    length: 1000,
  })
  ITEMLINK: string | null;

  @Column('character varying', {
    name: 'description',
    length: 1000,
    nullable: true,
  })
  DESCRIPTION: string | null;

  @Column('character varying', { name: 'skucode', length: 100, nullable: true })
  SKUCODE: string | null;

  @Column('character varying', {
    name: 'username',
    length: 100,
    nullable: true,
  })
  USERNAME: string | null;
}
