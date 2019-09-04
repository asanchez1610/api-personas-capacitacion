import { Test, TestingModule } from '@nestjs/testing';
import { PersonasController } from './personas.controller';

describe('Personas Controller', () => {
  let controller: PersonasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasController],
    }).compile();

    controller = module.get<PersonasController>(PersonasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
