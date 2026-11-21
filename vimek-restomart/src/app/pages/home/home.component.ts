import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../../data/products.data';
import { DELIVERY_STEPS, FEATURES, HERO_SLIDES, SERVED_SEGMENTS, SITE } from '../../data/site.data';
import { RevealDirective } from '../../core/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  template: `
  <!-- HERO CAROUSEL -->
  <section class="hero" aria-label="Highlights">
    @for (s of slides; track s.title; let i = $index) {
      <div class="slide" [class.active]="i === idx()" [style.background]="s.bg">
        <div class="container slide-in">
          <div class="slide-text">
            <span class="pill">{{ site.type }} · {{ site.tagline }}</span>
            @if (i === 0) { <h1>{{ s.title }}</h1> } @else { <h2 class="h1">{{ s.title }}</h2> }
            <p>{{ s.text }}</p>
            <div class="row">
              <a class="btn btn-light" [routerLink]="s.link.split('#')[0]">{{ s.cta }}</a>
              <a class="btn btn-ghost" [href]="'tel:' + site.phone">📞 {{ site.phone }}</a>
            </div>
          </div>
          <div class="slide-art" aria-hidden="true"><span>{{ s.emoji }}</span></div>
        </div>
      </div>
    }
    <div class="dots">
      @for (s of slides; track s.title; let i = $index) {
        <button [class.on]="i === idx()" (click)="go(i)" [attr.aria-label]="'Slide ' + (i + 1)"></button>
      }
    </div>
    <button class="arrow l" (click)="go(idx() - 1)" aria-label="Previous">‹</button>
    <button class="arrow r" (click)="go(idx() + 1)" aria-label="Next">›</button>
  </section>

  <!-- HIGHLIGHT STRIP: delivery / served / contact -->
  <section class="container strip" reveal>
    <div class="strip-card"><span>🚚</span><div><b>On-time delivery</b><small>Cold-chain handled</small></div></div>
    <div class="strip-card"><span>🍽️</span><div><b>Serving restaurants</b><small>{{ total().cats }} categories · {{ total().items }}+ products</small></div></div>
    <a class="strip-card link" [href]="'tel:' + site.phone"><span>📞</span><div><b>{{ site.phone }}</b><small>Call to place your order</small></div></a>
  </section>

  <!-- CATEGORIES -->
  <section class="section container">
    <div class="head" reveal><h2>Shop by category</h2><p>Everything a professional kitchen needs, in one place.</p></div>
    <div class="grid cats">
      @for (c of cats; track c.slug; let i = $index) {
        <a class="cat" reveal [delay]="(i % 4) * 80" [routerLink]="['/products']" [queryParams]="{category: c.slug}" [style.--c]="c.color">
          <span class="cat-icon">{{ c.icon }}</span>
          <h3>{{ c.name }}</h3>
          <p>{{ c.tagline }}</p>
          <em>{{ c.items.length }} items →</em>
        </a>
      }
    </div>
  </section>

  <!-- WHY US -->
  <section class="section tint">
    <div class="container">
      <div class="head" reveal><h2>Why restaurants choose us</h2></div>
      <div class="grid feats">
        @for (f of features; track f.title; let i = $index) {
          <div class="feat" reveal [delay]="i * 90"><span>{{ f.icon }}</span><h3>{{ f.title }}</h3><p>{{ f.text }}</p></div>
        }
      </div>
    </div>
  </section>

  <!-- DELIVERY -->
  <section id="delivery" class="section container">
    <div class="head" reveal><h2>Cold storage to your kitchen</h2>
      <p>From manufacturer to restaurant, we handle storage and delivery so you can focus on cooking.
        @if (site.serviceArea) { <br><b>Delivering in: {{ site.serviceArea }}</b> }</p></div>
    <div class="steps">
      @for (s of steps; track s.title; let i = $index) {
        <div class="step" reveal [delay]="i * 120"><div class="step-ic">{{ s.icon }}</div><h3>{{ s.title }}</h3><p>{{ s.text }}</p></div>
      }
    </div>
  </section>

  <!-- RESTAURANTS SERVED -->
  <section class="served">
    <div class="container head" reveal><h2>Restaurants we serve</h2><p>Trusted by food businesses of every kind.</p></div>
    <div class="marquee"><div class="track">
      @for (s of loop; track $index) { <span>{{ s }}</span> }
    </div></div>
  </section>

  <!-- CTA -->
  <section class="container section" reveal>
    <div class="cta">
      <div><h2>Ready to stock your kitchen?</h2><p>Call or WhatsApp us to get started.</p></div>
      <div class="row">
        <a class="btn btn-light" [href]="'tel:' + site.phone">📞 Call {{ site.phone }}</a>
        <a class="btn btn-ghost" [href]="'https://wa.me/' + site.whatsapp" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </div>
  </section>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  site = SITE; slides = HERO_SLIDES; cats = CATEGORIES; features = FEATURES; steps = DELIVERY_STEPS;
  loop = [...SERVED_SEGMENTS, ...SERVED_SEGMENTS];
  idx = signal(0);
  total = computed(() => ({ cats: CATEGORIES.length, items: CATEGORIES.reduce((n, c) => n + c.items.length, 0) }));
  private timer?: ReturnType<typeof setInterval>;
  constructor() {
    inject(SeoService).describe('Vimek Restomart supplies paneer, dairy, cheese, sauces, frozen foods and more to restaurants with cold storage and on-time delivery.');
  }
  ngOnInit() { this.timer = setInterval(() => this.go(this.idx() + 1), 5500); }
  ngOnDestroy() { clearInterval(this.timer); }
  go(i: number) { const n = this.slides.length; this.idx.set((i + n) % n); }
}
