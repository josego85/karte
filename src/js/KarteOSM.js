// Variables y Objetos globales.
var v_karte = null;
var v_layer_mapquest = null;
var v_latitude = null;
var v_longitude = null;
var v_zoom = null;

function loadKarte(){
	v_longitude = 19.54158;
	v_latitude = 65.00146;	
	v_zoom = 3;
	
	var v_stadt = ol.proj.transform([v_longitude, v_latitude], 'EPSG:4326', 'EPSG:3857');
	
	v_layer_mapquest = new ol.layer.Tile({
	    style: 'Road',
	    source: new ol.source.MapQuest({
	    	layer: 'osm'
	    })
	});
	
	v_karte = new ol.Map({
		controls: ol.control.defaults().extend([
		    new ol.control.ScaleLine({
		    	units: 'degrees'
		    })
		]),
        target: 'karte',
        renderer: 'canvas',
        layers: [
            v_layer_mapquest
    	],
    	view: new ol.View({
    		center: v_stadt,
            zoom: v_zoom
    	})
 	});
}   