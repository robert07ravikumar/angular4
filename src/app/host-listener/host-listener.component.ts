import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter') doSomething(){
    console.log('mouse eneterred');
  }

  @HostListener('mouseleave') doMousLeave(){
    console.log('mouse leave');
  }

  @HostListener('click',['$event'])
  clickeEvent(event){
    console.log(event);
  }

  @HostListener('document:click',['$event'])
  documentClicked(eve){
    console.log('document cliekd event',eve);
  }
}
