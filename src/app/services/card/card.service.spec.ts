import { TestBed, inject } from '@angular/core/testing';

import { Services\card\cardService } from './services\card\card.service';

describe('Services\card\cardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services\card\cardService]
    });
  });

  it('should be created', inject([Services\card\cardService], (service: Services\card\cardService) => {
    expect(service).toBeTruthy();
  }));
});
