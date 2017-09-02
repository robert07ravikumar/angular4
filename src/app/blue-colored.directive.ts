import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueColored]'
})
export class BlueColoredDirective {

  constructor(element: ElementRef) { 
    console.log(element);
    element.nativeElement.style.color = 'blue';
  }

}
