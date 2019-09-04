import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoDocumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  codigo: string;

}