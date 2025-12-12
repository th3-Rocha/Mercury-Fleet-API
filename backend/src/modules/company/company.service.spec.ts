import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { CompanyRepository } from './company.repository';

describe('CompanyService', () => {
  let service: CompanyService;
  const repositoryMock = {
    findByUserId: jest.fn(),
    update: jest.fn(),
    updateByUserId: jest.fn(),
  } as unknown as CompanyRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyService,
        {
          provide: CompanyRepository,
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
