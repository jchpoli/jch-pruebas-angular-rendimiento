import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PreloadService implements PreloadingStrategy {
  constructor() {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      return load();
    }
    return of(); // Un observable que no tiene nada
  }
}
