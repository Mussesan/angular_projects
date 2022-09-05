import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { TaskRoutes } from "./tasks";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks/list-task',
        pathMatch: 'full'
    },
    ...TaskRoutes
]

@NgModule ({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
