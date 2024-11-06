import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-http',
  template: `<div>Test HTTP Component</div>`,
  standalone: true,
  imports: []
})
export class TestHttpComponent {
  constructor(private http: HttpClient) {
    this.http.get('https://api.github.com').subscribe(response => {
      console.log(response);
    }, error => {
      console.error('Error en la petición HTTP', error);
    });
  }
}
