import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ubigeo{

  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  cod_ubigeo: number;

  @Column("int")
  cod_departamento: number;

  @Column("int")
  cod_provincia: number;

  @Column("int")
  cod_distrito: number;

  @Column("varchar", { length: 400 })
  nombre: string;

}