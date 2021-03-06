/**
* @Author: Tushar Agarwal <Tushar>
* @Date:   2016-12-30T00:50:21+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.formvalidation.ts
* @Last modified by:   Tushar
* @Last modified time: 2016-12-30T02:52:10+05:30
*/
import {Component} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
selector:'form-validation',
template:   `<div class="jumbotron">
  <h2>Model Driven (Reactive) Form with Validation</h2>
   <!-- Here we are declaring a local variable called “form” and setting it to an instance of ngForm. This is very important. Now our local form variable becomes of type FormGroup allowing us access to the FormGroup API’s on this local variable. We use this in the ngSubmit event where we send the value of the form via form.value -->
  <form [formGroup]="complexForm" (ngSubmit)="submitForm(complexForm.value)">
    <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['firstName'].valid&&complexForm.controls['firstName'].touched}" >
      <label>First Name:</label>
      <!-- Since we are working with template driven forms, we can use the ngModel directive to capture the values of our forms. One thing to note if you are coming from Angular 1.x. Using ngModel as shown below creates a one-way data binding, so once we hit submit the data is only sent to the controller. If we wanted to use two-way data binding, we would have to wrap the ngModel in [()] and assign an attribute to it. Also the name of the field corresponds to the name attribute so our first input will be firstName. -->
      <input type="text" class="form-control" placeholder="John" name="firstName" [formControl]="complexForm.controls['firstName']">
      <div class="alert alert-danger" *ngIf="complexForm.controls['firstName'].hasError('required')&&complexForm.controls['firstName'].touched">
        *you must provide your first name.
      </div>
    </div>
    <div class="form-group"  [ngClass]="{'has-error':!complexForm.controls['lastName'].valid&&complexForm.controls['lastName'].touched}">
      <label>Last Name</label>
      <input type="text" class="form-control" placeholder="Doe" name="lastName" [formControl]="complexForm.controls['lastName']">
      <div class="alert alert-danger" *ngIf="complexForm.controls['lastName'].hasError('required')&&complexForm.controls['lastName'].touched">
        *you must provide your last name.
      </div>
      <div class="alert alert-danger" *ngIf="complexForm.controls['lastName'].hasError('minlength')&&complexForm.controls['lastName'].touched">
        *your last name must be of atleast 5 characters.
      </div>
      <div class="alert alert-danger" *ngIf="complexForm.controls['lastName'].hasError('maxlength')&&complexForm.controls['lastName'].touched">
        *your last name must not exceed 10 characters.
      </div>
    </div>
    <div class="form-group">
      <label>Gender</label>
    </div>
    <div class="alert alert-danger" *ngIf="!complexForm.controls['gender'].valid&&complexForm.controls['gender'].touched">*You must select your gender</div>
    <!-- Radio and checkboxes work much the same way -->
    <div class="radio">
      <label>
        <input type="radio" name="gender" value="Male" [formControl]="complexForm.controls['gender']">
        Male
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="gender" value="Female" [formControl]="complexForm.controls['gender']">
        Female
      </label>
    </div>
    <div class="form-group">
      <label>Activities</label>
    </div>
    <label class="checkbox-inline">
      <input type="checkbox" value="hiking" name="hiking" [formControl]="complexForm.controls['hiking']"> Hiking
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="swimming" name="swimming" [formControl]="complexForm.controls['swimming']"> Swimming
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="running" name="running" [formControl]="complexForm.controls['running']"> Running
    </label>
    <div class="form-group">
      <button type="submit" class="btn btn-default" [disabled]="!complexForm.valid">Submit</button>
    </div>
  </form>
</div>`
})

export class FormValidationComponent{
  complexForm:FormGroup;

  constructor(fb:FormBuilder){
    this.complexForm=fb.group({
      'firstName' : ["",Validators.required],
      'lastName': ["",Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
      'gender' : ["",Validators.required],
      'hiking' : false,
      'running' : false,
      'swimming' : false
    });
  }

  submitForm(value:any):void{
    alert('Congratulations! your form is submitted');
    console.log(value)
  }
}
