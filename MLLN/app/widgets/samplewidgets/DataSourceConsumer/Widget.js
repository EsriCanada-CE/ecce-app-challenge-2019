// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","jimu/BaseWidget","jimu/DataSourceManager"],function(b,c,d){return b([c],{baseClass:"jimu-widget-dsc",startup:function(){var a=d.getInstance().getData(this.config.dataSourceId);a&&this._updateUI(a)},onDataSourceDataUpdate:function(a,e){a===this.config.dataSourceId&&this._updateUI(e)},_updateUI:function(a){this.countNode.innerText=a.features?a.features.length:0;this.sumNode.innerText=a.features?a.features.reduce(function(a,b){return a+b.attributes[this.config.summaryField]}.bind(this),
0):0}})});