// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en'));
register('es', () => import('./es'));
// en, en-US and pt are not available yet

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
// starts loading 'en-US' and 'en'