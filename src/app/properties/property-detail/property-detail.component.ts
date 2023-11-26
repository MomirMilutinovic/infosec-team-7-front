import {Component} from '@angular/core';
import Property from "../property.model";
import {PropertyService} from "../property.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {
  property?: Property;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.propertyService.getProperty(id)
      .subscribe(property => this.property = property);
  }
}
