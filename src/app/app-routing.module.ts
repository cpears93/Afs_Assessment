import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '.home/home.component';
import { AuthComponent } from '.auth/auth.component';
import { ClientComponent } from '.home/client/client.component';
import { ContractorComponent } from '.home/contractor/contractor.component';

const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'auth', component: Auth},
  {path: 'home', component: HomeComponent},
  {children: [
      {path: 'client', component: ClientComponent},
      {path: 'contractor', component: ContractorComponent},
    ]
  },
  {path: 'contractor', component: ContractorComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, AuthComponent, ClientComponent, ContractorComponent]
