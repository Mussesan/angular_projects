import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  add(): void {
    if (this.formTask.form.valid) {
      this.taskService.addTask(this.task);
      this.router.navigate(["/tasks"]);
    }
  }
  

}
