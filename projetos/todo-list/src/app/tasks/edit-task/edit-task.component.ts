import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @ViewChild('formTask', {static: true}) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.task = this.taskService.findById(id);
  }

  updateTask(): void {
    if (this.formTask.form.valid) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }

}
