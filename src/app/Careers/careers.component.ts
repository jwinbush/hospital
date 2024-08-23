import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})


export class CareersComponent implements OnInit {


  light: any;
  @ViewChild("careers", { static: true }) careersElement!: ElementRef;

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
    //Scroll into Careers componet   
    this.sharingService.navToElement(el);
  }
}
