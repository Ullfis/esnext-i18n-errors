import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

@inject(I18N, Element)
export class App {

  reportText = '';
  
  constructor(i18n, element) {
    this.message = 'Hello World!';
    this.selectedLanguage = 'en';
    this.i18n = i18n;
    this.element = element;
  }

  toggleLanguage() {
    if (this.selectedLanguage === 'en') this.selectedLanguage = 'no'
    else this.selectedLanguage = 'en';

    this.i18n.setLocale(this.selectedLanguage).then(()=>{
      // this.i18n.updateTranslations(this.element);
      this.reportText = document.getElementById("reportThis").innerHTML;
    });
  }
}
