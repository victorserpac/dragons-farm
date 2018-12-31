import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";

interface Event {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  protected _eventsSubject = new Subject<Event>();

  public BroadcastEvent(key: string, value: any = undefined) {
    this._eventsSubject.next({ key, value });
  }

  public GetEvent(key: string): Observable<object> {
    return this._eventsSubject.asObservable()
      .pipe(
        filter(e => e.key === key),
        map(e => e.value)
      );
  }
}