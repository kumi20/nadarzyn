import {Component, Input,Type, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver, OnDestroy, ElementRef, ComponentRef, isDevMode, OnInit} from '@angular/core';

import { StaticComponent } from '../template/static/static.component';
import { NewsComponentView } from '../template/news/news.component';
import { MenuParent } from '../template/menu/menu/menu.component';
import { MapyComponent } from '../template/mapy/mapy.component';
import { CformTemplateComponent } from '../template/cform/cform.component';
import { PoolComponent } from '../template/pool/pool.component';
import { GalleryComponent } from '../template/gallery/gallery.component';
import { NewsletterComponent } from '../template/newsletter/newsletter.component';
import { CalendarTemplateComponent } from '../template/calendar/calendar.component';

@Component({
  selector: 'app-dynamic-component',
  entryComponents:[
    StaticComponent,
    NewsComponentView,
    MenuParent,
    MapyComponent,
    CformTemplateComponent,
    PoolComponent,
    GalleryComponent,
    NewsletterComponent,
    CalendarTemplateComponent
  ],
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
  inputs: ['idTresci','pageElement']
})


export class DynamicComponentComponent implements OnInit {

  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) dynamicComponentContainer;
  @Input() componentData; 
  idTresci;
  pageElement;
    
    images = [
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg", description: "Image 1" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg", description: "Image 2" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", description: "Image 3" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", description: "Image 4" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", description: "Image 5" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", description: "Image 6" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", description: "Image 7" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", description: "Image 8" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", description: "Image 9" }
        ]

  constructor(private componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.componentData.component);
    const componentRef = this.dynamicComponentContainer.createComponent(factory);
    componentRef.instance.idtresci = this.idTresci;
    componentRef.instance.pageElement = this.pageElement;
    //componentRef.instance.callMeFromParent;
    componentRef.changeDetectorRef.detectChanges();
  }

}
