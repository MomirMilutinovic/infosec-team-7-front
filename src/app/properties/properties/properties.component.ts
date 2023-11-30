import {Component} from '@angular/core';
import {PropertyService} from "../property.service";
import Property from "../../shared/models/property.model";
import {environment} from "../../../env/environment";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  properties: Property[] = [];
  placeholderImage = environment.assetsDir + '/images/placeholder-image.webp';

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
