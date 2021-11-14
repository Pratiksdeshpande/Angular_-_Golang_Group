import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DigitalResumeComponent } from './digital-resume/digital-resume.component';
import { SignupandLoginComponent } from "./signupand-login/signupand-login.component";
import { NotepadComponent } from "./notepad/notepad.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { MeetRoomBookingSystemComponent } from "./meet-room-booking-system/meet-room-booking-system.component";

const routes: Routes = [
  { path:'digital-resume', component: DigitalResumeComponent },
  { path:'loginpage', component: SignupandLoginComponent },
  { path:'notepad', component: NotepadComponent },
  { path:'to-do-list', component: TodolistComponent },
  { path:'meet-room-booking-system', component: MeetRoomBookingSystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SignupandLoginComponent, NotepadComponent,DigitalResumeComponent, TodolistComponent, MeetRoomBookingSystemComponent]
