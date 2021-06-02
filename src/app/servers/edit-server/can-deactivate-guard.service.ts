import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanDeactivateComponent{
    
    canDeactivate_: () => Observable<boolean> | Promise<boolean> | boolean /*defining type of canDeactivate method. Method without arguments that return Observable that resolves in boolean*/
    }

export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {  /* forces component or class to implement this guard. When this interface is used you are able to connect class to this guard */

    canDeactivate(component: CanDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean     /* component implements interface so it can use it's method canDeactivate   */
    {
        return component.canDeactivate_();
    }
    
    
        
}
