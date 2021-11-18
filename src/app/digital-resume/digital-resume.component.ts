import { Component} from '@angular/core';
import { FormControl, FormGroup,FormArray, FormGroupName, Validators } from "@angular/forms";
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-digital-resume',
  templateUrl: './digital-resume.component.html',
  styleUrls: ['./digital-resume.component.css']
})
export class DigitalResumeComponent  {

  public firstname='';
  public middlename='';
  public Lastname='';
  public gender='';
  public contactNo ='';
  public telephoneNo ='';
  public email ='';
  public city ='';
  public state ='';
  public pincode ='';
  public sammary='';
  public instituteName='';
  public passingYear='';
  public percentage='';
  public courseName ='';


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

  educationaldata = new FormGroup({
    'educationalField': new FormArray([])
  });

  

  get EDUcontrols(){
    return (<FormArray>this.educationaldata.get('educationalField')).controls;
  }

  onsubmit() {
    console.log(this.personaldata.value);
  }
  addEduField(){
    const control=new FormControl('');
    (<FormArray>this.educationaldata.get('educationalField')).push(control);
  }

  display = false;
  generatecv(){
    this.display = true;
  }
  
  
  constructor(){}
  };
  