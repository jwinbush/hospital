import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})


export class FaqComponent implements OnInit {


  light: any;
  @ViewChild("faq", { static: true }) faqElement!: ElementRef;

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
    //Scroll into Faq componet   
    this.sharingService.navToElement(el);
  }
}
