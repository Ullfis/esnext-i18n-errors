import {bindable, inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(I18N, Element, EventAggregator)
export class FooElement3 {
  @bindable mdValue = 'foo-element3';

  constructor(i18n, element, ea) {
    this.element = element;
    this.ea = ea;
    this.i18n = i18n;

    ea.subscribe('i18n:locale:changed', payload => {
      this.i18n.updateTranslations(this.element);
    });    
  }
}
