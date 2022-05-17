import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { WeatherCardService } from '../services/weather-card.service';

@Directive({
  selector: '[openInMobile]',
})
export class OpenInMobileDirective implements OnInit {
  @Input() cardFooter!: ElementRef<HTMLElement>;
  @Input() cardFooterContent!: ElementRef<HTMLElement>;

  private isFooterOpened = false;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private weatherCardService: WeatherCardService
  ) {}

  ngOnInit(): void {
    if (this.isTouchScreen()) {
      this.toggleOpenedCard();
    }
  }

  @HostListener('click') onClick(): void {
    this.weatherCardService.setActualCard(this.elementRef.nativeElement.id);

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

  private toggleOpenedCard(): void {
    this.weatherCardService.actualCard$.subscribe((actualCard) => {
      if (actualCard !== this.elementRef.nativeElement.id) {
        this.closeFooter();
      }
    });
  }
}
