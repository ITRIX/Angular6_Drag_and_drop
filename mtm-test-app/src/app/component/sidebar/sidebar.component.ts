import { Component, OnInit } from '@angular/core';
import { ParsonaService } from '../../services/parsona.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  addElementField: any;

  constructor(private parsonaService : ParsonaService) {}

  ngOnInit() {
    this.addElementField = this.parsonaService.getElementsArray();
  }

}
