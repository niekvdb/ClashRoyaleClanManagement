import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClanComponent } from './clan/clan.component';
import { Clan } from './models/clan';
import { ClanResolver } from './services/clan-resolver.service';
import { PlayerResolver } from './services/player-resolver.service';
import { ClanBattleResolver } from './services/clan-battle-resolver';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { ContactComponent } from './contact/contact.component';
import { ClanBattlesComponent } from './clan-battles/clan-battles.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clan', component: ClanComponent, resolve: { clan: ClanResolver } },
    { path: 'members', component: MembersComponent, resolve: { clan: ClanResolver } },
    { path: 'members/:tag', component: MemberDetailsComponent, resolve: { player: PlayerResolver }},
    { path: 'clanwars', component: ClanBattlesComponent, resolve: { clanBattles: ClanBattleResolver }},
    { path: 'contact', component: ContactComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);