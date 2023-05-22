import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'shared';
import { NotFoundComponent } from './pages/not-found.component';
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
    { path: '', component: NotFoundComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        NotFoundComponent
    ]
})
export class NotFoundModule { }
