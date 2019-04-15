// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(d){function b(){this.versions=[{version:"2.1",upgrader:function(a){return a}},{version:"2.2",upgrader:function(a){a.webmapAppendMode=!1;a.slAppendChoice="OR";a.zoomMode=!0;for(var c=0;c<a.groups.length;c++){a.groups[c].appendSameLayer=!1;a.groups[c].appendSameLayerConjunc="OR";for(var b=0;b<a.groups[c].layers.length;b++)a.groups[c].layers[b].useZoom=!1}return a}},{version:"2.5",upgrader:function(a){a.persistOnClose=!0;return a}}]}b.prototype=new d;
return b.prototype.constructor=b});