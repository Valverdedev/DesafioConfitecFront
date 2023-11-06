import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]'
})
export class DateMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '');

    if (value.length > 2) {
      input.value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
    } else if (value.length > 4) {
      input.value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
    }
  }
}
