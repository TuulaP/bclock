import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-clock',
  templateUrl: './d-clock.component.html',
  styleUrls: ['./d-clock.component.scss']
})


export class DClockComponent implements OnInit {

  // private daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  private date = new Date();
  public hour : any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;


  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      const date=new Date();
      this.updateDate(date);
    }, 1000); // update every second

    this.day = this.daysArray[this.date.getDay()]; //0-6 Sun first fix needed

  }

  private updateDate(date: Date) {
    const hours = date.getHours();
    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12 || 12; 
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
    
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString(); 
 
    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
