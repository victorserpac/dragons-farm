import { Injectable, } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class DragonsResolver implements Resolve<boolean> {  

  resolve(): boolean {
    return true;
  }
}
