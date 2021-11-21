import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,FormArray, FormGroupName, Validators } from "@angular/forms";
import { educationalFieldarray,workFieldarray,skillArray,languageArray } from "../app.module";
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
    // 'userSammary': new FormControl('')
  });

  objective = new FormGroup({
    userobjective: new FormControl(''),
  })

  educationalFieldarray = new educationalFieldarray();
  Earr: any=[];
  workFieldarray =new workFieldarray();
  Warr: any =[];
  skillArray = new skillArray();
  Sarr: any=[];
  languageArray = new languageArray();
  Larr: any=[];

  ngOnInit(){
    this.Earr.push(this.educationalFieldarray);
    this.Warr.push(this.workFieldarray);
    this.Sarr.push(this.skillArray);
    this.Larr.push(this.languageArray);
  };
  onsubmit(){ }

  addEduField(){
    this.educationalFieldarray= new educationalFieldarray()
    this.Earr.push(this.educationalFieldarray);
  };
  addWorkField(){
    this.workFieldarray= new workFieldarray()
    this.Warr.push(this.workFieldarray);
  };
  addSkill(){
    this.skillArray= new skillArray()
    this.Sarr.push(this.skillArray);
  }
  addLanguage(){
    this.languageArray= new languageArray()
    this.Larr.push(this.languageArray);
  }

  removeEduField(index: any){
    this.Earr.splice(index,1);
  }
  removeWorkField(index: any){
    this.Warr.splice(index,1);
  }
  removeSkillField(index: any){
    this.Sarr.splice(index,1);
  }
  removeLanguageField(index: any){
    this.Larr.splice(index,1);
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