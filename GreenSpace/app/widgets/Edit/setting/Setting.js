// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Edit/setting/EditFields":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/text!./EditFields.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup".split(" "),function(l,f,m,q,n,b,g,c){return l([b,n],{baseClass:"jimu-widget-edit-setting-fields",templateString:q,_layerInfo:null,postCreate:function(){this.inherited(arguments);this.nls=f.mixin(this.nls,window.jimuNls.common);this._initFieldsTable();this._setFiedsTabele(this._layerInfo.fieldInfos)},
popupEditPage:function(){var a=new c({titleLabel:this.nls.configureFields,width:700,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:f.hitch(this,function(){this._resetFieldInfos();a.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:f.hitch(this,function(){a.close()})}],onClose:f.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=new g({fields:[{name:"visible",title:this.nls.display,type:"checkbox","class":"display",width:"15%"},
{name:"isEditable",title:this.nls.edit,type:"checkbox","class":"editable",width:"12%"},{name:"fieldName",title:this.nls.editpageName,type:"text",width:"26%"},{name:"label",title:this.nls.editpageAlias,type:"text",editable:!0,width:"34%"},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"],"class":"actions",width:"13%"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup()},_setFiedsTabele:function(a){m.forEach(a,
function(a){this._fieldsTable.addRow({fieldName:a.fieldName,isEditable:a.isEditable,label:a.label,visible:a.visible})},this);setTimeout(f.hitch(this,function(){m.forEach(this._fieldsTable.fields,function(a){"visible"===a.name?a.onChange=f.hitch(this,this._onDisplayFieldChanged):"isEditable"===a.name&&(a.onChange=f.hitch(this,this._onIsEditableFieldChanged))},this)}),300)},_onDisplayFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);!b.visible&&b.isEditable&&(b.isEditable=!1,this._fieldsTable.editRow(a,
b))},_onIsEditableFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);b.isEditable&&!b.visible&&(b.visible=!0,this._fieldsTable.editRow(a,b))},_resetFieldInfos:function(){var a=[],b=this._fieldsTable.getData();m.forEach(b,function(b){a.push({fieldName:b.fieldName,label:b.label,isEditable:b.isEditable,visible:b.visible})});this._layerInfo.fieldInfos=a}})})},"widgets/Edit/utils":function(){define(["dojo/_base/lang","dojo/_base/array","jimu/utils"],function(l,f,m){function q(b,g){var c=null;
b&&b.fields&&f.some(b.fields,function(a){if(a.name.toLowerCase()===g.toLowerCase())return c=a,!0});return c}function n(b,g,c){var a=null;if(b&&b.attributes)for(var f in b.attributes)if(b.attributes.hasOwnProperty(f)&&"function"!==typeof b.attributes[f]&&f.toLowerCase()===g.toLowerCase()){a=c?b.attributes[f]=c:b.attributes[f];break}return a}return{getFieldInfosFromWebmap:function(b,g){var c=null;(b=g.getLayerInfoByTopLayerId(b))&&(b=b.getPopupInfo())&&b.fieldInfos&&(c=l.clone(b.fieldInfos));c&&f.forEach(c,
function(a){a.format&&a.format.dateFormat&&(a.format.dateFormat.toLowerCase&&0>a.format.dateFormat.toLowerCase().indexOf("time")?a.format.time=!1:a.format.time=!0)});return c},getEditCapabilities:function(b,g,c){var a={};c=b.getEditCapabilities(c);a.canCreate=c.canCreate;a.canDelete=c.canDelete;a.canUpdateGeometry=b.allowGeometryUpdates;g&&(a.canCreate=g.allowCreate&&a.canCreate,a.canDelete=g.allowDelete&&a.canDelete,a.canUpdateGeometry=!g.disableGeometryUpdate&&a.canUpdateGeometry);return a},getLocaleDateTime:function(b){return m.localizeDate(new Date(b),
{fullYear:!0,formatLength:"medium"})},getAttrByFieldKey:function(b,g){return n(b,g)},setAttrByFieldKey:function(b,g,c){return n(b,g,c)},ignoreCaseToGetFieldKey:function(b,g){var c=null;if(b=q(b,g))c=b.name;return c},ignoreCaseToGetFieldObject:function(b,g){return q(b,g)}}})},"widgets/Edit/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Edit/setting/EditFields.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Edit/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"firstPageDiv"\x3e\r\n    \x3cdiv class\x3d"general-settings-title"\x3e${nls.generalSettings}\x3c/div\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n            \x3ctd class\x3d"second"\x3e\r\n                \x3cdiv class\x3d"checkbox-wrap-div" style\x3d""\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"useFilterEdit"\r\n                           data-dojo-type\x3d"jimu/dijit/CheckBox" /\x3e\r\n                \x3c/div\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.useFilterEdit}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv class\x3d"checkbox-wrap-div" style\x3d""\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"toolbarVisible" \r\n              data-dojo-attach-event\x3d"change:_onToolbarSelected"\r\n              data-dojo-type\x3d"jimu/dijit/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.toolbarVisible}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"toolbar-options-tr" data-dojo-attach-point\x3d"toolbarOptionsTr"\x3e\r\n          \x3ctd class\x3d"second toolbar-options-td" data-dojo-attach-point\x3d"toolbarOptionsLabel"\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1  toolbar-options-td" data-dojo-attach-point\x3d"toolbarOptionsTd"\x3e\r\n            \x3cdiv class\x3d"check-box-div toolbar-option" style\x3d"position: relative"\x3e\r\n              \x3cdiv class\x3d"toolbar-options-coverage" data-dojo-attach-point\x3d"toolbarOptionsCoverage"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"mergeVisible" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cspan class\x3d"toolbar-option"\x3e${nls.mergeVisible}\x3c/span\x3e\r\n\r\n            \x3cdiv class\x3d"check-box-div toolbar-option"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"cutVisible" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cspan class\x3d"toolbar-option" \x3e${nls.cutVisible}\x3c/span\x3e\r\n\r\n            \x3cdiv class\x3d"check-box-div toolbar-option"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"reshapeVisible" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cspan class\x3d"toolbar-option" \x3e${nls.reshapeVisible}\x3c/span\x3e\r\n\r\n             \x3cdiv class\x3d"check-box-div toolbar-option"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"enableUndoRedo" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cspan class\x3d"toolbar-option" \x3e${nls.enableUndoRedo}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3cdiv style\x3d"height: 40px;"\x3e\x3c/div\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv class\x3d"checkbox-wrap-div" style\x3d""\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"usingSaveButton" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.usingSaveButton}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv class\x3d"" style\x3d"checkbox-wrap-div"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"autoApplyEditWhenGeometryIsMoved" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.autoApplyEditWhenGeometryIsMoved}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.snappingTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d"checkbox-wrap-div"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"snappingTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:1000,places:0}"\r\n              name\x3d"snappingTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.popupTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"checkbox-wrap-div" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"popupTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:1000,places:0}"\r\n              name\x3d"popupTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.stickyMoveTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"checkbox-wrap-div" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"stickyMoveTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:2000,places:0}"\r\n              name\x3d"stickyMoveTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n    \x3cdiv class\x3d"editalbe-layers-setting-title"\x3e${nls.editableLayersSetting}\x3c/div\x3e\r\n    \x3cdiv class\x3d"custom-setting-radio-part"\x3e\r\n      \x3cdiv class\x3d"custom-setting-radio"  data-dojo-attach-point\x3d"webmapRadioBoxDom"\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"webmapRadio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"layersSetting" id\x3d"webmap-radio" type\x3d"radio" class\x3d"jimu-radio-btn"/\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"webmapLabel" for\x3d"webmap-radio"\x3e${nls.honorTheWebMapSetting}\x3clabel\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"custom-setting-radio"\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"customRadio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"layersSetting" id\x3d"custom-radio" type\x3d"radio" class\x3d"jimu-radio-btn"/\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"customLabel" for\x3d"custom-radio"\x3e${nls.customSettings}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layers-settings-part" data-dojo-attach-point\x3d"layersSettingPart"\x3e\r\n      \x3cdiv class\x3d"layerInfos-table" data-dojo-attach-point\x3d"layerInfosTable"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"tableInfos-loading" data-dojo-attach-point\x3d"tableInfosLoading"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"tableInfos-table" data-dojo-attach-point\x3d"tableInfosTable"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Edit/setting/css/style.css":'.jimu-widget-edit-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-edit-setting .editable{width: 100px;}.jimu-widget-edit-setting .edit-fields{width: 100px;}.jimu-widget-edit-setting .update{width: 200px;}.jimu-widget-edit-setting .general-settings-title {font-size: 14px; font-family: "Avenir Heavy";}.jimu-widget-edit-setting .setting-table {margin-left: 20px;}.jimu-rtl .jimu-widget-edit-setting .setting-table {margin-right: 20px; margin-left: auto;}.jimu-widget-edit-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-edit-setting .setting-table \x3e tbody \x3e tr \x3e td{}.jimu-rtl .jimu-widget-edit-setting .setting-table input{text-align: left;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; min-width: 160px; text-align: left; line-height: 18px; padding: 10px 0 10px 0;}.jimu-rtl .jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{text-align: right; padding: 10px 0 10px 10px;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second{width: auto; padding-right: 10px;}.jimu-rtl .jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second{padding-left: 10px; padding-right: 0;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second \x3e span{padding-left: 2px; padding-right: 30px; vertical-align: 2px;}.jimu-trl .jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second \x3e span{padding-left: 20px; padding-right: 5px;}.jimu-widget-edit-setting .input-table .checkbox-wrap-div{}.jimu-widget-edit-setting .input-table .check-box-div {margin-top: 2px;}.jimu-widget-edit-setting .input-table .toolbar-option {display: inline-block;}.jimu-widget-edit-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-edit-setting .dijitSelect{height: 30px; width: 100%;}.jimu-widget-edit-setting .toolbar-options-tr {position: relative;}.jimu-widget-edit-setting .toolbar-options-tr.disable {opacity: 0.4;}.jimu-widget-edit-setting .toolbar-options-coverage{position: absolute; width: 600px; height: 40px; z-index: 1;}.jimu-widget-edit-setting .dijitTextBoxFocused{border-color: #406b9b !important; box-shadow: 0 0 0;}.jimu-widget-edit-setting .editalbe-layers-setting-title{font-size: 14px; font-family: "Avenir Heavy"; margin-top: 10px;}.jimu-widget-edit-setting .custom-setting-radio-part{margin-left: 20px;}.jimu-rtl .jimu-widget-edit-setting .custom-setting-radio-part{margin-right: 20px; margin-left: auto;}.jimu-widget-edit-setting .custom-setting-radio-part .custom-setting-radio{margin:10px 0 10px 0;}.jimu-widget-edit-setting .layers-settings-part{margin-left: 20px;}.jimu-widget-edit-setting .layers-settings-part.disable{display: none;}.jimu-widget-edit-setting .tableInfos-loading{top: 65px; position: relative;}.jimu-widget-edit-setting .tableInfos-table{display: none; margin-top: 30px; margin-bottom: 5px; position: relative;}',
"*now":function(l){l(['dojo/i18n!*preload*widgets/Edit/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/mouse dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/LayerInfos/LayerInfos jimu/dijit/LoadingIndicator dojo/_base/lang dojo/_base/html dojo/on dojo/_base/array dojo/promise/all dijit/popup dijit/TooltipDialog ./EditFields ../utils dijit/form/NumberSpinner dijit/form/RadioButton".split(" "),function(l,f,m,q,n,b,g,c,a,p,k,v,u,w,x,r){return l([q,m],{baseClass:"jimu-widget-edit-setting",_jimuLayerInfos:null,_layersTable:null,_tablesTable:null,
_editableLayerInfos:null,_editableTableInfos:null,_tooltipTimeout:1E3,startup:function(){this.inherited(arguments);b.getInstance(this.map,this.map.itemInfo).then(c.hitch(this,function(a){this._jimuLayerInfos=a;this._init();this.setConfig()}))},_init:function(){this._initToolbar();this._initCustomSettingRadio();this._initLayersTable();this._initTablesTable()},_initToolbar:function(){this.useFilterEdit.setValue(this.config.editor.useFilterEdit);this.toolbarVisible.setValue(this.config.editor.toolbarVisible);
this.enableUndoRedo.setValue(this.config.editor.enableUndoRedo);this.mergeVisible.setValue(this.config.editor.toolbarOptions.mergeVisible);this.cutVisible.setValue(this.config.editor.toolbarOptions.cutVisible);this.reshapeVisible.setValue(this.config.editor.toolbarOptions.reshapeVisible);this.usingSaveButton.setValue(this.config.editor.usingSaveButton);this.autoApplyEditWhenGeometryIsMoved.setValue(this.config.editor.autoApplyEditWhenGeometryIsMoved);this.snappingTolerance.set("value",void 0===this.config.editor.snappingTolerance?
15:this.config.editor.snappingTolerance);this.popupTolerance.set("value",void 0===this.config.editor.popupTolerance?5:this.config.editor.popupTolerance);this.stickyMoveTolerance.set("value",void 0===this.config.editor.stickyMoveTolerance?0:this.config.editor.stickyMoveTolerance)},_initCustomSettingRadio:function(){this.config.editor.honorSettingOfWebmap?this.webmapRadio.set("checked",!0):this.config.editor.layerInfos&&0===this.config.editor.layerInfos.length&&this.config.editor.tableInfos&&0===this.config.editor.tableInfos.length?
this.webmapRadio.set("checked",!0):this.customRadio.set("checked",!0);this._controlCustomSettingRadio();this.own(p(this.webmapRadio,"click",c.hitch(this,this._onRadioClicke)));this.own(p(this.customRadio,"click",c.hitch(this,this._onRadioClicke)));this._initTooltipDialog()},_initTooltipDialog:function(){var b=a.create("div",{innerHTML:'\x3cdiv class\x3d"title"\x3e'+this.nls.honorTheWebMapSettingTip1+'\x3c/div\x3e\x3cdiv class\x3d"item new-selection-item"\x3e'+("- "+this.nls.honorTheWebMapSettingTip2)+
'\x3c/div\x3e\x3cdiv class\x3d"item add-selection-item"\x3e'+("- "+this.nls.honorTheWebMapSettingTip3)+'\x3c/div\x3e\x3cdiv class\x3d"item remove-selection-item"\x3e'+("- "+this.nls.honorTheWebMapSettingTip4)+"\x3c/div\x3e","class":"dialog-content"});this.tooltipDialog1=new w({content:b});a.addClass(this.tooltipDialog1.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(p(this.webmapRadioBoxDom,"mousemove",c.hitch(this,function(a){this._tooltipDialogClientX1=a.clientX})));this.own(p(this.webmapRadioBoxDom,
f.enter,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._tooltipDialogTimeoutId1=setTimeout(c.hitch(this,function(){this.tooltipDialog1&&(u.open({parent:this.getParent(),popup:this.tooltipDialog1,around:this.webmapRadioBoxDom,position:["below"]}),0<=this._tooltipDialogClientX1&&(this.tooltipDialog1.domNode.parentNode.style.left=this._tooltipDialogClientX1+"px"))}),this._tooltipTimeout)})));this.own(p(this.webmapRadioBoxDom,f.leave,c.hitch(this,
function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._hideTooltipDialog(this.tooltipDialog1)})))},_hideTooltipDialog:function(a){a&&u.close(a)},_initLayersTable:function(){this._layersTable=new n({fields:[{name:"edit",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"label",title:this.nls.label,type:"text"},{name:"allowCreateCheckBox",title:window.jimuNls.common.add,type:"checkbox","class":"update",width:"100px"},{name:"allowDeleteCheckBox",title:window.jimuNls.common.deleteText,
type:"checkbox","class":"update",width:"100px"},{name:"allowGeometryUpdateCheckBox",title:window.jimuNls.common.updateGeometry,type:"checkbox","class":"update",width:"160px"},{name:"actions",title:this.nls.fields,type:"actions","class":"edit-fields",actions:["edit"]}],selectable:!1});this._layersTable.placeAt(this.layerInfosTable);this._layersTable.startup();this.own(p(this._layersTable,"actions-edit",c.hitch(this,this._onEditFieldInfoClick,this._layersTable)))},_initTablesTable:function(){this._tablesTable=
new n({fields:[{name:"edit",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"label",title:window.jimuNls.common.table,type:"text"},{name:"allowCreateCheckBox",title:window.jimuNls.common.add,type:"checkbox","class":"update",width:"100px"},{name:"allowDeleteCheckBox",title:window.jimuNls.common.deleteText,type:"checkbox","class":"update",width:"100px"},{name:"placeholder",title:"",type:"text","class":"update",width:"160px"},{name:"actions",title:this.nls.fields,type:"actions","class":"edit-fields",
actions:["edit"]}],selectable:!1});this._tablesTable.placeAt(this.tableInfosTable);this._tablesTable.startup();this.own(p(this._tablesTable,"actions-edit",c.hitch(this,this._onEditFieldInfoClick,this._tablesTable)))},setConfig:function(){this._editableLayerInfos=this._getEditableLayerInfos();this._setTable(this._editableLayerInfos,this._layersTable);var b=(new g({hidden:!1})).placeAt(this.tableInfosLoading);this._getEditableTableInfos().then(c.hitch(this,function(d){b.destroy();this._editableTableInfos=
d;0<this._editableTableInfos.length&&(this._setTable(d,this._tablesTable),a.setStyle(this.tableInfosTable,"display","block"))}))},_getEditableTableInfos:function(){var a=[],b=[],e=[],h=this._jimuLayerInfos.getTableInfoArray(),t=[];k.forEach(this._editableLayerInfos,function(a){(a=this._jimuLayerInfos._findTopLayerInfoById(a.featureLayer.id))&&e.push(a)},this);k.forEach(e.concat(h),function(b){a.push(b.getRelatedTableInfoArray())},this);return v(a).then(c.hitch(this,function(a){k.forEach(a,function(a){t=
t.concat(a)},this);k.forEach(h,function(a){var d=a.layerObject,e=a.getCapabilitiesOfWebMap(),h=k.some(t,function(b){return a.id===b.id},this),e=e&&-1===e.toLowerCase().indexOf("editing")?!1:!0;"Table"===d.type&&d.url&&d.isEditable&&d.isEditable()&&e&&h&&((h=this._getLayerInfoFromConfiguration(d))||(h=this._getDefaultLayerInfo(d)),b.push(h))},this);return b}))},_getEditableLayerInfos:function(){for(var a=[],b=this.map.graphicsLayerIds.length-1;0<=b;b--){var e=this.map.getLayer(this.map.graphicsLayerIds[b]);
if("Feature Layer"===e.type&&e.url&&e.isEditable&&e.isEditable()){var h=this._getLayerInfoFromConfiguration(e);h||(h=this._getDefaultLayerInfo(e));a.push(h)}}return a},_getLayerInfoFromConfiguration:function(a){var b=null,e=this.config.editor.layerInfos?this.config.editor.layerInfos:[];if((e=e.concat(this.config.editor.tableInfos?this.config.editor.tableInfos:[]))&&0<e.length){for(var d=0;d<e.length;d++)if(e[d].featureLayer&&e[d].featureLayer.id===a.id){b=e[d];break}b&&(b.fieldInfos=this._getSimpleFieldInfos(a,
b),b._editFlag=!0)}return b},_getDefaultLayerInfo:function(a){var b=this.config.editor.layerInfos&&this.config.editor.tableInfos?this.config.editor.layerInfos.concat(this.config.editor.tableInfos):null;return{featureLayer:{id:a.id},disableGeometryUpdate:!1,allowCreate:!0,allowDelete:!0,fieldInfos:this._getSimpleFieldInfos(a),_editFlag:b&&0===b.length?!0:!1}},_setTable:function(a,b){k.forEach(a,function(a){var d=this._jimuLayerInfos.getLayerOrTableInfoById(a.featureLayer.id),e=r.getEditCapabilities(d.layerObject);
b.addRow({label:d.title,edit:a._editFlag,allowCreateCheckBox:e.canCreate?a.allowCreate:null,allowDeleteCheckBox:e.canDelete?a.allowDelete:null,allowGeometryUpdateCheckBox:e.canUpdateGeometry?!a.disableGeometryUpdate:null}).tr._layerInfo=a},this)},_getDefaultSimpleFieldInfos:function(a){for(var b=[],e,d,c=0;c<a.fields.length;c++)e=a.fields[c].editable?!0:null,d="globalid"!==a.fields[c].name.toLowerCase()&&a.fields[c].name!==a.objectIdField||a.fields[c].editable?!0:!1,b.push({fieldName:a.fields[c].name,
label:a.fields[c].alias||a.fields[c].name,isEditable:e,visible:d||e?!0:!1});return b},_getWebmapSimpleFieldInfos:function(a){var b,c,d=[],g=r.getFieldInfosFromWebmap(a.id,this._jimuLayerInfos);g?(k.forEach(g,function(e){r.ignoreCaseToGetFieldKey(a,e.fieldName)&&(b=e.isEditable,c=e.visible,d.push({fieldName:e.fieldName,label:e.label,isEditable:b,visible:c||b?!0:!1}))}),0===d.length&&(d=null)):d=null;return d},_getSimpleFieldInfos:function(a,b){var c,d=[],g=this._getDefaultSimpleFieldInfos(a),f=this._getWebmapSimpleFieldInfos(a);
c=f?f:g;b&&b.fieldInfos?(k.forEach(b.fieldInfos,function(a){if(void 0===a.visible)if(f)for(var b=0;b<f.length;b++)a.fieldName===f[b].fieldName&&(a.visible=f[b].visible||f[b].isEditable);else a.visible=!0;for(b=0;b<c.length;b++)if(a.fieldName===c[b].fieldName){d.push(a);c[b]._exit=!0;break}}),k.forEach(c,function(a){a._exit||d.push(a)})):d=c;return d},_onEditFieldInfoClick:function(a,b){(a=a.getRowData(b))&&a.edit&&(new x({nls:this.nls,_layerInfo:b._layerInfo})).popupEditPage()},_onToolbarSelected:function(){this.toolbarVisible.checked?
(a.removeClass(this.toolbarOptionsTr,"disable"),a.setStyle(this.toolbarOptionsCoverage,"display","none")):(a.addClass(this.toolbarOptionsTr,"disable"),a.setStyle(this.toolbarOptionsCoverage,"display","block"))},_resetToolbarConfig:function(){this.config.editor.useFilterEdit=this.useFilterEdit.checked;this.config.editor.toolbarVisible=this.toolbarVisible.checked;this.config.editor.enableUndoRedo=this.enableUndoRedo.checked;this.config.editor.toolbarOptions.mergeVisible=this.mergeVisible.checked;this.config.editor.toolbarOptions.cutVisible=
this.cutVisible.checked;this.config.editor.toolbarOptions.reshapeVisible=this.reshapeVisible.checked;this.config.editor.usingSaveButton=this.usingSaveButton.checked;this.config.editor.autoApplyEditWhenGeometryIsMoved=this.autoApplyEditWhenGeometryIsMoved.checked;this.config.editor.snappingTolerance=this.snappingTolerance.value;this.config.editor.popupTolerance=this.popupTolerance.value;this.config.editor.stickyMoveTolerance=this.stickyMoveTolerance.value},_resetCustomSettingConfig:function(){this.config.editor.honorSettingOfWebmap=
this.webmapRadio.get("checked")?!0:!1},_getCheckedLayerOrTableInfos:function(a,b){var c=[],d=b.getData();k.forEach(a,function(a,b){a._editFlag=d[b].edit;null!==d[b].allowCreateCheckBox&&(a.allowCreate=d[b].allowCreateCheckBox);null!==d[b].allowDeleteCheckBox&&(a.allowDelete=d[b].allowDeleteCheckBox);null!==d[b].allowGeometryUpdateCheckBox&&(a.disableGeometryUpdate=!d[b].allowGeometryUpdateCheckBox);a._editFlag&&(delete a._editFlag,c.push(a))});return c},getConfig:function(){this._resetToolbarConfig();
this._resetCustomSettingConfig();var a=this._getCheckedLayerOrTableInfos(this._editableLayerInfos,this._layersTable);0===a.length?delete this.config.editor.layerInfos:this.config.editor.layerInfos=a;a=this._getCheckedLayerOrTableInfos(this._editableTableInfos,this._tablesTable);0===a.length?delete this.config.editor.tableInfos:this.config.editor.tableInfos=a;return this.config},_controlCustomSettingRadio:function(){this.webmapRadio.get("checked")?a.addClass(this.layersSettingPart,"disable"):this.customRadio.get("checked")&&
a.removeClass(this.layersSettingPart,"disable")},_onRadioClicke:function(){this._controlCustomSettingRadio()}})});