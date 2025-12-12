import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyRepository } from './company.repository';

describe('CompanyController', () => {
  let controller: CompanyController;
  const repositoryMock = {
    findByUserId: jest.fn(),
    update: jest.fn(),
    updateByUserId: jest.fn(),
  } as unknown as CompanyRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [
        CompanyService,
        {
          provide: CompanyRepository,
          useValue: repositoryMock,
        },
      ],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
