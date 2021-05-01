import { TestBed } from '@angular/core/testing';

import { CardModelService } from './card-model.service';

describe('CardModelService', () => {
  let service: CardModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
