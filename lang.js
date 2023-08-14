// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

const supportedLanguages = ['ca', 'en'];

function isLanding() {
  if (!document.referrer) return true;
  return !document.referrer.includes(window.location.hostname);
}

function getLanguage(supportedLanguages) {
  for (let i = 0; i < navigator.language.length; i++) {
    const navigatorLanguage = navigator.languages[i].split('-')[0];
    if (supportedLanguages.includes(navigatorLanguage)) {
      return navigatorLanguage;
    }
  }
  return supportedLanguages[0];
}

const language = getLanguage(supportedLanguages)
if (isLanding()) {
  if (language === supportedLanguages[0]) window.location = 'index.html';
  else window.location = language + '.html';
}

// @license-end
