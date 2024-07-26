import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
  
    const locations = [
      { coords: [51.505, -0.09], popup: 'Location 1' },
      { coords: [51.51, -0.1], popup: 'Location 2' },
      { coords: [51.515, -0.12], popup: 'Location 3' }
    ];
  
    locations.forEach(location => {
      const marker = L.marker(location.coords as L.LatLngExpression).addTo(this.map);
      marker.bindPopup(location.popup).openPopup();
    });
  }
  
  
}
