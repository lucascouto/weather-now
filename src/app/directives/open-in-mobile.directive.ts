import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[openInMobile]',
})
export class OpenInMobileDirective {
  @Input() cardFooter!: ElementRef<HTMLElement>;
  @Input() cardFooterContent!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  @HostListener('click') onClick(): void {
    if (this.isTouchScreen()) {
      this.renderer.setStyle(this.cardFooter.nativeElement, 'height', '80px');
    }
  }

  private isTouchScreen(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
}
