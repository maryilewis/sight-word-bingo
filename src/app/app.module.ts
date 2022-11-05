import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingoCardComponent } from '../components/bingo-card/bingo-card.component';
import { PlayButtonComponent } from '../components/play-button/play-button.component';
import { BingoWordComponent } from '../components/bingo-word/bingo-word.component';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    BingoCardComponent,
	PlayButtonComponent,
	BingoWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
