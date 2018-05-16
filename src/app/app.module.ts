import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClanComponent } from './clan/clan.component';

import { HammerConfig } from './services/hammer-config';

import { DataService } from './services/data.service';

import { ClanResolver } from './services/clan-resolver.service';
import { PlayerResolver } from './services/player-resolver.service';
import { ClanBattleResolver } from './services/clan-battle-resolver';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RemoveWhiteSpacePipe } from './pipes/removeWhiteSpace.pipe';
import { ContactComponent } from './contact/contact.component';
import { ClanBattlesComponent } from './clan-battles/clan-battles.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClanComponent,
    MembersComponent,
    MemberDetailsComponent,
    RemoveWhiteSpacePipe,
    ContactComponent,
    ClanBattlesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    NgxDatatableModule
  ],
  providers: [
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: HammerConfig
    },
    DataService,
    ClanResolver,
    PlayerResolver,
    ClanBattleResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
