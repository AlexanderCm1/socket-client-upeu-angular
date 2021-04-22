import { TestBed } from '@angular/core/testing';

import { WebsocketService  } from './web-socket-service.service';

describe('WebSocketServiceService', () => {
  let service: WebsocketService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
