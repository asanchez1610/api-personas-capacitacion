import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasService } from '../../services/personas/personas.service';
import { PersonasController } from '../../controllers/personas/personas.controller';
import { Persona } from '../../models/persona.entity';
import { TipoDocumento } from '../../models/tipoDocumento.entity';
import { Ubigeo } from '../../models/ubigeo.entity';

@Module({
    imports:[ TypeOrmModule.forFeature([Persona, TipoDocumento, Ubigeo]) ],
    providers: [PersonasService],
    controllers: [ PersonasController ] 
})
export class PersonasModule {}
