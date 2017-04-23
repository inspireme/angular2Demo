import { NewHero } from '../NewHero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new NewHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;


  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    //this.model = new NewHero(42, '', '', 'submit');
  }

  newHero() {
    this.model = new NewHero(43, '', '', 'new');
  }


  get diagnostic() { return JSON.stringify(this.model); }//for test



}
