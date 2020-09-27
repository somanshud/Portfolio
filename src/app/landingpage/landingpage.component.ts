import { Component, OnInit, Inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import Data from '../../assets/data/particles/particles.json';
import { Router } from '../../../node_modules/@angular/router';


declare var particlesJS: any;
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  initialnumber=-1;
  initialnumber1=-1;
  timeo=100;
  timeo1=100;
  totalcountexp=0;
  totalcountproject=0;
  onetime=0;
  data={jobs:[]};
  constructor(private router: Router) {
    //this.wowService.init();
   }           
  ngOnInit() {
    particlesJS('particles-js', Data, function() {
      console.log('callback - particles.js config loaded');
    });
    $(".afterbday").css("display", "none");
                                                                           
    //this.wowService.init();
   
  }                                                                                    
                                                  
  scrollToDiv(value:string){
      $("html, body").animate({ scrollTop: $('#' + value).offset().top-70 }, 1000);
  }

  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
     // console.log(window.pageYOffset);
     // console.log($("list-item-1").height())
    } 

    

    @ViewChild('componentDiv') componentDiv: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.componentDiv.nativeElement;
    const viewportOffset = element.getBoundingClientRect();
    const top = viewportOffset.top;
    if (top <= 200) {
      if(this.onetime==0){
        this.countercode(3,10);
        this.onetime++;
      }
      
    }
  }
  

  countercode(exp,projects){
    while ( this.initialnumber != exp) {		this.timeo+=600;		this.initialnumber++;		this.timeoutygh(this.initialnumber,this.timeo,'exp'); 
    }	
    while ( this.initialnumber1 != projects) {		this.timeo1+=250;		this.initialnumber1++;		this.timeoutygh(this.initialnumber1,this.timeo1,'project');		  
    }
}

 second = 1000;
      minute = this.second * 60;
      hour = this.minute * 60;
      day = this.hour * 24;
      
      
      @ViewChild('hours') hours: ElementRef;
      @ViewChild('days') days: ElementRef;
      @ViewChild('minutes') minutes: ElementRef;
      @ViewChild('seconds') seconds: ElementRef;
 countDown = new Date('Aug 31, 2020 00:00:00').getTime();
    x = setInterval(() => {    
      console.log(this.countDown);
      
      let now = new Date().getTime(),
          distance = this.countDown - now;
          console.log(now);
          console.log(distance);
      $("#days").text(Math.floor(distance / (this.day)));
      $("#hours").text(Math.floor((distance % (this.day)) / (this.hour)));
      $("#minutes").text(Math.floor((distance % (this.hour)) / (this.minute)));
      $("#seconds").text(Math.floor((distance % (this.minute)) / this.second));

      //do something later when date is reached
      if (distance < 0) {
       clearInterval(this.x);
       $(".beforebday").css("display", "none");
       $(".afterbday").css("display", "block");
      }

    }, this.second)


  

  timeoutygh(lclc,timeo,type) {	
    if(type=='exp'){
      setTimeout( ()=> { this.totalcountexp=lclc;	console.log(this.totalcountexp);	}, timeo);
    } else{
      setTimeout( ()=> { this.totalcountproject=lclc;	console.log(this.totalcountproject);	}, timeo);
    }
      
    		}
  
  

}
