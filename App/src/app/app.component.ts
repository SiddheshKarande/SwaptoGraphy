import { Component } from '@angular/core';
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  Menu: any[];

  constructor(private router: Router){
    this.getMenu();
  }

  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    }); 

    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  
    });
  
    jQuery(document).ready(function($) {
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 400) {
            $('#liactive').addClass('no-display');
            $('#liactive1').removeClass('no-display');
        } else if (ww >= 401) {
          $('#liactive').removeClass('no-display');
          $('#liactive1').addClass('no-display');
        };
      };
      $(window).resize(function(){
        alterClass();
      });
      //Fire it when the page first loads:
      alterClass();
    });

  }

  getMenu(){
    this.Menu = [
      {'Path': 'main/dashboard', 'Name':'Dashboard', 'RelImg': 'fa fa-dashboard'},
      {'Path': 'main/picture', 'Name':'Picture', 'RelImg': 'fa fa-image'},
      {'Path': 'main/video', 'Name':'Video', 'RelImg': 'fa fa-video-camera'},
      {'Path': 'main/event', 'Name':'Event', 'RelImg': 'fa fa-calendar'},
      {'Path': 'main/contact', 'Name':'Contact', 'RelImg': 'fa fa-phone'},
      {'Path': 'main/about', 'Name':'About', 'RelImg': 'fa fa-info'}
    ]
    this.initialRoute(this.Menu[0].Path);
  }
  
  initialRoute(path){
    this.router.navigate([path]);
  }
}
