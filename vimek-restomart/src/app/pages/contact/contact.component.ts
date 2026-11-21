import { Component, inject } from '@angular/core';
import { SITE } from '../../data/site.data';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  template: `
  <section class="page-head"><div class="container"><h1>Contact us</h1><p>Place an order or ask about availability. We are happy to help.</p></div></section>
  <section class="container section">
    <div class="grid contact">
      @for (c of cards; track c.title; let i = $index) {
        <a class="ccard" reveal [delay]="i * 90" [href]="c.href" [attr.target]="c.ext ? '_blank' : null" rel="noopener">
          <span>{{ c.icon }}</span><h3>{{ c.title }}</h3><p>{{ c.value }}</p>
        </a>
      }
    </div>
  </section>
  `
})
export class ContactComponent {
  private s = SITE;
  cards = [
    { icon: '📞', title: 'Call', value: this.s.phone, href: 'tel:' + this.s.phone, ext: false },
    { icon: '💬', title: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/' + this.s.whatsapp, ext: true },
    ...(this.s.email ? [{ icon: '✉️', title: 'Email', value: this.s.email, href: 'mailto:' + this.s.email, ext: false }] : []),
    ...(this.s.address ? [{ icon: '📍', title: 'Address', value: this.s.address, href: 'https://maps.google.com/?q=' + encodeURIComponent(this.s.address), ext: true }] : []),
    ...(this.s.hours ? [{ icon: '🕒', title: 'Hours', value: this.s.hours, href: '#', ext: false }] : [])
  ];
  constructor() { inject(SeoService).describe('Contact Vimek Restomart to order wholesale food products for your restaurant.'); }
}
