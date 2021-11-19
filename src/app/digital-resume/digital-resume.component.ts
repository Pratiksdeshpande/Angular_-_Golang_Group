import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,FormArray, FormGroupName, Validators } from "@angular/forms";
import { eduarr } from "../app.module";
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-digital-resume',
  templateUrl: './digital-resume.component.html',
  styleUrls: ['./digital-resume.component.css']
})
export class DigitalResumeComponent implements OnInit  {

  
  personaldata = new FormGroup({
    'userAbout': new FormGroup({
      'UserName': new FormControl(''),
      'UserMiddleName': new FormControl(''),
      'UserLastName': new FormControl(''),
    }),
    'usercontact': new FormGroup({
      'UserPhoneNo': new FormControl(''),
      'UsertelephoneNo': new FormControl(''),
      'UserEmail': new FormControl(''),
    }),
    'useraddress' : new FormGroup({
      'usercity': new FormControl(''),
      'userstate': new FormControl(''),
      'userpincode': new FormControl(''),
    }),
    'userSammary': new FormControl('')
  });

  eduarr = new eduarr();
  arr: any=[];
  ngOnInit(){
    this.arr.push(this.eduarr)
  }

  onsubmit(){

  }

  addEduField(){
    this.eduarr= new eduarr()
    this.arr.push(this.eduarr);
  }
  removeEduField(index: any){
    this.arr.splice(index,1);
  }
  display = false;
  generatecv(){
    this.display = true;
  };
}
  // public firstname='';
  // public middlename='';
  // public Lastname='';
  // public gender='';
  // public contactNo ='';
  // public telephoneNo ='';
  // public email ='';
  // public city ='';
  // public state ='';
  // public pincode ='';
  // public sammary='';
  // public instituteName='';
  // public passingYear='';
  // public percentage='';
  // public courseName ='';

    // onsubmit() {
  //   console.log(this.personaldata.value);
  // }
  
 // get instituteName(){
  //   return (<FormArray>this.educationaldata.get('institute')).controls;
  // }
  // get passYear(){
  //   return (<FormArray>this.educationaldata.get('passingYear')).controls;
  // }
  // get PercentageCGPA(){
  //   return (<FormArray>this.educationaldata.get('Percentage')).controls;
  // }
  // get courseName(){
  //   return (<FormArray>this.educationaldata.get('courseName')).controls;
  // }

  // educationaldata = new FormGroup({
  //   'institute': new FormArray([]),
  //   'passingYear': new FormArray([]),
  //   'Percentage': new FormArray([]),
  //   'courseName': new FormArray([])

  // });