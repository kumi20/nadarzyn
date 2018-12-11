import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren, AfterViewInit, OnDestroy} from '@angular/core';
import { EventService } from '../event.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-en',
  templateUrl: './en.component.html',
  styleUrls: ['./en.component.scss']
})
export class EnComponent implements OnInit {

    cform;
    id;
    home = {
        home: 'HOME',
        premises: 'PREMISES',
        visualization: 'PRELIMINARY VISUALIZATION',
        state: 'CURRENT STATE',
        location: 'LOCATION',
        contact: 'CONTACT',
        powierzchnia: '100 800 sqm'
    };
    
  constructor(private CmsService: ApiService, private event: EventService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
      
      this.event.rozeslij_menu(this.home);
      
      this.cform = new FormGroup({
            name: new FormControl(""),
            email: new FormControl("", Validators.required),
            phone: new FormControl(""),
            message: new FormControl("", Validators.required)
      })
  }
    
    send(event){
        if (event.email == '' || event.message == '') this.event.wyswietlInfo('info','Please enter your email and message');
        else{
            this.event.klepsydraStart();
            this.CmsService.send(`https://warzywkubek.pl/dusseldorf/api/wyslij.php`, event).subscribe(
                response=>{
                    this.event.wyswietlInfo('success', 'Wiadomość została wysłana');
                    this.cform.controls['name'].setValue("");
                    this.cform.controls['email'].setValue("");
                    this.cform.controls['message'].setValue("");
                    this.cform.controls['phone'].setValue("");
                    this.event.klepsydraStop();
                },
                error =>{
                    this.event.klepsydraStop();
                    this.event.wyswietlInfo('error','Błąd wysyłania wiadomości');
                }
            )
        }
    }  

}
