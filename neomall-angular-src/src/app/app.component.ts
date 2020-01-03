import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NavigationCancel, NavigationEnd, Event, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private ngxService:NgxUiLoaderService, public router: Router){
    this.router.events.subscribe((event: Event)=>{
      this.navigationInterceptor(event);
    });
  }


  ngOnInit(): void {
    var menu = document.getElementById('bt-menu');
    var overlay = document.createElement('div');
		overlay.className = 'bt-overlay';
		menu.appendChild( overlay );  
  }

  menu(event: any): void {
    function mobilecheck() {
      var check = false;
      (function (a) { if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor);
      return check;
    }
    var classie = ()=> {
      function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
      }
      
      var hasClass, addClass, removeClass;
      
      if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
          return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
          elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
          elem.classList.remove( c );
        };
      }
      else {
        hasClass = function( elem, c ) {
          return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
          if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
          }
        };
        removeClass = function( elem, c ) {
          elem.className = elem.className.replace( classReg( c ), ' ' );
        };
      }
      
      function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
      }
      
      var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
      };

      return classie;
    }

    var resetMenu = function() {
      classie().remove( menu, 'bt-menu-open' );
      classie().add( menu, 'bt-menu-close' );
    };

    var closeClickFn = function(ev) {
      document.getElementById('menu-ul').style.display = "none";
      resetMenu();
      overlay.removeEventListener( eventtype, closeClickFn );
    };

    document.getElementById('menu-ul').style.display = "block";
    var overlay = document.querySelector('.bt-overlay');
    var eventtype = mobilecheck() ? 'touchstart' : 'click';

    var menu = document.getElementById('bt-menu');
    event.stopPropagation();
    event.preventDefault();

    if (classie().has(menu, 'bt-menu-open')) {
      classie().remove(menu, 'bt-menu-open');
      classie().add(menu, 'bt-menu-close');
    }
    else {
      classie().remove(menu, 'bt-menu-close');
      classie().add(menu, 'bt-menu-open');
      overlay.addEventListener(eventtype, closeClickFn);
    }
  }

  private navigationInterceptor(event: Event): void {

    if(event instanceof NavigationStart) {
      this.ngxService.start();
    }

    if(event instanceof NavigationEnd) {
      this.ngxService.stop();
    }

    if(event instanceof NavigationCancel) {
      this.ngxService.stop();
    }

    if(event instanceof NavigationError) {
      this.ngxService.stop();
    }
  }

}

