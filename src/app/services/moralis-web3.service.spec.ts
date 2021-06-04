import { TestBed } from '@angular/core/testing';

import { MoralisWeb3Service } from './moralis-web3.service';

describe('MoralisWeb3Service', () => {
  let service: MoralisWeb3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoralisWeb3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
