import { Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter, ViewChildren, AfterViewInit, OnDestroy} from '@angular/core';
import { EventService } from '../event.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChildren('dynamiCom') dynamiCom;  
  id: number = 1;
  private sub: any;
  cform;
  home = {
        home: 'HOME',
        premises: 'OBIEKT',
        visualization: 'WSTĘPNA WIZUALIZACJA',
        state: 'STAN OBECNY',
        location: 'LOKALIZACJA',
        contact: 'KONTAKT',
        powierzchnia: '100 800 m'+'2'.sup()
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
    
  ngAfterViewInit(){
      this.dynamiCom.forEach(el=>{
          el.pobierzKontrolki(this.id);
      })
  }
    
 ngOnDestroy(){

 }    
    
    send(event){
        if (event.email == '' || event.message == '') this.event.wyswietlInfo('info','Proszę podać email i treśc wiadomości');
        else{
            this.event.klepsydraStart();
            this.CmsService.send(`http://kumi20.webd.pl/dusseldorf/api/wyslij.php`, event).subscribe(
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