import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@ngneat/reactive-forms';
import { Users } from './fake-database/users';
import { AppComponent } from 'app/app.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',

})
export class AuthComponent implements OnInit {
    submited: boolean = false;
    failed: boolean = false;
    public loginForm!: FormGroup;
    constructor(private router: Router, private formBuilder: FormBuilder) { }

    onLogin() {
        this.submited = true;
        console.log(this.loginForm.get('login')!.value);
        console.log(this.loginForm.get('password')!.value);
        var user = Users.find(u => u.email == this.loginForm.get('login')!.value
            && u.password == this.loginForm.get('password')!.value)
        if (!user) {
            this.failed = true;
            return;
        }
        AppComponent.currentUser = user;
        AppComponent.saveUser;
        const navigationDetails: string[] = ['/home'];
        this.router.navigate(navigationDetails);

    }

    get form() { return this.loginForm.controls }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            login: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required
            ]]
        })
    }

}
