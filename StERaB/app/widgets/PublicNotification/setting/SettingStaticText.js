// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","jimu/utils","./settingComponents","./SettingObject"],function(a,b,c,d){return a(d,{constructor:function(e,a,b){this._name="";this._mainDiv=c.text(a,b)},setValue:function(a){this._mainDiv.innerHTML=b.sanitizeHTML(a||"")},getValue:function(){return this._mainDiv.innerHTML}})});