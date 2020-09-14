import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalPageComponent } from './Personal/personal-page/personal-page.component';
import { ProfessionalPageComponent } from './Professional/professional-page/professional-page.component';


const routes: Routes = [{
  path : 'personal', component : PersonalPageComponent
},
{
  path: 'professional', component : ProfessionalPageComponent
},
{
  path: '**', component : PersonalPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
