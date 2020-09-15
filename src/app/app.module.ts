import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalPageComponent } from './Personal/personal-page/personal-page.component';
import { ProfessionalPageComponent } from './Professional/professional-page/professional-page.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './Professional/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalPageComponent,
    ProfessionalPageComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
