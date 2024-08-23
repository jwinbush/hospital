import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})   


export class ServicesComponent implements OnInit {


  light: any;
  @ViewChild("services", { static: true }) servicesElement!: ElementRef;

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
    //Scroll into Service componet   
    this.sharingService.navToElement(el);
  }
}
