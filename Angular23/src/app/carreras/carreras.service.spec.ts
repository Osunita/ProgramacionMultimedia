
import { CarrerasService } from './carreras.service';
import { TestBed, async, inject } from '@angular/core/testing';
describe('Service: carreras', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrerasService]
    });
  });

  it('should ...', inject([CarrerasService], (service: CarrerasService) => {
    expect(service).toBeTruthy();
  }));
});
