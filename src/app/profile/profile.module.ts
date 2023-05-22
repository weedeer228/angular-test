import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared';
import { ProfileComponent } from './pages/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserDataComponent } from 'app/edit-user-data/edit-user-data.component';


const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'edit', component: EditUserDataComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule

    ],
    exports: [],

    declarations: [
        ProfileComponent,

    ]
})
export class ProfileModule { }
