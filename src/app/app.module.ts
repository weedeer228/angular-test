import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuService } from './menu/services/menu.services';
import { MenuComponent } from './menu/components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EditUserDataComponent } from './edit-user-data/edit-user-data.component';



@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
      EditUserDataComponent
   ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,

        BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatMenuModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatInputModule,

    ],
    providers: [MenuService],
    bootstrap: [AppComponent]
})
export class AppModule { }
