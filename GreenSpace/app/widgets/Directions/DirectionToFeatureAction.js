// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","jimu/BaseFeatureAction","jimu/WidgetManager"],function(b,c,d){return b(c,{iconClass:"icon-direction-to",isFeatureSupported:function(a){return 1!==a.features.length||"point"!==a.geometryType?!1:!0},onExecute:function(a){d.getInstance().triggerWidgetOpen(this.widgetId).then(function(b){1===a.features.length&&"point"===a.geometryType&&a.features[0].geometry&&"point"===a.features[0].geometry.type&&b.actionTo(a.features[0].geometry)})}})});