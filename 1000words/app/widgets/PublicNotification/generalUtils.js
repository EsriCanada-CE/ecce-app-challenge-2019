// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/utils"],function(d){return{sanitizeNoTags:function(b){var a;a=d.sanitizeHTML(b);b=/<(?:!--(?:(?:-*[^->])*--+|-?)|script\b(?:[^"'>]|"[^"]*"|'[^']*')*>[\s\S]*?<\/script\s*|style\b(?:[^"'>]|"[^"]*"|'[^']*')*>[\s\S]*?<\/style\s*|\/?[a-z](?:[^"'>]|"[^"]*"|'[^']*')*)>/gi;var c;do c=a,a=a.replace(b,"");while(a!==c);return a=a.replace(/</g,"\x26lt;").trim()}}});