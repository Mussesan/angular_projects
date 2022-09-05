import { Component, OnInit } from '@angular/core';

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
    this.tasks = [

    ]
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }
}
