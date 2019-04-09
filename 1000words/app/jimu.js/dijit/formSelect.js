// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/html","dojo/dom-construct","dijit/form/Select"],function(b,c,d,e){return b([e],{postCreate:function(){this.inherited(arguments);var a=this["aria-labelledby"]||this["aria-label"];a&&(a=c.toDom('\x3ccaption class\x3d"screen-readers-only-no-position"\x3e'+a+"\x3c/caption\x3e"),d.place(a,this.domNode,"first"))}})});