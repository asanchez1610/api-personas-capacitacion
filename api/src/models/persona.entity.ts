import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Index, ManyToOne} from "typeorm";
import { TipoDocumento } from "./tipoDocumento.entity";
import { Ubigeo } from "./ubigeo.entity";

@Entity()
export class Persona {
  @PrimaryGeneratedColumn({ type : 'int' })
  id?: number;

  @Column({ length: 300 })
  nombres: string;

  @Column({ length: 300 })
  apellidos: string;

  @Column()
  numeroDocumento: string;

  @Column({ length: 300 })
  email: string;

  @Column({ length: 500 })
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  estado: boolean;

  @ManyToOne(type => TipoDocumento)
  @JoinColumn({ name : 'id_tipo_documento'})
  tipoDocumento: TipoDocumento;

  @ManyToOne(type => Ubigeo)
  @JoinColumn({ name : 'id_ubigeo'})
  ubigeo: Ubigeo;

}