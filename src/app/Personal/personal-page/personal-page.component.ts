import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) { }

  aboutMe = {
    title: "About Me",
    desc: `A Front End Developer by profession and a Poet by passion. </br> </br>
       I come from a small city, Ujjain and before someone ate a BAT, I was living in Pune. </br>
       I love coding, reading, writing, travelling, swimming and yes, eating. I am a big big foodie. </br>
       I am into poetry from last 3 years. I have performed in 5 states across India and over 200 stages. I love being on state. </br>
       Recently my writeups got published over Rekhta <br/>.
       Except poetry, I love to travel and click pictures of every beautiful thing I find. <br>
       I love dogs and cats both, I don't discriminate! And I am super fan of Memes! I can watch them all day!
       `
  }
  poemsRowOne = ["one", "two", "three"]


  ngOnInit(): void {
  }




}
