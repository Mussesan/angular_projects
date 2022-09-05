import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { ListTaskComponent } from './list-task';
import { AddTaskComponent } from './add-task';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ListTaskComponent,
    AddTaskComponent,
  ],
  providers: [TaskService]
})
export class TasksModule { }
