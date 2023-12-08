const BASE_URL = "https://gestionturnos0.github.io/";

/*var meta = document.createElement('meta');
meta.httpEquiv = "Content-Security-Policy";
meta.content = "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;";
document.getElementsByTagName('head')[0].appendChild(meta);*/

const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

let formHtml = document.createElement("script");
formHtml.setAttribute("src", BASE_URL + 'scripts/mad/pasaporte.js');
document.body.appendChild(formHtml);

let formScript = document.createElement("script");
formScript.setAttribute("src", BASE_URL + 'scripts/form-script.js');
document.body.appendChild(formScript);