import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listAll();
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

  deleteTask($event: any, task: Task):void {
    $event.preventDefault();
    if(confirm('The Task will be deleted, confirm?'))
    this.taskService.deleteTask(task.id);
    this.tasks = this.taskService.listAll();  
  }

  completeTask($event: any, task: Task):void {
    if(!task.done) {
      task.done = true;
    } else {
      task.done = false;
    }
  }

  changeStatus(task: Task):void {
    if(task.done == false){
      confirm('The Task will be COMPLETED, confirm?')
      task.done = true
    } else {
      confirm('The Task will be OPEN, confirm?')
      task.done = false;
    }
    this.taskService.changeStatus(task.id);
    this.tasks = this.listAll();  
  }


}
