import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren, AfterViewInit, OnDestroy} from '@angular/core';
import { EventService } from './event.service';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app'; 
  href;
  id;
  menu = {
        home: '',
        premises: '',
        visualization: '',
        state: '',
        location: '',
        contact: '',
        powierzchnia: ''
    };    
    
   constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router){}
    
   ngOnInit(){
       this.event.onRozeslijMenu.subscribe(menu=>this.otrzymaneMenu(menu));   

       //this.gaService.configure(this.googleAnalitycs);
   }
    
    otrzymaneMenu(menu){
        this.menu = menu;
        console.log(this.menu.home)
    }    
}
