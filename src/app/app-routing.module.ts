import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { APITestComponent } from './components/apitest/apitest.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/users/user.component';

const routes: Routes = [
    { path: 'apiTest', component: APITestComponent},
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent },
]

@NgModule({
    declarations: [
        HomeComponent,
        APITestComponent,
        UserComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}