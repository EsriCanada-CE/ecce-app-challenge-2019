require([
    "scripts/dojoDefine.js",
    "dojo/query",
    "dojo/dom",
    "dojo/on",
    "dojo/parser",
    "calcite-maps/calcitemaps-v0.10",
    "bootstrap/Collapse",
    "bootstrap/Dropdown",
    "bootstrap/Tab",
    "dojo/domReady!"
], function (dojoDefine, query, dom, on, parser, CalciteMaps) {

    parser.parse();

    // App 
    var app = dojoDefine.initApp();

    // Home
    query(".calcite-navbar .navbar-brand").on("click", function (e) {
        app.map.setExtent(app.initialExtent);
    });
    
    // Set buttons events to change active map display
    on(dom.byId("envMapBtn"), 'click', dojoDefine.loadEnvMap);
    on(dom.byId("socMapBtn"), 'click', dojoDefine.loadSocMap);
    on(dom.byId("ecoMapBtn"), 'click', dojoDefine.loadEcoMap);
    on(dom.byId("sumMapBtn"), 'click', dojoDefine.loadSumMap);

    on(dom.byId("bldgType"), 'change', dojoDefine.updBuildings);
});