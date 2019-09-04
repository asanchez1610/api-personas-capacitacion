import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasModule } from './modules/personas/personas.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'admin',
    database: 'capacitaciones_tech',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), PersonasModule ]
})
export class AppModule {

  constructor(private readonly connection: Connection) {}

}
