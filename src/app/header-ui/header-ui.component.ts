import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';
import { EventManagerService } from '../_services/event-manager.service';
import { UiService } from '../_services/ui.service';

@Component({
  selector: 'app-header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.scss']
})
export class HeaderUiComponent implements OnInit {

  constructor(private router: Router, private eventManager: EventManagerService, public uiService: UiService, public dataService: DataService) { }

  ngOnInit(): void {
    console.log('HEADER');
    console.log(this.dataService)
    console.log(this.dataService.nextProject);
  }

  getClassString() {
    return this.uiService.isFocused ? 'selected ' : '' + this.uiService.isHovering ? 'show ' : '';
  }

  navigateButtonClick(path: string) {
    // this.router.navigate(['/' + path]);
    this.eventManager.navigateToProject(path);
  }
}
