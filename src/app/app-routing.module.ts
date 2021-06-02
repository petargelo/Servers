import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";


const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, 
            children: [{path: ':id/:name', component: UserComponent}]},
    
/*  {path: 'servers', canActivate:[AuthGuard], component: ServersComponent,  */  /* ovdje se zabranjuje pristup servers komponenti i njezinim child elementima  ako se ne zadovoljava uvjet AUTHGUARD SERVISA (korisnik nije ulogiran fake login)*/

    {path: 'servers', canActivateChild:[AuthGuard], component: ServersComponent, /* u ovom slučaju dozvoljen je pristup servers, ali zabranjen dijelovima koji su hijerarhijski pod servers komponentom ... id i id/edit*/
            children: [{path: ':id', component: ServerComponent}, 
                       {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}]}               
    ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],

    exports:[RouterModule]  /* importa se u app-module */
})
export class AppRoutingModule {

     
}