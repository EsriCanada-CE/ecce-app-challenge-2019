// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/EmergencyResponseGuide/nls/strings":{_widgetLabel:"Emergency Response Guide",ergMainPageTitle:"Basiert auf dem Emergency Response Guidebook 2016",coordInputLabelStart:"Kontaminationsgebiet",coordInputLabel:"Kontaminationsgebiet",addPointToolTip:"Kontaminationsgebiet hinzuf\u00fcgen",drawPointToolTip:"Klicken Sie hier, um ein Kontaminationsgebiet hinzuzuf\u00fcgen.",material:"Stoff",materialPlaceholder:"Beginnen Sie mit der Eingabe, um nach einem Stoff zu suchen.",table3Message:"F\u00fcr den ausgew\u00e4hlten Stoff sind zus\u00e4tzliche Informationen erforderlich, falls es um eine Kontamination von gro\u00dfem Umfang geht.\n\nStellen Sie sicher, dass Sie die richtigen Werte f\u00fcr Windgeschwindigkeit und Transportbeh\u00e4lter ausgew\u00e4hlt haben.",
table2Message:"Der ausgew\u00e4hlte Stoff kann bei der Vermischung mit Wasser eine gro\u00dfe Menge an Atemgift produzieren.\n\nSie k\u00f6nnen den/die folgenden Stoff(e) verwenden:\n\n",spillSize:"Umfang der Kontamination",small:"Klein",large:"Gro\u00df",fireLabel:"Brandschutzzone anzeigen",weatherLabel:"Aktuelle Wetterlage im Kontaminationsgebiet",weatherIntialText:"\x3cbr /\x3eWird aktualisiert, sobald ein Kontaminationsgebiet identifiziert wurde",temperature:"Temperatur",wind:"Wind",c:"C",f:"F",
weatherErrorMessage:"Keine Wetterinformationen abgerufen. Aktualisieren Sie die Werte f\u00fcr die Windgeschwindigkeit und die Uhrzeit der Kontamination manuell.",windDirection:"Windzugrichtung",timeOfSpill:"Zeit der Kontamination",day:"Tag",night:"Nacht",windSpeed:"Windgeschwindigkeit",low:"Niedrig",moderate:"Mittel",high:"Hoch",transportContainer:"Transportbeh\u00e4lter",rail:"Schienentankwagen",semi:"Tanklastzug oder -auflieger",mton:"Mehrtonnenzylinder",ston:"Mehrere kleine Zylinder oder Einzeltonnenzylinder",
ag:"Zubringertank",msm:"Mehrere kleine Zylinder",bleveLabel:"BLEVE-Gefahrenbereich anzeigen",capacity:"Containerkapazit\u00e4t (Liter)",bleveMessage:'F\u00fcr den ausgew\u00e4hlten Stoff kann f\u00fcr BLEVE ein zus\u00e4tzlicher Evakuierungsabstand angezeigt werden.\n\nAktivieren Sie hierzu die Umschaltfl\u00e4che "BLEVE-Gefahrenbereich anzeigen", und w\u00e4hlen Sie die entsprechende Containerkapazit\u00e4t aus.',noPAZoneMessage:"F\u00fcr diesen Stoff sind keine Abst\u00e4nde f\u00fcr Schutzma\u00dfnahmen verf\u00fcgbar. Es wurden lediglich initiale Schutz- und Evakuierungszonen berechnet.",
settingsTitle:"Einstellungen",spillLocationLabel:"Kontaminationsgebiet",spillLocationButtonLabel:"Einstellungen f\u00fcr Kontaminationsgebiete konfigurieren",IISettingsLabel:"Initiale Schutzzone",IIButtonLabel:"Einstellungen f\u00fcr initialen Schutz konfigurieren",PASettingsLabel:"Schutzma\u00dfnahmenzone",PAButtonLabel:"Einstellungen f\u00fcr Schutzma\u00dfnahmen konfigurieren",downwindSettingsLabel:"Windzugrichtungszone",downwindButtonLabel:"Einstellungen f\u00fcr Windzugrichtungen konfigurieren",
fireSettingsLabel:"Brandschutzzone",fireButtonLabel:"Einstellungen f\u00fcr Brandschutzzonen konfigurieren",bleveSettingsLabel:"BLEVE-Gefahrenbereich",bleveButtonLabel:"BLEVE-Einstellungen konfigurieren",style:"Style",lineStyles:{esriSLSDash:"Strich",esriSLSDashDot:"Strich-Punkt",esriSLSDashDotDot:"Strich-Punkt-Punkt",esriSLSDot:"Punkt",esriSLSLongDash:"Langer Strich",esriSLSLongDashDot:"Langer Strich-Punkt",esriSLSNull:"Null",esriSLSShortDash:"Kurzer Strich",esriSLSShortDashDot:"Kurzer Strich-Punkt",
esriSLSShortDashDotDot:"Kurzer Strich-Punkt-Punkt",esriSLSShortDot:"Kurzer Punkt",esriSLSSolid:"Durchgezogen"},fillStyles:{esriSFSBackwardDiagonal:"R\u00fcckw\u00e4rts",esriSFSCross:"Kreuzf\u00f6rmig",esriSFSDiagonalCross:"Diagonal",esriSFSForwardDiagonal:"Vorw\u00e4rts",esriSFSHorizontal:"Horizontal",esriSFSNull:"Null",esriSFSSolid:"Vollfarbe",esriSFSVertical:"Vertikal"},resultsTitle:"Ergebnisse",publishERGBtn:"Ver\u00f6ffentlichen",ERGLayerName:"Name des ver\u00f6ffentlichten ERG-Layers",invalidERGLayerName:"Der Layer-Name darf nur alphanumerische Zeichen und Unterstriche enthalten.",
missingERGLayerName:"Sie m\u00fcssen einen Namen f\u00fcr die ERG eingeben.",publishingFailedLayerExists:"Fehler beim Ver\u00f6ffentlichen: Sie verf\u00fcgen bereits \u00fcber einen Service mit dem Namen {0}. W\u00e4hlen Sie einen anderen Namen aus.",checkService:"Service {0} \u00fcberpr\u00fcfen",createService:"Service {0} erstellen",unableToCreate:"{0} kann nicht erstellt werden",addToDefinition:"Zur Definition {0} hinzuf\u00fcgen",successfullyPublished:"Web-Layer wurde erfolgreich ver\u00f6ffentlicht{0}Web-Layer verwalten",
userRole:"Der Service kann nicht erstellt werden, da dem Benutzer nicht die entsprechenden Berechtigungen zugewiesen sind.",transparency:"Transparenz",outline:"Umrisslinie",fill:"F\u00fcllung (Farbe wird nur angewendet, wenn der Style auf Vollfarbe festgelegt ist)",createERGBtn:"Zonen erstellen",clearERGBtn:"L\u00f6schen",labelFormat:"Beschriftungsformat",helpIconTooltip:"Die Schwellenwerte zwischen Kontaminationen von kleinem und gro\u00dfem Umfang lauten:\nFl\u00fcssigkeiten - 208\u00a0Liter\nFeststoffe - 300\u00a0Kilogramm",
cellWidth:"Zellenbreite (x)",cellHeight:"Zellenh\u00f6he (y)",invalidNumberMessage:"Der eingegebene Wert ist ung\u00fcltig",invalidRangeMessage:"Wert muss gr\u00f6\u00dfer als 0 sein",gridAngleInvalidRangeMessage:"Wert muss zwischen -89,9 und 89,9 liegen",formatIconTooltip:"Eingabe formatieren",setCoordFormat:"Zeichenfolge f\u00fcr Koordinatenformat festlegen",prefixNumbers:'Positiven und negativen Zahlen ein "+/-"-Pr\u00e4fix hinzuf\u00fcgen',cancelBtn:"Abbrechen",applyBtn:"Anwenden",comfirmInputNotation:"Eingegebene Schreibweise best\u00e4tigen",
notationsMatch:"Die Schreibweisen entsprechen Ihrer Eingabe. Geben Sie an, welche Sie verwenden m\u00f6chten:",missingLayerNameMessage:"Sie m\u00fcssen einen g\u00fcltigen Layer-Namen eingeben, bevor Sie ihn ver\u00f6ffentlichen k\u00f6nnen.",parseCoordinatesError:"Koordinaten k\u00f6nnen nicht geparst werden. \u00dcberpr\u00fcfen Sie Ihre Eingabe.",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",
DDLatLongNotation:"Dezimalgrad \u2013 Breitengrad/L\u00e4ngengrad",DDLongLatNotation:"Dezimalgrad \u2013 L\u00e4ngengrad/Breitengrad",DDMLatLongNotation:"Grad Dezimalminuten \u2013 Breitengrad/L\u00e4ngengrad",DDMLongLatNotation:"Grad Dezimalminuten \u2013 L\u00e4ngengrad/Breitengrad",DMSLatLongNotation:"Grad, Minuten, Sekunden \u2013 Breitengrad/L\u00e4ngengrad",DMSLongLatNotation:"Grad, Minuten, Sekunden \u2013 L\u00e4ngengrad/Breitengrad",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",
USNGNotation:"USNG",UTMBandNotation:"UTM \u2013 Bandbuchstabe",UTMHemNotation:"UTM \u2013 Hemisph\u00e4re (N/S)",_localized:{}}});