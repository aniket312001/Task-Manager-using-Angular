import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/Service/task.service';
import { Task } from 'src/app/Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks : Task[]= []

  constructor(private service:TaskService) { }

  ngOnInit(): void {
   this.show()
  }

  deleteTask(task:Task){
    this.service.deleteTask(task).subscribe(data=>{
      console.log("task deleted successfully..!")
      this.show()
    })
  }
  show(){

    this.service.getTask().subscribe(data=>{
      this.tasks = data
    })
  }

  toggleReminder(task:Task){
    task.reminder = ! task.reminder
    this.service.updateTaskReminder(task).subscribe(data=>{
      console.log('Updated Successfully')
    })
  }


  addTask(task :Task){
    // console.log(task)
    this.service.addTask(task).subscribe(data=>{
      console.log("Data added Successfully..")
      this.tasks.push(data)
    })

  }
}
