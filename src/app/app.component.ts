import { Component } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicasBasicasPipes';
  name = 'sheldon';
  myArray=[1,2,3,4,5,6,7,8];
  PI= Math.PI;
  myNum= 0.589;
  salary = 3500.5;
  nerd = {​​ name: 'Sheldon',
   alias: 'Shelly', 
   song: 'Soft Kitty',
    skills: ['eidetic memory', 'makes people nervous'], 
    youtubeChannel: 'Fun With Flags', 
    address: {​​ street: 'Elm Street',
     number: 3, 
     city: 'Pasadena' ,
    }
    
    ​​ }​​;
    myDate = new Date();
    video= 'o-0ygW-B_gI';
  
   }​​