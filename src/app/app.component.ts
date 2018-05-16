import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  title = 'app';
  sideBarActive: boolean = true;
  loading: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  ToggleSideBar() {
    if (this.sideBarActive) {
      this.sideBarActive = false;

      return;
    }
    this.sideBarActive = true;
  }
  closeSideNav() {
    let innerWidth = (window.screen.width);
    if (innerWidth <= 768) {
      this.sideBarActive = true;
      return;
    }
    this.sideBarActive = false;
  }


  // action triggered when user swipes
  swipe(action = this.SWIPE_ACTION.LEFT) {
     // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
      this.sideBarActive = true;
    } else {
      this.sideBarActive = false;
    }


  }


}
