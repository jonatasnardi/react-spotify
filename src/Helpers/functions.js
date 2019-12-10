export function  normalizarString(a) {
  return a = a = a.replace(/[EÉÈÊË]/gi, "E"),
  a = a.replace(/[eéèêë]/gi, "e"),
  a = a.replace(/[AÀÁÂÃÄÅÆ]/gi, "A"),
  a = a.replace(/[aàáãâä]/gi, "a"),
  a = a.replace(/[cç]/gi, "c"),
  a = a.replace(/[IÌÍÎÏ]/gi, "I"),
  a = a.replace(/[iíìïî]/gi, "i"),
  a = a.replace(/[ÒÓÔÕÖ]/gi, "O"),
  a = a.replace(/[oóòôö]/gi, "o"),
  a = a.replace(/[UÜÛÙÚ]/gi, "U"),
  a = a.replace(/[uúùüû]/gi, "u")
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isDesktop() {
  this.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return this.windowWidth >= 768 ? true : false;
}

export function isMobile() {
  this.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return this.windowWidth < 768 ? true : false;
}

export function getUrlParameter(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}

export function createCookie(cookieName, cookieValue) {
  let now = new Date();
  let time = now.getTime();
  let expireTime = time + 10000 * 36000;
  now.setTime(expireTime);
  document.cookie = `${cookieName}=${cookieValue};expires=${now.toGMTString()};path=/`;
}

export function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export function millisToMinutesAndSeconds(millis) {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};