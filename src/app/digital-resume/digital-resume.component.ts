import { Component} from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, FormGroupName, Validators } from "@angular/forms";
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




  personaldata = new FormGroup({
    'UserName': new FormControl(null),
    'UserLastName': new FormControl(null),
    'useraddress' : new FormGroup({
      'usercity': new FormControl(''),
      'userstate': new FormControl(''),
      
    })
  })
  onSubmit() {
    console.log(this.personaldata);
  }
  
  // arr = [null];
  // add(){
    //   this.arr.push(1);
  //   console.log(this.arr);
  // }

  
  // rform= new FormGroup({
    //   mName:new FormControl('',Validators.required),
  //   lName:new FormControl(''),
  //   month:new FormControl('')
    
  // })

  display = false;
  generatecv(){
    this.display = true;
  }
  
  
  constructor(){}
  };
  