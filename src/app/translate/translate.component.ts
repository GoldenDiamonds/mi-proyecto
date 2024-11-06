import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  textToTranslate: string = '';
  translatedText: string = '';
  sourceLanguage: string = 'es';
  targetLanguage: string = 'en'; // Idioma por defecto

  constructor(private translationService: TranslationService) {}

  translate() {
    this.translationService.translate(this.textToTranslate, this.sourceLanguage,this.targetLanguage).subscribe((response) => {
      this.translatedText = response[0]?.translations[0]?.text;
    }, error => {
      console.error('Error durante la traducción', error);
    });
  }
}
