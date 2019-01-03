import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [EventService] })
    service = TestBed.get(EventService);
  });

  describe('initial service state', () => {
    it('should be created', () => {
      expect(service).toBeDefined();
    });

    it('should define public BroadcastEvent()', () => {
      expect(service.BroadcastEvent).toEqual(jasmine.any(Function));
    });

    it('should define public GetEvent()', () => {
      expect(service.GetEvent).toEqual(jasmine.any(Function));
    });
  });

  it('should dispatch event', (done) => {
    const TOPIC = 'FOOBAR';

    service.GetEvent(TOPIC).subscribe(done);

    service.BroadcastEvent(TOPIC);
  });

  it('should pass data through event dispatch', (done) => {
    const TOPIC = 'FOOBAR';
    const data = 'test';

    service.GetEvent(TOPIC).subscribe((res: any) => {
      expect(res).toEqual(data);
      done();
    });

    service.BroadcastEvent(TOPIC, data);
  });
});
