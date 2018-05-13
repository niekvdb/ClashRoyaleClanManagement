import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClanComponent } from './clan/clan.component';


import {RemoveWhiteSpacePipe} from './pipes/RemoveWhiteSpacePipe';
import { DataService } from './services/data.service';

import { ClanResolver } from './services/clan-resolver.service';
import { PlayerResolver } from './services/player-resolver.service';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClanComponent,
    MembersComponent,
    MemberDetailsComponent,
    RemoveWhiteSpacePipe
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
 
    NgxDatatableModule
   
  ],
  providers: [
    DataService,
    ClanResolver,
    PlayerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
