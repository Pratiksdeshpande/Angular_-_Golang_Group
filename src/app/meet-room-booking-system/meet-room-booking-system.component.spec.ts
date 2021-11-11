import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetRoomBookingSystemComponent } from './meet-room-booking-system.component';

describe('MeetRoomBookingSystemComponent', () => {
  let component: MeetRoomBookingSystemComponent;
  let fixture: ComponentFixture<MeetRoomBookingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetRoomBookingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetRoomBookingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
