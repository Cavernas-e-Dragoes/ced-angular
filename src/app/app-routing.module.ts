import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DropMenuComponent } from './drop-menu/drop-menu.component';


const routes: Routes = [
{ path: 'header', component: HeaderComponent },
{ path: 'home', component: HomeComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'characters', component: CharactersComponent},
{ path: 'drop-menu', component: DropMenuComponent},

{ path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }