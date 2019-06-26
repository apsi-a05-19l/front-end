import {Component, Input, OnInit} from '@angular/core';
import {PartModel} from '../../wiki/models/PartModel';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {
  @Input() list: PartModel[];
  constructor() { }

  ngOnInit() {
  }

}
