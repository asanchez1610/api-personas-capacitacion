import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from '../../models/persona.entity';
import { Repository } from 'typeorm';
import { TipoDocumento } from '../../models/tipoDocumento.entity';
import { Ubigeo } from '../../models/ubigeo.entity';
import { Filter } from '../../dto/filter';

@Injectable()
export class PersonasService {

    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
        @InjectRepository(TipoDocumento)
        private readonly tipoDocumentoRepository: Repository<TipoDocumento>,
        @InjectRepository(Ubigeo)
        private readonly ubigeoRepository: Repository<Ubigeo>
    ) { }

    listarTipoDocumento(): Promise<TipoDocumento[]> {
        return this.tipoDocumentoRepository.find();
    }

    listarUbigeos(filter: Filter): Promise<Ubigeo[]> {
        let where = "ubigeo.cod_departamento <>  0 AND ubigeo.cod_provincia   = 0 AND ubigeo.cod_distrito   = 0";
        if (filter) {
            if (filter.codDepartamento && !filter.codProvincia) {
                where = "ubigeo.cod_departamento = :codDepartamento AND ubigeo.cod_provincia <> 0 AND ubigeo.cod_distrito   = 0";
            } else if (filter.codDepartamento && filter.codProvincia) {
                where = "ubigeo.cod_departamento = :codDepartamento AND ubigeo.cod_provincia = :codProvincia AND ubigeo.cod_distrito <> 0";
            }
        } else {
            filter = new Filter();
        }
        return this.ubigeoRepository
            .createQueryBuilder("ubigeo")
            .where(where, filter)
            .orderBy("ubigeo.nombre", "ASC").getMany();

    }

    registrarPersona(persona: Persona): Promise<Persona> {
        return this.personaRepository.save(persona);
    }

    listarPersonas(filter: Filter): Promise<Persona[]> {
        let where = "estado = true ";
        if (filter) {
            if (filter.query) {
                filter.query = '%'+filter.query+'%';
                where = where + " and upper(concat(persona.apellidos, persona.nombres,persona.numeroDocumento)) like upper(:query)";
            }
        } else {
            filter = new Filter();
        }
        return this.personaRepository.createQueryBuilder("persona")
            .leftJoinAndSelect("persona.tipoDocumento", "tipoDocumento")
            .leftJoinAndSelect("persona.ubigeo", "ubigeo")
            .where(where, filter)
            .getMany();

    }
}
