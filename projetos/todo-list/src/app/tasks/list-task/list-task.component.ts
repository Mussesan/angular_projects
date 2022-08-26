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
      new Task(1, "Tarefa 1 - Lavar a louça", true),
      new Task(2, "Tarefa 2 - Passear com dog", true),
      new Task(3, "Tarefa 3 - Colocar lixo na rua", true),
    ]
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

}
