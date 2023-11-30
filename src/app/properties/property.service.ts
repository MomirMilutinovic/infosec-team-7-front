import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import Property from "../shared/models/property.model";
import properties from "./properties";
import Location from "../shared/models/location.model";
import locations from "./locations";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getProperties(): Observable<Property[]> {
    return of(properties);
  }

  getProperty(id: number): Observable<Property | undefined> {
    return of(properties.find(p => p.id === id));
  }

  getLocations(): Observable<Location[]> {
    return of(locations);
  }
}
