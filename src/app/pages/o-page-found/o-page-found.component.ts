import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-page-found',
  templateUrl: './o-page-found.component.html',
  styleUrls: ['./o-page-found.component.css']
})
export class OPageFoundComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
