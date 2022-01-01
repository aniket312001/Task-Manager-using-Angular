import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/Service/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAddTask !: boolean
  subscription !: Subscription

  constructor(private uiService:UiService) { 

    this.subscription = this.uiService.onToggle().subscribe(val=>this.showAddTask = val)


  }
  name = "Task Manager"
  ngOnInit(): void {
  }


  toggleAddTask(){
    this.uiService.toggleAddTask()
  }
}
