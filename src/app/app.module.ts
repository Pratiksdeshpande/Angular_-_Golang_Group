import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupandLoginComponent } from './signupand-login/signupand-login.component';
import { NotepadComponent } from './notepad/notepad.component';
import { DigitalResumeComponent } from './digital-resume/digital-resume.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MeetRoomBookingSystemComponent } from './meet-room-booking-system/meet-room-booking-system.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupandLoginComponent,
    NotepadComponent,
    DigitalResumeComponent,
    TodolistComponent,
    MeetRoomBookingSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
