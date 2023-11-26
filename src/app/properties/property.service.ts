import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import Property from "./property.model";
import properties from "./properties/properties";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getProperties(): Observable<Property[]> {
    return of(properties);
  }

  getProperty(id: number): Observable<Property | undefined> {
    return of(properties.at(id))
  }
}
