import { Routes } from '@angular/router';
import { AddTaskComponent } from './add-task';

import { ListTaskComponent } from './list-task';

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
        path:'add-task',
        component: AddTaskComponent
    }
];