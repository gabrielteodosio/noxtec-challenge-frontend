import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.type';
import { AppRoute } from '../app.routes';

@Pipe({
  name: 'filterRoutesByAuth'
})
export class FilterRoutesByAuthPipe implements PipeTransform {

  transform(routes: AppRoute[], user: User | null): AppRoute[] {
    const onlyLoggedInAllowedPaths = [
      "todos",
      "agenda",
    ]

    const notLoggedInOnlyPaths = [
      "login",
      "register",
    ]
    
    if (!user) {
      return routes.filter(route => !onlyLoggedInAllowedPaths.includes(route.path as string));
    }
    
    return routes.filter(route => !notLoggedInOnlyPaths.includes(route.path as string));
  }

}
