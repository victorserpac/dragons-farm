import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public dragon = {
    slug: 'foobar',
    name: 'Foobar',
  }

  constructor() { }

  ngOnInit() {
  }

  newDragon() {
    
  }

  view() {
    console.log('ate');
  }

  edit() {
    console.log('teste');
  }

}
