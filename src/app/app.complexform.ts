/**
* @Author: Tushar Agarwal <Tushar>
* @Date:   2016-12-30T00:40:02+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.complexform.ts
* @Last modified by:   Tushar
* @Last modified time: 2016-12-30T01:26:49+05:30
*/
import {Component} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
selector:'complex-form',
templateUrl:'./app.complexform.html'
})
export class ComplexFormComponent{
  complexForm: FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm=fb.group({
      'firstName':'',
      'lastName':'',
      'gender':'Male',
      'hiking':false,
      'running':false,
      'swimming':false,
    });
  }

  submitForm(value:any):void{
    console.log('reactive form data');
    console.log(value);
  }
}
