import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
@Component({
	selector: 'cp-map',
	templateUrl: './map.component.html',
	styleUrl: './map.component.sass',
})
export class MapComponent implements OnInit {
	public map!: Map;
	ngOnInit(): void {
		this.map = new Map({
			layers: [
				new TileLayer({
					source: new OSM(),
				}),
			],
			target: 'map',
			view: new View({
				center: [0, 0],
				zoom: 2,
				maxZoom: 18,
			}),
		});
	}
}