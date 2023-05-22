import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { IUser } from 'core/services';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
    currentUser: IUser

    constructor(private router: Router) {
        this.currentUser = AppComponent.currentUser!;
    }

    toEditProfile(): void {
        const navigationDetails: string[] = ['/profile/edit'];
        this.router.navigate(navigationDetails);
    }
    ngOnInit() {
    }

}
