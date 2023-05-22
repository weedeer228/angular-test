import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { IUser } from 'core/services';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-edit-user-data',
    templateUrl: './edit-user-data.component.html',
    styleUrls: ['./edit-user-data.component.css']
})
export class EditUserDataComponent implements OnInit {

    public userForm!: FormGroup;
    currentUser: IUser
    submitted: boolean = false;


    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.currentUser = AppComponent.currentUser!;
    }
    get form() { return this.userForm.controls }
    saveChanges() {
        this.submitted = true;
        console.log(this.userForm.get('phone')?.value);
        if (this.userForm.invalid) return;
        var firstName = this.userForm.get('firstName')?.value;
        var lastName = this.userForm.get('lastName')?.value;
        var phone = '+7' + this.userForm.get('phone')?.value;
        var url = this.userForm.get('url')?.value;
        AppComponent.updateUserData(firstName,lastName,phone,url)

        console.log(AppComponent.currentUser!.firstName);

        const navigationDetails: string[] = ['/profile'];
        this.router.navigate(navigationDetails);
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(255),
            ]],
            lastName: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(255),]],
            phone: ['', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10)
            ]],
            url: ''
        })
    }


}
