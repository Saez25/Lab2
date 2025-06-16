ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([658436.829247, 5916031.240390, 700949.604987, 5938765.986063]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Comunas_1 = new ol.format.GeoJSON();
var features_Comunas_1 = format_Comunas_1.readFeatures(json_Comunas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Comunas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunas_1.addFeatures(features_Comunas_1);
var lyr_Comunas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunas_1, 
                style: style_Comunas_1,
                popuplayertitle: 'Comunas',
                interactive: true,
                title: '<img src="styles/legend/Comunas_1.png" /> Comunas'
            });
var format_Barrios_2 = new ol.format.GeoJSON();
var features_Barrios_2 = format_Barrios_2.readFeatures(json_Barrios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Barrios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_2.addFeatures(features_Barrios_2);
var lyr_Barrios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_2, 
                style: style_Barrios_2,
                popuplayertitle: 'Barrios',
                interactive: true,
    title: 'Barrios<br />\
    <img src="styles/legend/Barrios_2_0.png" /> Aguita de la Perdiz<br />\
    <img src="styles/legend/Barrios_2_1.png" /> Barrio Estación<br />\
    <img src="styles/legend/Barrios_2_2.png" /> Barrio Universitario<br />\
    <img src="styles/legend/Barrios_2_3.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/Barrios_2_4.png" /> Cerro La Virgen<br />\
    <img src="styles/legend/Barrios_2_5.png" /> Collao<br />\
    <img src="styles/legend/Barrios_2_6.png" /> Concepción Centro<br />\
    <img src="styles/legend/Barrios_2_7.png" /> Coronel centro<br />\
    <img src="styles/legend/Barrios_2_8.png" /> El Morro<br />\
    <img src="styles/legend/Barrios_2_9.png" /> Laguna Redonda<br />\
    <img src="styles/legend/Barrios_2_10.png" /> Las Higueras<br />\
    <img src="styles/legend/Barrios_2_11.png" /> Las Tres Pascualas<br />\
    <img src="styles/legend/Barrios_2_12.png" /> Lirquén Centro<br />\
    <img src="styles/legend/Barrios_2_13.png" /> Lota Alto<br />\
    <img src="styles/legend/Barrios_2_14.png" /> Lota Bajo<br />\
    <img src="styles/legend/Barrios_2_15.png" /> Mirador del Pacífico<br />\
    <img src="styles/legend/Barrios_2_16.png" /> Parque Ecuador<br />\
    <img src="styles/legend/Barrios_2_17.png" /> Plaza Perú<br />\
    <img src="styles/legend/Barrios_2_18.png" /> Tomé Centro<br />\
    <img src="styles/legend/Barrios_2_19.png" /> Villa  Nonguén<br />' });
var format_Sitiostursticos_3 = new ol.format.GeoJSON();
var features_Sitiostursticos_3 = format_Sitiostursticos_3.readFeatures(json_Sitiostursticos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Sitiostursticos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiostursticos_3.addFeatures(features_Sitiostursticos_3);
cluster_Sitiostursticos_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Sitiostursticos_3
});
var lyr_Sitiostursticos_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Sitiostursticos_3, 
                style: style_Sitiostursticos_3,
                popuplayertitle: 'Sitios turísticos',
                interactive: true,
    title: 'Sitios turísticos<br />\
    <img src="styles/legend/Sitiostursticos_3_0.png" /> Barrio Estación<br />\
    <img src="styles/legend/Sitiostursticos_3_1.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/Sitiostursticos_3_2.png" /> Cerro la Virgen<br />\
    <img src="styles/legend/Sitiostursticos_3_3.png" /> El Morro<br />\
    <img src="styles/legend/Sitiostursticos_3_4.png" /> Estadio Collao<br />\
    <img src="styles/legend/Sitiostursticos_3_5.png" /> Hospital Higueras<br />\
    <img src="styles/legend/Sitiostursticos_3_6.png" /> Laguna las tres pascualas<br />\
    <img src="styles/legend/Sitiostursticos_3_7.png" /> Laguna redonda<br />\
    <img src="styles/legend/Sitiostursticos_3_8.png" /> Mercado de Lota<br />\
    <img src="styles/legend/Sitiostursticos_3_9.png" /> Mirador del Pacífico<br />\
    <img src="styles/legend/Sitiostursticos_3_10.png" /> Monumento a los mineros<br />\
    <img src="styles/legend/Sitiostursticos_3_11.png" /> Museo Chiflón del Diablo<br />\
    <img src="styles/legend/Sitiostursticos_3_12.png" /> Museo de Historia Natural<br />\
    <img src="styles/legend/Sitiostursticos_3_13.png" /> Parque Ecuador<br />\
    <img src="styles/legend/Sitiostursticos_3_14.png" /> Pinacoteca<br />\
    <img src="styles/legend/Sitiostursticos_3_15.png" /> Plaza Acevedo<br />\
    <img src="styles/legend/Sitiostursticos_3_16.png" /> Plaza Arturo Prat<br />\
    <img src="styles/legend/Sitiostursticos_3_17.png" /> Plaza de Lirquén<br />\
    <img src="styles/legend/Sitiostursticos_3_18.png" /> Plaza Independencia<br />\
    <img src="styles/legend/Sitiostursticos_3_19.png" /> Plaza Perú<br />\
    <img src="styles/legend/Sitiostursticos_3_20.png" /> Teatro Universidad de Concepción<br />\
    <img src="styles/legend/Sitiostursticos_3_21.png" /> Tribunales de Justicia<br />\
    <img src="styles/legend/Sitiostursticos_3_22.png" /> Zoológico<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Comunas_1.setVisible(true);lyr_Barrios_2.setVisible(true);lyr_Sitiostursticos_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Comunas_1,lyr_Barrios_2,lyr_Sitiostursticos_3];
lyr_Comunas_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Barrios_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_Sitiostursticos_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Comuna': 'Comuna', 'Total_pobl': 'Total_pobl', 'Video': 'Video', 'Barrios': 'Barrios', });
lyr_Comunas_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Barrios_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_Sitiostursticos_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Comuna': 'TextEdit', 'Total_pobl': 'TextEdit', 'Video': 'TextEdit', 'Barrios': 'TextEdit', });
lyr_Comunas_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Barrios_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_Sitiostursticos_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Total_pobl': 'inline label - always visible', 'Video': 'inline label - always visible', 'Barrios': 'inline label - always visible', });
lyr_Sitiostursticos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});