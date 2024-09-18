// home.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'; // Import icons

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  light: any;
  @ViewChild("about", { static: true }) aboutElement!: ElementRef;

  // Declare the icons
  faCoffee = faCoffee;
  faHome = faHome;

  toggleNav() {
    if (this.light == "light") {
      this.light = "dark";
    }
    else {
      this.light = "light";
    }

    this.sharingService.setData(this.light);
  }

  constructor(private activeRoute: ActivatedRoute,
    private sharingService: SharingService) { }

  ngOnInit(): void {
    this.light = "light";
    this.light = this.sharingService.getData();
  }

  ngAfterViewInit() {
    let params = this.activeRoute.snapshot.params;
    //Check if the parameter comes for the about
    if (params !== null && typeof params === 'object' && params.goAbout) {
      if (this.aboutElement != undefined) {
        this.aboutElement.nativeElement.scrollIntoView({block: "center", behavior: "smooth" });
      }
    }
  }

  navToElement(el: any): void {
    // Scroll into Home component
    this.sharingService.navToElement(el);
  }
}
