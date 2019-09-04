import { Controller , Get, Post, Body, Query, Inject, Param} from '@nestjs/common';
import { Persona } from '../../models/persona.entity';
import { PersonasService } from '../../services/personas/personas.service';
import { Filter } from '../../dto/filter';

@Controller('personas')
export class PersonasController {

    constructor(
        @Inject('PersonasService')
        private readonly personasService: PersonasService
    ){}

    @Get()
    listarPersonas(@Query() filter: Filter) {
        return this.personasService.listarPersonas(filter);
    }

    @Get('tipo-documento')
    listarTipoDocumento(){
        return this.personasService.listarTipoDocumento();
    }
    
    @Get('departamantos')
    listarDepartamantos(){
        return this.personasService.listarUbigeos(null);
    }

    @Get(':codDepartamento/provincias')
    listarProvincias(@Param('codDepartamento') codDepartamento){
        let filter = new Filter();
        filter.codDepartamento = codDepartamento;
        return this.personasService.listarUbigeos(filter);
    }

    @Get(':codDepartamento/:codProvincia/distritos')
    listarDistritos(@Param('codDepartamento') codDepartamento, 
                    @Param('codProvincia') codProvincia){
        let filter = new Filter();
        filter.codDepartamento = codDepartamento;
        filter.codProvincia = codProvincia;
        return this.personasService.listarUbigeos(filter);
    }

    @Post()
    registrarPersona(@Body() persona: Persona) {
        return this.personasService.registrarPersona(persona);
    }

}
