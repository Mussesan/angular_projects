import { Routes } from '@angular/router';
import { AddTaskComponent } from './add-task';

import { ListTaskComponent } from './list-task';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list-task'
    },
    {
        path: 'tasks/list-task',
        component: ListTaskComponent
    },
    {
        path:'tasks/add-task',
        component: AddTaskComponent
    },
    {
        path:'tasks/edit-task/:id',
        component: EditTaskComponent
    }

];