ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([148.493199, -26.697182, 149.469312, -26.219907]);
var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
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
var format_Pipelines_2 = new ol.format.GeoJSON();
var features_Pipelines_2 = format_Pipelines_2.readFeatures(json_Pipelines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pipelines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pipelines_2.addFeatures(features_Pipelines_2);
var lyr_Pipelines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pipelines_2, 
                style: style_Pipelines_2,
                popuplayertitle: "Pipelines",
                interactive: true,
                title: '<img src="styles/legend/Pipelines_2.png" /> Pipelines'
            });
var format_Possiblepipelines_3 = new ol.format.GeoJSON();
var features_Possiblepipelines_3 = format_Possiblepipelines_3.readFeatures(json_Possiblepipelines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Possiblepipelines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possiblepipelines_3.addFeatures(features_Possiblepipelines_3);
var lyr_Possiblepipelines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Possiblepipelines_3, 
                style: style_Possiblepipelines_3,
                popuplayertitle: "Possible pipelines",
                interactive: true,
                title: '<img src="styles/legend/Possiblepipelines_3.png" /> Possible pipelines'
            });
var format_GIS3DData_4 = new ol.format.GeoJSON();
var features_GIS3DData_4 = format_GIS3DData_4.readFeatures(json_GIS3DData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GIS3DData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GIS3DData_4.addFeatures(features_GIS3DData_4);
var lyr_GIS3DData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GIS3DData_4, 
                style: style_GIS3DData_4,
                popuplayertitle: "GIS3DData",
                interactive: true,
                title: '<img src="styles/legend/GIS3DData_4.png" /> GIS3DData'
            });
var format_Path_5 = new ol.format.GeoJSON();
var features_Path_5 = format_Path_5.readFeatures(json_Path_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Path_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Path_5.addFeatures(features_Path_5);
var lyr_Path_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Path_5, 
                style: style_Path_5,
                popuplayertitle: "Path",
                interactive: true,
                title: '<img src="styles/legend/Path_5.png" /> Path'
            });
var group_MTPAreas = new ol.layer.Group({
                                layers: [lyr_GIS3DData_4,],
                                fold: "open",
                                title: "MTP Areas"});
var group_Tenure = new ol.layer.Group({
                                layers: [lyr_Pipelines_2,lyr_Possiblepipelines_3,],
                                fold: "open",
                                title: "Tenure"});
var group_LandAccess = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Land Access"});
var group_Environment = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Environment"});

lyr_BaseMap_0.setVisible(true);lyr_BaseSatellite_1.setVisible(false);lyr_Pipelines_2.setVisible(true);lyr_Possiblepipelines_3.setVisible(true);lyr_GIS3DData_4.setVisible(true);lyr_Path_5.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_BaseSatellite_1,group_Tenure,group_MTPAreas,lyr_Path_5];
lyr_Pipelines_2.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'NAME_PIMS': 'NAME_PIMS', 'CLASSIFICATION': 'CLASSIFICATION', 'PIPELINE_ID': 'PIPELINE_ID', 'P_ID_NUMBER': 'P_ID_NUMBER', 'P_ID_LINE_NUMBER': 'P_ID_LINE_NUMBER', 'LICENSE_NO': 'LICENSE_NO', 'AREA_NUMBER': 'AREA_NUMBER', 'SEQUENCE_NUMBER': 'SEQUENCE_NUMBER', 'DIAMETER_NOMINAL': 'DIAMETER_NOMINAL', 'SERVICE': 'SERVICE', 'SPECIFICATION': 'SPECIFICATION', 'LINE_TYPE': 'LINE_TYPE', 'PIPELINE_LENGTH_M': 'PIPELINE_LENGTH_M', 'FLUID_TYPE': 'FLUID_TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'MAINTENANCE_RESPONSIBILITY': 'MAINTENANCE_RESPONSIBILITY', 'DESIGN_PRESSURE': 'DESIGN_PRESSURE', 'CONSTRUCTION_DATE': 'CONSTRUCTION_DATE', 'COMTRACK_LICENSE_NAME': 'COMTRACK_LICENSE_NAME', 'COMTRACK_FIELD': 'COMTRACK_FIELD', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', });
lyr_Possiblepipelines_3.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'NAME_PIMS': 'NAME_PIMS', 'CLASSIFICATION': 'CLASSIFICATION', 'PIPELINE_ID': 'PIPELINE_ID', 'P_ID_NUMBER': 'P_ID_NUMBER', 'P_ID_LINE_NUMBER': 'P_ID_LINE_NUMBER', 'LICENSE_NO': 'LICENSE_NO', 'AREA_NUMBER': 'AREA_NUMBER', 'SEQUENCE_NUMBER': 'SEQUENCE_NUMBER', 'DIAMETER_NOMINAL': 'DIAMETER_NOMINAL', 'SERVICE': 'SERVICE', 'SPECIFICATION': 'SPECIFICATION', 'LINE_TYPE': 'LINE_TYPE', 'PIPELINE_LENGTH_M': 'PIPELINE_LENGTH_M', 'FLUID_TYPE': 'FLUID_TYPE', 'OWNER': 'OWNER', 'OPERATOR': 'OPERATOR', 'MAINTENANCE_RESPONSIBILITY': 'MAINTENANCE_RESPONSIBILITY', 'DESIGN_PRESSURE': 'DESIGN_PRESSURE', 'COMMENTS': 'COMMENTS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'LAST_UPDATE': 'LAST_UPDATE', 'OBJECT_TYPE': 'OBJECT_TYPE', 'GUID': 'GUID', 'COUNTRY_CODE': 'COUNTRY_CODE', 'STATE_CODE': 'STATE_CODE', });
lyr_GIS3DData_4.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Service Type': 'Service Type', 'Feature': 'Feature', 'Corridor Name': 'Corridor Name', 'Area': 'Area', 'Branch': 'Branch', 'Length (m)': 'Length (m)', 'SDR': 'SDR', 'DN': 'DN', 'TIP-Type': 'TIP-Type', 'TIP': 'TIP', 'CWP': 'CWP', 'Well Pad Name': 'Well Pad Name', 'Feature Type': 'Feature Type', });
lyr_Path_5.set('fieldAliases', {'path_group_id': 'path_group_id', 'path_group_name': 'path_group_name', 'path_n_vertices': 'path_n_vertices', 'path_length': 'path_length', 'path_begin_fid': 'path_begin_fid', 'path_begin_cid': 'path_begin_cid', 'path_end_fid': 'path_end_fid', 'path_end_cid': 'path_end_cid', });
lyr_Pipelines_2.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'NAME_PIMS': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'PIPELINE_ID': 'TextEdit', 'P_ID_NUMBER': 'TextEdit', 'P_ID_LINE_NUMBER': 'TextEdit', 'LICENSE_NO': 'TextEdit', 'AREA_NUMBER': 'TextEdit', 'SEQUENCE_NUMBER': 'Range', 'DIAMETER_NOMINAL': 'TextEdit', 'SERVICE': 'TextEdit', 'SPECIFICATION': 'TextEdit', 'LINE_TYPE': 'TextEdit', 'PIPELINE_LENGTH_M': 'TextEdit', 'FLUID_TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'MAINTENANCE_RESPONSIBILITY': 'TextEdit', 'DESIGN_PRESSURE': 'TextEdit', 'CONSTRUCTION_DATE': 'DateTime', 'COMTRACK_LICENSE_NAME': 'TextEdit', 'COMTRACK_FIELD': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', });
lyr_Possiblepipelines_3.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'NAME_PIMS': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'PIPELINE_ID': 'Range', 'P_ID_NUMBER': 'TextEdit', 'P_ID_LINE_NUMBER': 'TextEdit', 'LICENSE_NO': 'TextEdit', 'AREA_NUMBER': 'TextEdit', 'SEQUENCE_NUMBER': 'Range', 'DIAMETER_NOMINAL': 'Range', 'SERVICE': 'TextEdit', 'SPECIFICATION': 'TextEdit', 'LINE_TYPE': 'TextEdit', 'PIPELINE_LENGTH_M': 'TextEdit', 'FLUID_TYPE': 'TextEdit', 'OWNER': 'TextEdit', 'OPERATOR': 'TextEdit', 'MAINTENANCE_RESPONSIBILITY': 'TextEdit', 'DESIGN_PRESSURE': 'TextEdit', 'COMMENTS': 'TextEdit', 'SOURCE': 'TextEdit', 'ACCURACY': 'TextEdit', 'LAST_UPDATE': 'DateTime', 'OBJECT_TYPE': 'TextEdit', 'GUID': 'TextEdit', 'COUNTRY_CODE': 'TextEdit', 'STATE_CODE': 'TextEdit', });
lyr_GIS3DData_4.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Service Type': 'TextEdit', 'Feature': 'TextEdit', 'Corridor Name': 'TextEdit', 'Area': 'TextEdit', 'Branch': 'TextEdit', 'Length (m)': 'TextEdit', 'SDR': 'TextEdit', 'DN': 'Range', 'TIP-Type': 'TextEdit', 'TIP': 'TextEdit', 'CWP': 'TextEdit', 'Well Pad Name': 'TextEdit', 'Feature Type': 'TextEdit', });
lyr_Path_5.set('fieldImages', {'path_group_id': 'Range', 'path_group_name': 'TextEdit', 'path_n_vertices': 'Range', 'path_length': 'TextEdit', 'path_begin_fid': 'Range', 'path_begin_cid': 'TextEdit', 'path_end_fid': 'Range', 'path_end_cid': 'TextEdit', });
lyr_Pipelines_2.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'NAME_PIMS': 'inline label - always visible', 'CLASSIFICATION': 'inline label - always visible', 'PIPELINE_ID': 'inline label - always visible', 'P_ID_NUMBER': 'inline label - always visible', 'P_ID_LINE_NUMBER': 'inline label - always visible', 'LICENSE_NO': 'inline label - always visible', 'AREA_NUMBER': 'inline label - always visible', 'SEQUENCE_NUMBER': 'inline label - always visible', 'DIAMETER_NOMINAL': 'no label', 'SERVICE': 'inline label - always visible', 'SPECIFICATION': 'no label', 'LINE_TYPE': 'inline label - always visible', 'PIPELINE_LENGTH_M': 'inline label - always visible', 'FLUID_TYPE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'OPERATOR': 'inline label - always visible', 'MAINTENANCE_RESPONSIBILITY': 'no label', 'DESIGN_PRESSURE': 'inline label - always visible', 'CONSTRUCTION_DATE': 'inline label - always visible', 'COMTRACK_LICENSE_NAME': 'no label', 'COMTRACK_FIELD': 'inline label - always visible', 'COMMENTS': 'inline label - always visible', 'SOURCE': 'inline label - always visible', 'ACCURACY': 'no label', 'LAST_UPDATE': 'inline label - always visible', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', 'COUNTRY_CODE': 'no label', 'STATE_CODE': 'inline label - always visible', });
lyr_Possiblepipelines_3.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'NAME_PIMS': 'no label', 'CLASSIFICATION': 'no label', 'PIPELINE_ID': 'no label', 'P_ID_NUMBER': 'no label', 'P_ID_LINE_NUMBER': 'no label', 'LICENSE_NO': 'no label', 'AREA_NUMBER': 'no label', 'SEQUENCE_NUMBER': 'no label', 'DIAMETER_NOMINAL': 'no label', 'SERVICE': 'no label', 'SPECIFICATION': 'no label', 'LINE_TYPE': 'no label', 'PIPELINE_LENGTH_M': 'no label', 'FLUID_TYPE': 'no label', 'OWNER': 'no label', 'OPERATOR': 'no label', 'MAINTENANCE_RESPONSIBILITY': 'no label', 'DESIGN_PRESSURE': 'no label', 'COMMENTS': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'LAST_UPDATE': 'no label', 'OBJECT_TYPE': 'no label', 'GUID': 'no label', 'COUNTRY_CODE': 'no label', 'STATE_CODE': 'no label', });
lyr_GIS3DData_4.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Service Type': 'no label', 'Feature': 'no label', 'Corridor Name': 'no label', 'Area': 'no label', 'Branch': 'no label', 'Length (m)': 'no label', 'SDR': 'no label', 'DN': 'no label', 'TIP-Type': 'no label', 'TIP': 'no label', 'CWP': 'no label', 'Well Pad Name': 'no label', 'Feature Type': 'no label', });
lyr_Path_5.set('fieldLabels', {'path_group_id': 'no label', 'path_group_name': 'no label', 'path_n_vertices': 'no label', 'path_length': 'no label', 'path_begin_fid': 'no label', 'path_begin_cid': 'no label', 'path_end_fid': 'no label', 'path_end_cid': 'no label', });
lyr_Path_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});