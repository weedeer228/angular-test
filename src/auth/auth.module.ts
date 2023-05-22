import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
        AuthComponent
    ]
})
export class AuthModule { }
