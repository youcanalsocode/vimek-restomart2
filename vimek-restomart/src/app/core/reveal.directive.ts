import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

/** Fades/slides an element in when it scrolls into view. Usage: <div reveal [delay]="100"> */
@Directive({ selector: '[reveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private io?: IntersectionObserver;
  @Input() delay = 0;
  ngOnInit() {
    const node = this.el.nativeElement as HTMLElement;
    node.classList.add('reveal');
    node.style.transitionDelay = this.delay + 'ms';
    this.io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { node.classList.add('in'); this.io?.disconnect(); }
    }, { threshold: 0.12 });
    this.io.observe(node);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}
