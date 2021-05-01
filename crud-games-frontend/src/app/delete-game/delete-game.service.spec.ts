import { TestBed } from '@angular/core/testing';

import { DeleteGameService } from './delete-game.service';

describe('DeleteGameService', () => {
  let service: DeleteGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
