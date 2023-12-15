import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  template: `
    <h2>Appointments</h2>
    <!-- Display appointments and allow user interaction -->
  `,
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Fetch appointments or perform any necessary initialization
  }
}