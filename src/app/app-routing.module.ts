import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Guard } from './Guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'biling', loadChildren: () => import('app/biling/biling.module').then(m => m.BilingModule), canActivate: [Guard.forOwner] },
    { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) },
    { path: 'inventory', loadChildren: () => import('app/inventory/inventory.module').then(m => m.InventoryModule), canActivate: [Guard.forUsers] },

    { path: 'profile', loadChildren: () => import('app/profile/profile.module').then(m => m.ProfileModule), canActivate: [Guard.forUsers] },
    { path: 'reports', loadChildren: () => import('app/reports/reports.module').then(m => m.ReportsModule), canActivate: [Guard.forOwner] },
    { path: 'not-found', loadChildren: () => import('app/not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: 'login', loadChildren: () => import('auth/auth.module').then(m => m.AuthModule), canActivate: [Guard.onlyIfNotAuth] },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
