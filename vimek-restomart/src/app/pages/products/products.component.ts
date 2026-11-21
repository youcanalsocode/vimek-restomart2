import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES } from '../../data/products.data';
import { SITE } from '../../data/site.data';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RevealDirective],
  template: `
  <section class="page-head"><div class="container">
    <h1>Our Products</h1><p>Browse the full range we supply to restaurants. Call us for availability and rates.</p>
    <input class="search" type="search" placeholder="Search products…" [value]="q()" (input)="q.set($any($event.target).value)" aria-label="Search products">
  </div></section>

  <div class="container">
    <div class="chips">
      <button [class.on]="sel() === 'all'" (click)="pick('all')">All</button>
      @for (c of cats; track c.slug) {
        <button [class.on]="sel() === c.slug" (click)="pick(c.slug)">{{ c.icon }} {{ c.name }}</button>
      }
    </div>

    @for (c of visible(); track c.slug) {
      <section class="pcat" [style.--c]="c.color">
        <h2 reveal><span>{{ c.icon }}</span> {{ c.name }}</h2>
        <div class="grid prods">
          @for (it of c.items; track it.name; let i = $index) {
            <article class="prod" reveal [delay]="(i % 4) * 60">
              <div class="prod-img">
                @if (it.image) { <img [src]="it.image" [alt]="it.name" loading="lazy"> } @else { <span>{{ c.icon }}</span> }
              </div>
              <h3>{{ it.name }}</h3>
              <small>Pack: {{ it.pack }}</small>
              <a class="btn btn-sm" [href]="enquire(it.name)" target="_blank" rel="noopener">Enquire</a>
            </article>
          }
        </div>
      </section>
    } @empty {
      <p class="empty">No products match “{{ q() }}”. Try another search.</p>
    }
  </div>
  `
})
export class ProductsComponent {
  cats = CATEGORIES;
  sel = signal('all'); q = signal('');
  private router = inject(Router);
  visible = computed(() => {
    const term = this.q().trim().toLowerCase();
    return CATEGORIES
      .filter(c => this.sel() === 'all' || c.slug === this.sel())
      .map(c => ({ ...c, items: c.items.filter(i => !term || i.name.toLowerCase().includes(term)) }))
      .filter(c => c.items.length);
  });
  constructor() {
    inject(SeoService).describe('Browse paneer, dairy, cheese, vegetables, sauces, spices, frozen food and momos supplied by Vimek Restomart.');
    inject(ActivatedRoute).queryParamMap.subscribe(p => this.sel.set(p.get('category') ?? 'all'));
  }
  pick(slug: string) { this.router.navigate([], { queryParams: { category: slug === 'all' ? null : slug } }); }
  enquire(name: string) { return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Vimek Restomart, I would like to enquire about: ' + name)}`; }
}
