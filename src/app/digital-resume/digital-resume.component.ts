import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-digital-resume',
  templateUrl: './digital-resume.component.html',
  styleUrls: ['./digital-resume.component.css']
})
export class DigitalResumeComponent  {
  
  rform= new FormGroup({
    mName:new FormControl('',Validators.required),
    lName:new FormControl(''),
    month:new FormControl('')
    
  })
  post(val: any){
    console.log(val.mName)
  }
  display = false;
  generatecv(){
    this.display = true;
  }
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
  
  };
