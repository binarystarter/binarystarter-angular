import { ErrorHandler } from '@angular/core';
import { createErrorHandler } from '@sentry/angular-ivy';

export const SentryProviderConfig = {
  provide: ErrorHandler,
  useValue: createErrorHandler({
    showDialog: true,
    logErrors: true,
    dialogOptions: {
      title: 'We are sorry, we have encountered a problem.',
      subtitle: 'If the problem persists, please contact us.',
      subtitle2: '',
      user: {
        email: 'Email',
        name: 'Your name or Anonymous',
      },
      labelName: 'Name',
      labelEmail: 'Email',
      labelComments: 'Please describe the problem',
      labelClose: 'Close',
      labelSubmit: 'Send Feedback',
      errorGeneric: 'We are very sorry, something went wrong...',
      errorFormEntry: 'Please check the forms validation.',
      successMessage: 'Thank you for your feedback!',
      lang: 'Thank you for your feedback!',
      comments: 'I am on page X and this happened...',
    },
  }),
};
