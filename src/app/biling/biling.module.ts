import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BilingComponent } from './pages/biling.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: '', component: BilingComponent },
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
        BilingComponent
    ]
})
export class BilingModule { }
