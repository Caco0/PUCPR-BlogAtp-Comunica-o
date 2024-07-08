import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InfograficoComponent } from './home/infografico/infografico.component';
import { ServicosComponent } from './home/servicos/servicos.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { NoticiasComponent } from './home/noticias/noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    InfograficoComponent,
    ServicosComponent,
    ProdutosComponent,
    NoticiasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogAtp';
}
