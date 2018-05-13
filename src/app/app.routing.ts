import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClanComponent } from './clan/clan.component';
import { Clan } from './models/clan';
import { ClanResolver } from './services/clan-resolver.service';
import { PlayerResolver } from './services/player-resolver.service';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clan', component: ClanComponent, resolve: { clan: ClanResolver } },
    { path: 'members', component: MembersComponent, resolve: { clan: ClanResolver } },
    { path: 'members/:tag', component: MemberDetailsComponent, resolve: { player: PlayerResolver }},
    { path: 'contact', component: HomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);