import {Component} from '@angular/core';
import {PropertyService} from "../property.service";
import Property from "../property.model";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }
}
