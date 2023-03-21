import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Categorias', url: '/categorias', icon: 'ellipse' },
    { title: 'Productos', url: '/productos', icon: 'ellipse' },
    { title: 'Items', url: '/items', icon: 'ellipse' },
    { title: 'Facturacion', url: '/facturacion', icon: 'ellipse' },
    { title: 'Login', url: '/login', icon: 'people' },
    { title: 'Logout', url: '/folder/Salir', icon: 'exit' },
    
  ];

  constructor() {}
}
