import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SITE } from './data/site.data';
import { CATEGORIES } from './data/products.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <header class="nav" [class.scrolled]="scrolled()">
    <div class="container nav-in">
      <a routerLink="/" class="brand" (click)="open.set(false)">
        <img [src]="site.logo" alt="Vimek Restomart logo" width="46" height="46">
        <span><b>VIMEK</b> RESTOMART<small>{{ site.tagline }}</small></span>
      </a>
      <nav [class.open]="open()">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="open.set(false)">Home</a>
        <a routerLink="/products" routerLinkActive="active" (click)="open.set(false)">Products</a>
        <a routerLink="/" fragment="delivery" (click)="open.set(false)">Delivery</a>
        <a routerLink="/contact" routerLinkActive="active" (click)="open.set(false)">Contact</a>
        <a class="btn btn-sm nav-call" [href]="'tel:' + site.phone">📞 {{ site.phone }}</a>
      </nav>
      <button class="burger" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main><router-outlet /></main>

  <footer class="footer">
    <div class="container foot-grid">
      <div>
        <div class="brand light"><img [src]="site.logo" alt="" width="44" height="44"><span><b>VIMEK</b> RESTOMART</span></div>
        <p>Quality products, on-time delivery. Your food partner.</p>
      </div>
      <div>
        <h4>Products</h4>
        @for (c of cats.slice(0, 5); track c.slug) { <a [routerLink]="['/products']" [queryParams]="{category: c.slug}">{{ c.name }}</a> }
      </div>
      <div>
        <h4>Contact</h4>
        <a [href]="'tel:' + site.phone">📞 {{ site.phone }}</a>
        <a [href]="'https://wa.me/' + site.whatsapp" target="_blank" rel="noopener">💬 WhatsApp us</a>
        @if (site.email) { <a [href]="'mailto:' + site.email">✉️ {{ site.email }}</a> }
        @if (site.address) { <span>📍 {{ site.address }}</span> }
      </div>
    </div>
    <div class="copy">© {{ year }} Vimek Restomart. All rights reserved.</div>
  </footer>

  <a class="wa-fab" [href]="'https://wa.me/' + site.whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">💬</a>
  `
})
export class AppComponent {
  site = SITE; cats = CATEGORIES; year = new Date().getFullYear();
  open = signal(false); scrolled = signal(false);
  @HostListener('window:scroll') onScroll() { this.scrolled.set(window.scrollY > 10); }
}
