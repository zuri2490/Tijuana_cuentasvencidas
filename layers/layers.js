var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteMunicipalTijuana_1 = new ol.format.GeoJSON();
var features_LimiteMunicipalTijuana_1 = format_LimiteMunicipalTijuana_1.readFeatures(json_LimiteMunicipalTijuana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipalTijuana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipalTijuana_1.addFeatures(features_LimiteMunicipalTijuana_1);
var lyr_LimiteMunicipalTijuana_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteMunicipalTijuana_1, 
                style: style_LimiteMunicipalTijuana_1,
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipalTijuana_1.png" /> LimiteMunicipalTijuana'
            });
var format_Colonias_2 = new ol.format.GeoJSON();
var features_Colonias_2 = format_Colonias_2.readFeatures(json_Colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonias_2.addFeatures(features_Colonias_2);
var lyr_Colonias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonias_2, 
                style: style_Colonias_2,
                interactive: true,
                title: '<img src="styles/legend/Colonias_2.png" /> Colonias'
            });
var format_Manzanas_3 = new ol.format.GeoJSON();
var features_Manzanas_3 = format_Manzanas_3.readFeatures(json_Manzanas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_3.addFeatures(features_Manzanas_3);
var lyr_Manzanas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_3, 
                style: style_Manzanas_3,
                interactive: true,
                title: '<img src="styles/legend/Manzanas_3.png" /> Manzanas'
            });
var format_PosiblecambioentipodeservicioTijuana_4 = new ol.format.GeoJSON();
var features_PosiblecambioentipodeservicioTijuana_4 = format_PosiblecambioentipodeservicioTijuana_4.readFeatures(json_PosiblecambioentipodeservicioTijuana_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosiblecambioentipodeservicioTijuana_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosiblecambioentipodeservicioTijuana_4.addFeatures(features_PosiblecambioentipodeservicioTijuana_4);
var lyr_PosiblecambioentipodeservicioTijuana_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PosiblecambioentipodeservicioTijuana_4, 
                style: style_PosiblecambioentipodeservicioTijuana_4,
                interactive: true,
                title: '<img src="styles/legend/PosiblecambioentipodeservicioTijuana_4.png" /> Posible cambio en tipo de servicio Tijuana'
            });
var format_CuentasVencidas_5 = new ol.format.GeoJSON();
var features_CuentasVencidas_5 = format_CuentasVencidas_5.readFeatures(json_CuentasVencidas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuentasVencidas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuentasVencidas_5.addFeatures(features_CuentasVencidas_5);
var lyr_CuentasVencidas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CuentasVencidas_5, 
                style: style_CuentasVencidas_5,
                interactive: true,
    title: 'Cuentas Vencidas<br />\
    <img src="styles/legend/CuentasVencidas_5_0.png" /> Mayor a 10 millones<br />\
    <img src="styles/legend/CuentasVencidas_5_1.png" /> De 5 millones a 10 millones<br />\
    <img src="styles/legend/CuentasVencidas_5_2.png" /> De 1 millon a 5 millones<br />\
    <img src="styles/legend/CuentasVencidas_5_3.png" /> De 500 mil a 1 millon<br />\
    <img src="styles/legend/CuentasVencidas_5_4.png" /> De 100 mil a 500 mil<br />\
    <img src="styles/legend/CuentasVencidas_5_5.png" /> De 50 mil a 100 mil<br />\
    <img src="styles/legend/CuentasVencidas_5_6.png" /> Menor a 50 mil<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_LimiteMunicipalTijuana_1.setVisible(true);lyr_Colonias_2.setVisible(true);lyr_Manzanas_3.setVisible(true);lyr_PosiblecambioentipodeservicioTijuana_4.setVisible(true);lyr_CuentasVencidas_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LimiteMunicipalTijuana_1,lyr_Colonias_2,lyr_Manzanas_3,lyr_PosiblecambioentipodeservicioTijuana_4,lyr_CuentasVencidas_5];
lyr_LimiteMunicipalTijuana_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CVEGEO': 'CVEGEO', 'NOM_ENT': 'NOM_ENT', 'NOMBRE': 'NOMBRE', });
lyr_Colonias_2.set('fieldAliases', {'id': 'id', 'colonia': 'colonia', 'tipo': 'tipo', 'cp': 'cp', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Manzanas_3.set('fieldAliases', {'MANZANA': 'MANZANA', });
lyr_PosiblecambioentipodeservicioTijuana_4.set('fieldAliases', {'ELEVATION': 'ELEVATION', 'CUENTA_AGU': 'CUENTA_AGU', 'CLAVE_CATA': 'CLAVE_CATA', 'COMERCIO_1': 'COMERCIO_1', 'nombre_act': 'nombre_act', 'nom_estab': 'nom_estab', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'fecha_alta': 'fecha_alta', 'COMERCIO_2': 'COMERCIO_2', 'nombre_ac1': 'nombre_ac1', 'nom_estab1': 'nom_estab1', 'per_ocu1': 'per_ocu1', 'tipo_vial1': 'tipo_vial1', 'telefono1': 'telefono1', 'correoele1': 'correoele1', 'www1': 'www1', 'tipoUniEc1': 'tipoUniEc1', 'fecha_alt1': 'fecha_alt1', 'COMERCIO_3': 'COMERCIO_3', 'nombre_ac2': 'nombre_ac2', 'nom_estab2': 'nom_estab2', 'per_ocu2': 'per_ocu2', 'tipo_vial2': 'tipo_vial2', 'telefono2': 'telefono2', 'correoele2': 'correoele2', 'www2': 'www2', 'tipoUniEc2': 'tipoUniEc2', 'fecha_alt2': 'fecha_alt2', 'COMERCIO_4': 'COMERCIO_4', 'nombre_ac3': 'nombre_ac3', 'nom_estab3': 'nom_estab3', 'per_ocu3': 'per_ocu3', 'tipo_vial3': 'tipo_vial3', 'telefono3': 'telefono3', 'correoele3': 'correoele3', 'www3': 'www3', 'tipoUniEc3': 'tipoUniEc3', 'fecha_alt3': 'fecha_alt3', 'COMERCIO_5': 'COMERCIO_5', 'nombre_ac4': 'nombre_ac4', 'nom_estab4': 'nom_estab4', 'per_ocu4': 'per_ocu4', 'tipo_vial4': 'tipo_vial4', 'telefono4': 'telefono4', 'correoele4': 'correoele4', 'www4': 'www4', 'tipoUniEc4': 'tipoUniEc4', 'fecha_alt4': 'fecha_alt4', 'COMERCIO_6': 'COMERCIO_6', 'nombre_ac5': 'nombre_ac5', 'nom_estab5': 'nom_estab5', 'per_ocu5': 'per_ocu5', 'tipo_vial5': 'tipo_vial5', 'telefono5': 'telefono5', 'correoele5': 'correoele5', 'www5': 'www5', 'tipoUniEc5': 'tipoUniEc5', 'fecha_alt5': 'fecha_alt5', });
lyr_CuentasVencidas_5.set('fieldAliases', {'Cuenta': 'Cuenta', 'Propietari': 'Propietari', 'FechadeCap': 'FechadeCap', 'Tarea': 'Tarea', 'DeudaTotal': 'DeudaTotal', 'RangoenSis': 'RangoenSis', 'DiasVigent': 'DiasVigent', 'Color': 'Color', 'Significad': 'Significad', });
lyr_LimiteMunicipalTijuana_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Colonias_2.set('fieldImages', {'id': 'TextEdit', 'colonia': 'TextEdit', 'tipo': 'TextEdit', 'cp': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Manzanas_3.set('fieldImages', {'MANZANA': 'TextEdit', });
lyr_PosiblecambioentipodeservicioTijuana_4.set('fieldImages', {'ELEVATION': 'TextEdit', 'CUENTA_AGU': 'Range', 'CLAVE_CATA': 'TextEdit', 'COMERCIO_1': 'Range', 'nombre_act': 'TextEdit', 'nom_estab': 'TextEdit', 'per_ocu': 'TextEdit', 'tipo_vial': 'TextEdit', 'telefono': 'TextEdit', 'correoelec': 'TextEdit', 'www': 'TextEdit', 'tipoUniEco': 'TextEdit', 'fecha_alta': 'TextEdit', 'COMERCIO_2': 'Range', 'nombre_ac1': 'TextEdit', 'nom_estab1': 'TextEdit', 'per_ocu1': 'TextEdit', 'tipo_vial1': 'TextEdit', 'telefono1': 'TextEdit', 'correoele1': 'TextEdit', 'www1': 'TextEdit', 'tipoUniEc1': 'TextEdit', 'fecha_alt1': 'TextEdit', 'COMERCIO_3': 'Range', 'nombre_ac2': 'TextEdit', 'nom_estab2': 'TextEdit', 'per_ocu2': 'TextEdit', 'tipo_vial2': 'TextEdit', 'telefono2': 'TextEdit', 'correoele2': 'TextEdit', 'www2': 'TextEdit', 'tipoUniEc2': 'TextEdit', 'fecha_alt2': 'TextEdit', 'COMERCIO_4': 'Range', 'nombre_ac3': 'TextEdit', 'nom_estab3': 'TextEdit', 'per_ocu3': 'TextEdit', 'tipo_vial3': 'TextEdit', 'telefono3': 'TextEdit', 'correoele3': 'TextEdit', 'www3': 'TextEdit', 'tipoUniEc3': 'TextEdit', 'fecha_alt3': 'TextEdit', 'COMERCIO_5': 'Range', 'nombre_ac4': 'TextEdit', 'nom_estab4': 'TextEdit', 'per_ocu4': 'TextEdit', 'tipo_vial4': 'TextEdit', 'telefono4': 'TextEdit', 'correoele4': 'TextEdit', 'www4': 'TextEdit', 'tipoUniEc4': 'TextEdit', 'fecha_alt4': 'TextEdit', 'COMERCIO_6': 'Range', 'nombre_ac5': 'TextEdit', 'nom_estab5': 'TextEdit', 'per_ocu5': 'TextEdit', 'tipo_vial5': 'TextEdit', 'telefono5': 'TextEdit', 'correoele5': 'TextEdit', 'www5': 'TextEdit', 'tipoUniEc5': 'TextEdit', 'fecha_alt5': 'TextEdit', });
lyr_CuentasVencidas_5.set('fieldImages', {'Cuenta': 'TextEdit', 'Propietari': 'TextEdit', 'FechadeCap': 'DateTime', 'Tarea': 'TextEdit', 'DeudaTotal': 'TextEdit', 'RangoenSis': 'TextEdit', 'DiasVigent': 'TextEdit', 'Color': 'TextEdit', 'Significad': 'TextEdit', });
lyr_LimiteMunicipalTijuana_1.set('fieldLabels', {'OBJECTID': 'no label', 'CVEGEO': 'no label', 'NOM_ENT': 'no label', 'NOMBRE': 'no label', });
lyr_Colonias_2.set('fieldLabels', {'id': 'no label', 'colonia': 'inline label', 'tipo': 'inline label', 'cp': 'inline label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_Manzanas_3.set('fieldLabels', {'MANZANA': 'no label', });
lyr_PosiblecambioentipodeservicioTijuana_4.set('fieldLabels', {'ELEVATION': 'no label', 'CUENTA_AGU': 'inline label', 'CLAVE_CATA': 'inline label', 'COMERCIO_1': 'inline label', 'nombre_act': 'no label', 'nom_estab': 'no label', 'per_ocu': 'no label', 'tipo_vial': 'no label', 'telefono': 'no label', 'correoelec': 'no label', 'www': 'no label', 'tipoUniEco': 'no label', 'fecha_alta': 'no label', 'COMERCIO_2': 'no label', 'nombre_ac1': 'no label', 'nom_estab1': 'no label', 'per_ocu1': 'no label', 'tipo_vial1': 'no label', 'telefono1': 'no label', 'correoele1': 'no label', 'www1': 'no label', 'tipoUniEc1': 'no label', 'fecha_alt1': 'no label', 'COMERCIO_3': 'no label', 'nombre_ac2': 'no label', 'nom_estab2': 'no label', 'per_ocu2': 'no label', 'tipo_vial2': 'no label', 'telefono2': 'no label', 'correoele2': 'no label', 'www2': 'no label', 'tipoUniEc2': 'no label', 'fecha_alt2': 'no label', 'COMERCIO_4': 'no label', 'nombre_ac3': 'no label', 'nom_estab3': 'no label', 'per_ocu3': 'no label', 'tipo_vial3': 'no label', 'telefono3': 'no label', 'correoele3': 'no label', 'www3': 'no label', 'tipoUniEc3': 'no label', 'fecha_alt3': 'no label', 'COMERCIO_5': 'no label', 'nombre_ac4': 'no label', 'nom_estab4': 'no label', 'per_ocu4': 'no label', 'tipo_vial4': 'no label', 'telefono4': 'no label', 'correoele4': 'no label', 'www4': 'no label', 'tipoUniEc4': 'no label', 'fecha_alt4': 'no label', 'COMERCIO_6': 'no label', 'nombre_ac5': 'no label', 'nom_estab5': 'no label', 'per_ocu5': 'no label', 'tipo_vial5': 'no label', 'telefono5': 'no label', 'correoele5': 'no label', 'www5': 'no label', 'tipoUniEc5': 'no label', 'fecha_alt5': 'no label', });
lyr_CuentasVencidas_5.set('fieldLabels', {'Cuenta': 'inline label', 'Propietari': 'inline label', 'FechadeCap': 'inline label', 'Tarea': 'inline label', 'DeudaTotal': 'inline label', 'RangoenSis': 'inline label', 'DiasVigent': 'inline label', 'Color': 'inline label', 'Significad': 'inline label', });
lyr_CuentasVencidas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});