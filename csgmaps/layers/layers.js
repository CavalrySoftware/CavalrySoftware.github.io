ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([140.740928, -28.198511, 142.916027, -27.028118]);
var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            permalink:"S",
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BaseSatellite_1 = new ol.layer.Tile({
            'title': 'Base Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Wells_2 = new ol.format.GeoJSON();
var features_Wells_2 = format_Wells_2.readFeatures(json_Wells_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wells_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wells_2.addFeatures(features_Wells_2);
var lyr_Wells_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wells_2, 
                style: style_Wells_2,
                popuplayertitle: "Wells",
                interactive: true,
                title: '<img src="styles/legend/Wells_2.png" /> Wells'
            });
var format_environments_3 = new ol.format.GeoJSON();
var features_environments_3 = format_environments_3.readFeatures(json_environments_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_environments_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_environments_3.addFeatures(features_environments_3);
var lyr_environments_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_environments_3, 
                style: style_environments_3,
                popuplayertitle: "environments",
                interactive: true,
                title: '<img src="styles/legend/environments_3.png" /> environments'
            });
var format_gates_4 = new ol.format.GeoJSON();
var features_gates_4 = format_gates_4.readFeatures(json_gates_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gates_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gates_4.addFeatures(features_gates_4);
var lyr_gates_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gates_4, 
                style: style_gates_4,
                popuplayertitle: "gates",
                interactive: true,
                title: '<img src="styles/legend/gates_4.png" /> gates'
            });
var format_buildings_5 = new ol.format.GeoJSON();
var features_buildings_5 = format_buildings_5.readFeatures(json_buildings_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_buildings_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_5.addFeatures(features_buildings_5);
var lyr_buildings_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_5, 
                style: style_buildings_5,
                popuplayertitle: "buildings",
                interactive: true,
                title: '<img src="styles/legend/buildings_5.png" /> buildings'
            });
var format_borrow_pits_proposed_6 = new ol.format.GeoJSON();
var features_borrow_pits_proposed_6 = format_borrow_pits_proposed_6.readFeatures(json_borrow_pits_proposed_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_borrow_pits_proposed_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_borrow_pits_proposed_6.addFeatures(features_borrow_pits_proposed_6);
var lyr_borrow_pits_proposed_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_borrow_pits_proposed_6, 
                style: style_borrow_pits_proposed_6,
                popuplayertitle: "borrow_pits_proposed",
                interactive: true,
                title: '<img src="styles/legend/borrow_pits_proposed_6.png" /> borrow_pits_proposed'
            });
var format_roads_proposed_7 = new ol.format.GeoJSON();
var features_roads_proposed_7 = format_roads_proposed_7.readFeatures(json_roads_proposed_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_roads_proposed_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_proposed_7.addFeatures(features_roads_proposed_7);
var lyr_roads_proposed_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_proposed_7, 
                style: style_roads_proposed_7,
                popuplayertitle: "roads_proposed",
                interactive: true,
                title: '<img src="styles/legend/roads_proposed_7.png" /> roads_proposed'
            });
var format_fences_8 = new ol.format.GeoJSON();
var features_fences_8 = format_fences_8.readFeatures(json_fences_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_fences_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fences_8.addFeatures(features_fences_8);
var lyr_fences_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fences_8, 
                style: style_fences_8,
                popuplayertitle: "fences",
                interactive: true,
                title: '<img src="styles/legend/fences_8.png" /> fences'
            });
var format_properties_qld_9 = new ol.format.GeoJSON();
var features_properties_qld_9 = format_properties_qld_9.readFeatures(json_properties_qld_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_properties_qld_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_properties_qld_9.addFeatures(features_properties_qld_9);
var lyr_properties_qld_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_properties_qld_9, 
                style: style_properties_qld_9,
                popuplayertitle: "properties_qld",
                interactive: true,
                title: '<img src="styles/legend/properties_qld_9.png" /> properties_qld'
            });
var format_properties_qld_amended_10 = new ol.format.GeoJSON();
var features_properties_qld_amended_10 = format_properties_qld_amended_10.readFeatures(json_properties_qld_amended_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_properties_qld_amended_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_properties_qld_amended_10.addFeatures(features_properties_qld_amended_10);
var lyr_properties_qld_amended_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_properties_qld_amended_10, 
                style: style_properties_qld_amended_10,
                popuplayertitle: "properties_qld_amended",
                interactive: true,
                title: '<img src="styles/legend/properties_qld_amended_10.png" /> properties_qld_amended'
            });
var format_properties_sa_11 = new ol.format.GeoJSON();
var features_properties_sa_11 = format_properties_sa_11.readFeatures(json_properties_sa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_properties_sa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_properties_sa_11.addFeatures(features_properties_sa_11);
var lyr_properties_sa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_properties_sa_11, 
                style: style_properties_sa_11,
                popuplayertitle: "properties_sa",
                interactive: true,
                title: '<img src="styles/legend/properties_sa_11.png" /> properties_sa'
            });
var format_Pipelines_12 = new ol.format.GeoJSON();
var features_Pipelines_12 = format_Pipelines_12.readFeatures(json_Pipelines_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pipelines_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pipelines_12.addFeatures(features_Pipelines_12);
var lyr_Pipelines_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pipelines_12, 
                style: style_Pipelines_12,
                popuplayertitle: "Pipelines",
                interactive: true,
                title: '<img src="styles/legend/Pipelines_12.png" /> Pipelines'
            });
var format_Possiblepipelines_13 = new ol.format.GeoJSON();
var features_Possiblepipelines_13 = format_Possiblepipelines_13.readFeatures(json_Possiblepipelines_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Possiblepipelines_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possiblepipelines_13.addFeatures(features_Possiblepipelines_13);
var lyr_Possiblepipelines_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Possiblepipelines_13, 
                style: style_Possiblepipelines_13,
                popuplayertitle: "Possible pipelines",
                interactive: true,
                title: '<img src="styles/legend/Possiblepipelines_13.png" /> Possible pipelines'
            });
var format_Tenements_14 = new ol.format.GeoJSON();
var features_Tenements_14 = format_Tenements_14.readFeatures(json_Tenements_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tenements_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tenements_14.addFeatures(features_Tenements_14);
var lyr_Tenements_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tenements_14, 
                style: style_Tenements_14,
                popuplayertitle: "Tenements",
                interactive: true,
                title: '<img src="styles/legend/Tenements_14.png" /> Tenements'
            });
var format_TenementsJV_15 = new ol.format.GeoJSON();
var features_TenementsJV_15 = format_TenementsJV_15.readFeatures(json_TenementsJV_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TenementsJV_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TenementsJV_15.addFeatures(features_TenementsJV_15);
var lyr_TenementsJV_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TenementsJV_15, 
                style: style_TenementsJV_15,
                popuplayertitle: "Tenements JV",
                interactive: true,
                title: '<img src="styles/legend/TenementsJV_15.png" /> Tenements JV'
            });
var format_MTPOil_16 = new ol.format.GeoJSON();
var features_MTPOil_16 = format_MTPOil_16.readFeatures(json_MTPOil_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MTPOil_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTPOil_16.addFeatures(features_MTPOil_16);
var lyr_MTPOil_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTPOil_16, 
                style: style_MTPOil_16,
                popuplayertitle: "MTP Oil",
                interactive: true,
                title: '<img src="styles/legend/MTPOil_16.png" /> MTP Oil'
            });
var format_MTPGas_17 = new ol.format.GeoJSON();
var features_MTPGas_17 = format_MTPGas_17.readFeatures(json_MTPGas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MTPGas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTPGas_17.addFeatures(features_MTPGas_17);
var lyr_MTPGas_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTPGas_17, 
                style: style_MTPGas_17,
                popuplayertitle: "MTP Gas",
                interactive: true,
                title: '<img src="styles/legend/MTPGas_17.png" /> MTP Gas'
            });
var group_MTPAreas = new ol.layer.Group({
                                layers: [lyr_MTPOil_16,lyr_MTPGas_17,],
                                fold: "open",
                                title: "MTP Areas"});
var group_Tenure = new ol.layer.Group({
                                layers: [lyr_Pipelines_12,lyr_Possiblepipelines_13,lyr_Tenements_14,lyr_TenementsJV_15,],
                                fold: "open",
                                title: "Tenure"});
var group_LandAccess = new ol.layer.Group({
                                layers: [lyr_gates_4,lyr_buildings_5,lyr_borrow_pits_proposed_6,lyr_roads_proposed_7,lyr_fences_8,lyr_properties_qld_9,lyr_properties_qld_amended_10,lyr_properties_sa_11,],
                                fold: "open",
                                title: "Land Access"});
var group_Environment = new ol.layer.Group({
                                layers: [lyr_environments_3,],
                                fold: "open",
                                title: "Environment"});

lyr_BaseMap_0.setVisible(true);lyr_BaseSatellite_1.setVisible(true);lyr_Wells_2.setVisible(true);lyr_environments_3.setVisible(false);lyr_gates_4.setVisible(false);lyr_buildings_5.setVisible(false);lyr_borrow_pits_proposed_6.setVisible(false);lyr_roads_proposed_7.setVisible(false);lyr_fences_8.setVisible(false);lyr_properties_qld_9.setVisible(false);lyr_properties_qld_amended_10.setVisible(false);lyr_properties_sa_11.setVisible(false);lyr_Pipelines_12.setVisible(false);lyr_Possiblepipelines_13.setVisible(false);lyr_Tenements_14.setVisible(false);lyr_TenementsJV_15.setVisible(false);lyr_MTPOil_16.setVisible(true);lyr_MTPGas_17.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_BaseSatellite_1,lyr_Wells_2,group_Environment,group_LandAccess,group_Tenure,group_MTPAreas];
lyr_Wells_2.set('fieldAliases', {'id': 'id', 'WELL_LABEL': 'WELL_LABEL', 'NAME': 'NAME', 'PAD_NAME': 'PAD_NAME', 'ALIAS': 'ALIAS', 'WELL_CODE': 'WELL_CODE', 'WELL_INTENT_CODE': 'WELL_INTENT_CODE', 'OPERATOR': 'OPERATOR', 'CURRENT_OPERATOR': 'CURRENT_OPERATOR', 'LINE_NAME': 'LINE_NAME', 'SHOTPOINT_NUMBER': 'SHOTPOINT_NUMBER', 'DIST_FROM_SHOTPOINT': 'DIST_FROM_SHOTPOINT', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'GL': 'GL', 'KB': 'KB', 'KB_RT_DATUM_ELEVATION': 'KB_RT_DATUM_ELEVATION', 'REFERENCE_DATUM': 'REFERENCE_DATUM', 'DATA_UNITS': 'DATA_UNITS', 'SPUD_DATE': 'SPUD_DATE', 'RIG_RELEASE_DATE': 'RIG_RELEASE_DATE', 'TOTAL_DEPTH_DRILLER': 'TOTAL_DEPTH_DRILLER', 'RIG_CONTRACTOR_CODE': 'RIG_CONTRACTOR_CODE', 'RIG_NUMBER': 'RIG_NUMBER', 'WELL_COST_ORIG': 'WELL_COST_ORIG', 'WELL_STATUS_CURRENT': 'WELL_STATUS_CURRENT', 'SOURCE': 'SOURCE', 'CREATED_BY': 'CREATED_BY', 'CREATED_DATE': 'CREATED_DATE', 'UPDATED_BY': 'UPDATED_BY', 'UPDATED_DATE': 'UPDATED_DATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_environments_3.set('fieldAliases', {'id': 'id', 'LAND_SYSTEM': 'LAND_SYSTEM', 'LAND_SYSTEM_TYPE': 'LAND_SYSTEM_TYPE', 'VEGETATION_ASSOCIATION': 'VEGETATION_ASSOCIATION', 'SOIL_TYPE': 'SOIL_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_gates_4.set('fieldAliases', {'id': 'id', 'CONSTRUCTION': 'CONSTRUCTION', 'TYPE': 'TYPE', 'WIDTH_METRES': 'WIDTH_METRES', 'ENCUMBRANCES': 'ENCUMBRANCES', 'LOCKED': 'LOCKED', 'COMMENTS': 'COMMENTS', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SYMBOL_ROTATION': 'SYMBOL_ROTATION', 'GUID': 'GUID', });
lyr_buildings_5.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'PROPERTY_NAME': 'PROPERTY_NAME', 'TYPE': 'TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'COMMENTS': 'COMMENTS', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'LAST_UPDATE': 'LAST_UPDATE', 'GUID': 'GUID', });
lyr_borrow_pits_proposed_6.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'OWNER': 'OWNER', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'TYPE': 'TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'EDIDB_INSPECTION_NUMBER': 'EDIDB_INSPECTION_NUMBER', 'EQUIPMENT_ID': 'EQUIPMENT_ID', 'OPERATOR': 'OPERATOR', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_roads_proposed_7.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'OWNER': 'OWNER', 'ROAD_TYPE': 'ROAD_TYPE', 'USAGE': 'USAGE', 'ROUTE_PRIORITY': 'ROUTE_PRIORITY', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMMENTS': 'COMMENTS', 'OPERATOR': 'OPERATOR', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_fences_8.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', 'CONDITION': 'CONDITION', 'COMMENTS': 'COMMENTS', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_properties_qld_9.set('fieldAliases', {'id': 'id', 'PROPERTY_NAME': 'PROPERTY_NAME', 'PROPERTY_NAME_QUALIFIED': 'PROPERTY_NAME_QUALIFIED', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_properties_qld_amended_10.set('fieldAliases', {'id': 'id', 'PROPERTY_NAME': 'PROPERTY_NAME', 'PROPERTY_NAME_QUALIFIED': 'PROPERTY_NAME_QUALIFIED', 'COMMENTS': 'COMMENTS', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'GUID': 'GUID', });
lyr_properties_sa_11.set('fieldAliases', {'id': 'id', 'PROPERTY_NAME': 'PROPERTY_NAME', 'PROPERTY_NAME_QUALIFIED': 'PROPERTY_NAME_QUALIFIED', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_Pipelines_12.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'NAME_PIMS': 'NAME_PIMS', 'CLASSIFICATION': 'CLASSIFICATION', 'PIPELINE_ID': 'PIPELINE_ID', 'P_ID_NUMBER': 'P_ID_NUMBER', 'P_ID_LINE_NUMBER': 'P_ID_LINE_NUMBER', 'LICENSE_NO': 'LICENSE_NO', 'AREA_NUMBER': 'AREA_NUMBER', 'SEQUENCE_NUMBER': 'SEQUENCE_NUMBER', 'DIAMETER_NOMINAL': 'DIAMETER_NOMINAL', 'SERVICE': 'SERVICE', 'SPECIFICATION': 'SPECIFICATION', 'LINE_TYPE': 'LINE_TYPE', 'PIPELINE_LENGTH_M': 'PIPELINE_LENGTH_M', 'FLUID_TYPE': 'FLUID_TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'MAINTENANCE_RESPONSIBILITY': 'MAINTENANCE_RESPONSIBILITY', 'DESIGN_PRESSURE': 'DESIGN_PRESSURE', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMTRACK_LICENSE_NAME': 'COMTRACK_LICENSE_NAME', 'COMTRACK_FIELD': 'COMTRACK_FIELD', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', });
lyr_Possiblepipelines_13.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'NAME_PIMS': 'NAME_PIMS', 'CLASSIFICATION': 'CLASSIFICATION', 'PIPELINE_ID': 'PIPELINE_ID', 'P_ID_NUMBER': 'P_ID_NUMBER', 'P_ID_LINE_NUMBER': 'P_ID_LINE_NUMBER', 'LICENSE_NO': 'LICENSE_NO', 'AREA_NUMBER': 'AREA_NUMBER', 'SEQUENCE_NUMBER': 'SEQUENCE_NUMBER', 'DIAMETER_NOMINAL': 'DIAMETER_NOMINAL', 'SERVICE': 'SERVICE', 'SPECIFICATION': 'SPECIFICATION', 'LINE_TYPE': 'LINE_TYPE', 'PIPELINE_LENGTH_M': 'PIPELINE_LENGTH_M', 'FLUID_TYPE': 'FLUID_TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'MAINTENANCE_RESPONSIBILITY': 'MAINTENANCE_RESPONSIBILITY', 'DESIGN_PRESSURE': 'DESIGN_PRESSURE', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', });
lyr_Tenements_14.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'TENEMENT_TYPE': 'TENEMENT_TYPE', 'TYPE': 'TYPE', 'OPERATOR': 'OPERATOR', 'GRANTED_DATE': 'GRANTED_DATE', 'EXPIRY_DATE': 'EXPIRY_DATE', 'AREA_SQ_KM': 'AREA_SQ_KM', 'RELEVANT_ACT': 'RELEVANT_ACT', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'GUID': 'GUID', 'EA_ID': 'EA_ID', });
lyr_TenementsJV_15.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', 'PERMIT': 'PERMIT', 'BLOCK': 'BLOCK', 'DATA_MATCH_NAME': 'DATA_MATCH_NAME', 'TYPE': 'TYPE', 'TENEMENT_TYPE': 'TENEMENT_TYPE', 'OPERATOR': 'OPERATOR', 'GRANTED_DATE': 'GRANTED_DATE', 'EXPIRY_DATE': 'EXPIRY_DATE', 'AREA_SQ_KM': 'AREA_SQ_KM', 'COMMENTS': 'COMMENTS', 'FMIS_JV_SEGMENT_CODE': 'FMIS_JV_SEGMENT_CODE', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_MTPOil_16.set('fieldAliases', {'id': 'id', 'MTP_NAME': 'MTP_NAME', 'MTP_PHASE': 'MTP_PHASE', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_MTPGas_17.set('fieldAliases', {'id': 'id', 'MTP_NAME': 'MTP_NAME', 'MTP_PHASE': 'MTP_PHASE', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', });
lyr_Wells_2.set('fieldImages', {'id': 'TextEdit', 'WELL_LABEL': 'TextEdit', 'NAME': 'TextEdit', 'PAD_NAME': 'TextEdit', 'ALIAS': 'TextEdit', 'WELL_CODE': 'TextEdit', 'WELL_INTENT_CODE': 'TextEdit', 'OPERATOR': 'TextEdit', 'CURRENT_OPERATOR': 'TextEdit', 'LINE_NAME': 'TextEdit', 'SHOTPOINT_NUMBER': 'Range', 'DIST_FROM_SHOTPOINT': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'GL': 'TextEdit', 'KB': 'TextEdit', 'KB_RT_DATUM_ELEVATION': 'TextEdit', 'REFERENCE_DATUM': 'TextEdit', 'DATA_UNITS': 'TextEdit', 'SPUD_DATE': 'DateTime', 'RIG_RELEASE_DATE': 'DateTime', 'TOTAL_DEPTH_DRILLER': 'Range', 'RIG_CONTRACTOR_CODE': 'TextEdit', 'RIG_NUMBER': 'TextEdit', 'WELL_COST_ORIG': 'Range', 'WELL_STATUS_CURRENT': 'TextEdit', 'SOURCE': 'TextEdit', 'CREATED_BY': 'TextEdit', 'CREATED_DATE': 'DateTime', 'UPDATED_BY': 'TextEdit', 'UPDATED_DATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_environments_3.set('fieldImages', {'id': 'TextEdit', 'LAND_SYSTEM': 'TextEdit', 'LAND_SYSTEM_TYPE': 'TextEdit', 'VEGETATION_ASSOCIATION': 'TextEdit', 'SOIL_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_gates_4.set('fieldImages', {'id': 'TextEdit', 'CONSTRUCTION': 'TextEdit', 'TYPE': 'TextEdit', 'WIDTH_METRES': 'TextEdit', 'ENCUMBRANCES': 'TextEdit', 'LOCKED': 'TextEdit', 'COMMENTS': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'SYMBOL_ROTATION': 'TextEdit', 'GUID': 'TextEdit', });
lyr_buildings_5.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'COMMENTS': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'LAST_UPDATE': 'DateTime', 'GUID': 'TextEdit', });
lyr_borrow_pits_proposed_6.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'OWNER': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'EDIDB_INSPECTION_NUMBER': 'TextEdit', 'EQUIPMENT_ID': 'TextEdit', 'OPERATOR': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_roads_proposed_7.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'OWNER': 'TextEdit', 'ROAD_TYPE': 'TextEdit', 'USAGE': 'TextEdit', 'ROUTE_PRIORITY': 'Range', 'CONSTRUCTION_DATE': 'DateTime', 'COMMENTS': 'TextEdit', 'OPERATOR': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_fences_8.set('fieldImages', {'id': 'TextEdit', 'TYPE': 'TextEdit', 'CONDITION': 'TextEdit', 'COMMENTS': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_properties_qld_9.set('fieldImages', {'id': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'PROPERTY_NAME_QUALIFIED': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_properties_qld_amended_10.set('fieldImages', {'id': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'PROPERTY_NAME_QUALIFIED': 'TextEdit', 'COMMENTS': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'GUID': 'TextEdit', });
lyr_properties_sa_11.set('fieldImages', {'id': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'PROPERTY_NAME_QUALIFIED': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_Pipelines_12.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'NAME_PIMS': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'PIPELINE_ID': 'TextEdit', 'P_ID_NUMBER': 'TextEdit', 'P_ID_LINE_NUMBER': 'TextEdit', 'LICENSE_NO': 'TextEdit', 'AREA_NUMBER': 'TextEdit', 'SEQUENCE_NUMBER': 'Range', 'DIAMETER_NOMINAL': 'TextEdit', 'SERVICE': 'TextEdit', 'SPECIFICATION': 'TextEdit', 'LINE_TYPE': 'TextEdit', 'PIPELINE_LENGTH_M': 'TextEdit', 'FLUID_TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'MAINTENANCE_RESPONSIBILITY': 'TextEdit', 'DESIGN_PRESSURE': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'COMTRACK_LICENSE_NAME': 'TextEdit', 'COMTRACK_FIELD': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', });
lyr_Possiblepipelines_13.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'NAME_PIMS': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'PIPELINE_ID': 'Range', 'P_ID_NUMBER': 'TextEdit', 'P_ID_LINE_NUMBER': 'TextEdit', 'LICENSE_NO': 'TextEdit', 'AREA_NUMBER': 'TextEdit', 'SEQUENCE_NUMBER': 'Range', 'DIAMETER_NOMINAL': 'Range', 'SERVICE': 'TextEdit', 'SPECIFICATION': 'TextEdit', 'LINE_TYPE': 'TextEdit', 'PIPELINE_LENGTH_M': 'TextEdit', 'FLUID_TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'MAINTENANCE_RESPONSIBILITY': 'TextEdit', 'DESIGN_PRESSURE': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', });
lyr_Tenements_14.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'TENEMENT_TYPE': 'TextEdit', 'TYPE': 'TextEdit', 'OPERATOR': 'TextEdit', 'GRANTED_DATE': 'DateTime', 'EXPIRY_DATE': 'DateTime', 'AREA_SQ_KM': 'TextEdit', 'RELEVANT_ACT': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', 'OBJECT_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'GUID': 'TextEdit', 'EA_ID': 'TextEdit', });
lyr_TenementsJV_15.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', 'PERMIT': 'TextEdit', 'BLOCK': 'TextEdit', 'DATA_MATCH_NAME': 'TextEdit', 'TYPE': 'TextEdit', 'TENEMENT_TYPE': 'TextEdit', 'OPERATOR': 'TextEdit', 'GRANTED_DATE': 'DateTime', 'EXPIRY_DATE': 'TextEdit', 'AREA_SQ_KM': 'TextEdit', 'COMMENTS': 'TextEdit', 'FMIS_JV_SEGMENT_CODE': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_MTPOil_16.set('fieldImages', {'id': 'TextEdit', 'MTP_NAME': 'TextEdit', 'MTP_PHASE': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_MTPGas_17.set('fieldImages', {'id': 'TextEdit', 'MTP_NAME': 'TextEdit', 'MTP_PHASE': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', });
lyr_Wells_2.set('fieldLabels', {'id': 'inline label - always visible', 'WELL_LABEL': 'inline label - always visible', 'NAME': 'inline label - always visible', 'PAD_NAME': 'inline label - always visible', 'ALIAS': 'inline label - always visible', 'WELL_CODE': 'inline label - always visible', 'WELL_INTENT_CODE': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'CURRENT_OPERATOR': 'inline label - always visible', 'LINE_NAME': 'inline label - always visible', 'SHOTPOINT_NUMBER': 'inline label - always visible', 'DIST_FROM_SHOTPOINT': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'GL': 'inline label - always visible', 'KB': 'inline label - always visible', 'KB_RT_DATUM_ELEVATION': 'inline label - always visible', 'REFERENCE_DATUM': 'inline label - always visible', 'DATA_UNITS': 'inline label - always visible', 'SPUD_DATE': 'inline label - always visible', 'RIG_RELEASE_DATE': 'inline label - always visible', 'TOTAL_DEPTH_DRILLER': 'inline label - always visible', 'RIG_CONTRACTOR_CODE': 'inline label - always visible', 'RIG_NUMBER': 'inline label - always visible', 'WELL_COST_ORIG': 'inline label - always visible', 'WELL_STATUS_CURRENT': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'CREATED_BY': 'inline label - always visible', 'CREATED_DATE': 'inline label - always visible', 'UPDATED_BY': 'inline label - always visible', 'UPDATED_DATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_environments_3.set('fieldLabels', {'id': 'inline label - always visible', 'LAND_SYSTEM': 'inline label - always visible', 'LAND_SYSTEM_TYPE': 'inline label - always visible', 'VEGETATION_ASSOCIATION': 'inline label - always visible', 'SOIL_TYPE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_gates_4.set('fieldLabels', {'id': 'inline label - always visible', 'CONSTRUCTION': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'WIDTH_METRES': 'inline label - always visible', 'ENCUMBRANCES': 'inline label - always visible', 'LOCKED': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'SYMBOL_ROTATION': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_buildings_5.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'PROPERTY_NAME': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_borrow_pits_proposed_6.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'EDIDB_INSPECTION_NUMBER': 'inline label - always visible', 'EQUIPMENT_ID': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_roads_proposed_7.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'ROAD_TYPE': 'inline label - always visible', 'USAGE': 'inline label - always visible', 'ROUTE_PRIORITY': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_fences_8.set('fieldLabels', {'id': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'CONDITION': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_properties_qld_9.set('fieldLabels', {'id': 'inline label - always visible', 'PROPERTY_NAME': 'inline label - always visible', 'PROPERTY_NAME_QUALIFIED': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_properties_qld_amended_10.set('fieldLabels', {'id': 'inline label - always visible', 'PROPERTY_NAME': 'inline label - always visible', 'PROPERTY_NAME_QUALIFIED': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_properties_sa_11.set('fieldLabels', {'id': 'inline label - always visible', 'PROPERTY_NAME': 'inline label - always visible', 'PROPERTY_NAME_QUALIFIED': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_Pipelines_12.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'NAME_PIMS': 'inline label - always visible', 'CLASSIFICATION': 'inline label - always visible', 'PIPELINE_ID': 'inline label - always visible', 'P_ID_NUMBER': 'inline label - always visible', 'P_ID_LINE_NUMBER': 'inline label - always visible', 'LICENSE_NO': 'inline label - always visible', 'AREA_NUMBER': 'inline label - always visible', 'SEQUENCE_NUMBER': 'inline label - always visible', 'DIAMETER_NOMINAL': 'inline label - always visible', 'SERVICE': 'inline label - always visible', 'SPECIFICATION': 'inline label - always visible', 'LINE_TYPE': 'inline label - always visible', 'PIPELINE_LENGTH_M': 'inline label - always visible', 'FLUID_TYPE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'MAINTENANCE_RESPONSIBILITY': 'inline label - always visible', 'DESIGN_PRESSURE': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'COMTRACK_LICENSE_NAME': 'inline label - always visible', 'COMTRACK_FIELD': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', 'COUNTRY_CODE': 'inline label - always visible', 'STATE_CODE': 'inline label - always visible', });
lyr_Possiblepipelines_13.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'NAME_PIMS': 'inline label - always visible', 'CLASSIFICATION': 'inline label - always visible', 'PIPELINE_ID': 'inline label - always visible', 'P_ID_NUMBER': 'inline label - always visible', 'P_ID_LINE_NUMBER': 'inline label - always visible', 'LICENSE_NO': 'inline label - always visible', 'AREA_NUMBER': 'inline label - always visible', 'SEQUENCE_NUMBER': 'inline label - always visible', 'DIAMETER_NOMINAL': 'inline label - always visible', 'SERVICE': 'inline label - always visible', 'SPECIFICATION': 'inline label - always visible', 'LINE_TYPE': 'inline label - always visible', 'PIPELINE_LENGTH_M': 'inline label - always visible', 'FLUID_TYPE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'MAINTENANCE_RESPONSIBILITY': 'inline label - always visible', 'DESIGN_PRESSURE': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', 'COUNTRY_CODE': 'inline label - always visible', 'STATE_CODE': 'inline label - always visible', });
lyr_Tenements_14.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'TENEMENT_TYPE': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'GRANTED_DATE': 'inline label - always visible', 'EXPIRY_DATE': 'inline label - always visible', 'AREA_SQ_KM': 'inline label - always visible', 'RELEVANT_ACT': 'inline label - always visible', 'COUNTRY_CODE': 'inline label - always visible', 'STATE_CODE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'GUID': 'inline label - always visible', 'EA_ID': 'inline label - always visible', });
lyr_TenementsJV_15.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'COUNTRY_CODE': 'inline label - always visible', 'STATE_CODE': 'inline label - always visible', 'PERMIT': 'inline label - always visible', 'BLOCK': 'inline label - always visible', 'DATA_MATCH_NAME': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'TENEMENT_TYPE': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'GRANTED_DATE': 'inline label - always visible', 'EXPIRY_DATE': 'inline label - always visible', 'AREA_SQ_KM': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'FMIS_JV_SEGMENT_CODE': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_MTPOil_16.set('fieldLabels', {'id': 'inline label - always visible', 'MTP_NAME': 'inline label - always visible', 'MTP_PHASE': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_MTPGas_17.set('fieldLabels', {'id': 'inline label - always visible', 'MTP_NAME': 'inline label - always visible', 'MTP_PHASE': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'inline label - always visible', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'inline label - always visible', 'GUID': 'inline label - always visible', });
lyr_MTPGas_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});