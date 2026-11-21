import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Vimek Restomart | Wholesale Food Supplier for Restaurants', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'products', title: 'Products | Vimek Restomart', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'contact', title: 'Contact | Vimek Restomart', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
