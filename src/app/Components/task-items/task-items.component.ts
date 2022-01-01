import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  @Input() task !: Task
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(data:any){
    console.log(data)
    this.onDeleteTask.emit(data)
  }

  onToggle(data:any){
    
    this.onToggleReminder.emit(data)
  }



}
