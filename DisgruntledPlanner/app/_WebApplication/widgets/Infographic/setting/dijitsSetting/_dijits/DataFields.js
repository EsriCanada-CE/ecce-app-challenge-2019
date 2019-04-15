// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/query","jimu/dijit/_DataFields"],function(a,b,c){return a([c],{uncheckAllFields:function(){b(".field-item",this.fieldsContent).forEach(function(a){b("input",a)[0].checked=!1}.bind(this))}})});