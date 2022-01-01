import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-task';
import { Task } from '../Task';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/tasks"
  getTask():Observable<Task[]>{
    // return of(TASKS)
    return this.http.get<Task[]>(this.url)
  }


  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(this.url+'/'+task.id)
  }


  updateTaskReminder(task:Task):Observable<Task>{
    return this.http.put<Task>(this.url+'/'+task.id,task)
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.url,task)
  }

}
