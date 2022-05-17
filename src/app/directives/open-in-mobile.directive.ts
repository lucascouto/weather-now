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

  private isFooterOpened = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('click') onClick(): void {
    if (this.isTouchScreen()) {
      if (!this.isFooterOpened) {
        this.openFooter();
      } else {
        this.closeFooter();
      }
    }
  }

  private isTouchScreen(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  private closeFooter(): void {
    if (this.cardFooter) {
      this.renderer.setStyle(this.cardFooter.nativeElement, 'height', '35px');
      this.renderer.setStyle(
        this.cardFooterContent.nativeElement,
        'display',
        'none'
      );
      this.isFooterOpened = false;
    }
  }

  private openFooter(): void {
    this.renderer.setStyle(this.cardFooter.nativeElement, 'height', '80px');
    this.renderer.setStyle(
      this.cardFooterContent.nativeElement,
      'display',
      'flex'
    );
    this.isFooterOpened = true;
  }
}
