import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private apiKey = 'FMkZDYbg4tPjB66DuxrVVqwRQL9QmkFr3MXDWy4wJHuYlVrs2ftTJQQJ99AJACHYHv6XJ3w3AAAbACOGYf7L';
  private endpoint = "https://api.cognitive.microsofttranslator.com";
  private location = "eastus2";

  constructor(private http: HttpClient) {}

  translate(text: string, from: string, to: string): Observable<any> {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.apiKey,
      'Ocp-Apim-Subscription-Region': this.location,
      'Content-Type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    });

    const body = [{
      'text': text
    }];

    const params = {
      'api-version': '3.0',
      'from': from,
      'to': to
    };

    return this.http.post(`${this.endpoint}/translate`, body, { headers, params });
  }
}
