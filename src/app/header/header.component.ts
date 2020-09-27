import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItem='1';
  constructor() { }

  ngOnInit(): void {
  }

  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;  
}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
    document.documentElement.scrollTop > 20) {
      console.log('in')
      document.getElementById('mainNav').classList.add('navbar-shrink');
     // document.getElementById('mainNav').classList.add('fixed-top');
     // $("#mainNav").css({"animation": "bounceInDown 1s"});
     //$("#mainNav").css({'position': 'fixed', 'top': '0px'}); 
    } else {     
      document.getElementById('mainNav').classList.remove('navbar-shrink');
      // document.getElementById('mainNav').classList.remove('fixed-top');
     // $("#mainNav").css({"animation": ""});    
    // $("#mainNav").css({'position': 'relative', 'top': '0px'});                  
    }                 
  }

}
