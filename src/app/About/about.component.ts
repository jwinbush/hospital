import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {


  light: any;
  @ViewChild("about", { static: true }) aboutElement!: ElementRef;

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

  

  navToElement(el: any): void {
    //Scroll into About componet   
    this.sharingService.navToElement(el);
  }
}
