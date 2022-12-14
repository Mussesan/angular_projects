import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { ListTaskComponent } from './list-task';
import { AddTaskComponent } from './add-task';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DoneTaskDirective } from './shared/done-task.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ListTaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    DoneTaskDirective,
  ],
  providers: [TaskService]
})
export class TasksModule { }
