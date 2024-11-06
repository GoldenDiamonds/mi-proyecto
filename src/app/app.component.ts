import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { TranslateComponent } from './translate/translate.component';
import { TestHttpComponent } from './test-http/test-http.component'; // Asegúrate de importar el componente
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, TranslateComponent, TestHttpComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
}
