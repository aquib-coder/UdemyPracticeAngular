import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddServerComponent } from './add-server/add-server.component';

//This is my case 
const routes: Routes = [
    {
        path: 'server',
        component: AddServerComponent
    },
    {
        path: 'account',
        component: AccountComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }