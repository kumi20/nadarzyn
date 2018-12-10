import { Injectable, EventEmitter, Output } from '@angular/core';
import { ToastService } from './typescripts/pro/alerts'
import { MDBSpinningPreloader } from './typescripts/pro';

@Injectable()
export class EventService {

  constructor(private toastrService: ToastService) {}

@Output()
	onRozeslijMenu: EventEmitter<any> = new EventEmitter<any>();    

  wyswietlInfo(typ, tresc){
    switch(typ){
        case 'info': this.toastrService.info(tresc); break;
        case 'success': this.toastrService.success(tresc); break;
        case 'error': this.toastrService.error(tresc); break;
    }
  }
    
    klepsydraStart(){
        document.getElementById('klepsydra').style.display = 'block';
    }

    klepsydraStop(){
      document.getElementById('klepsydra').style.display = 'none';
    }
    
    rozeslij_menu(menu){
        this.onRozeslijMenu.emit(menu);
    }
}