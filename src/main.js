import Backend from 'i18next-xhr-backend';
import environment from './environment';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.plugin('aurelia-i18n', instance => {
    instance.i18next.use(Backend);
    return instance.setup({
      ns: ['translation'],
      defaultNs: 'translation',
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json',
      },
      lng : 'en',
      attributes : ['t','i18n'],
      fallbackLng : 'en',
      debug : false
    });
  });    

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
