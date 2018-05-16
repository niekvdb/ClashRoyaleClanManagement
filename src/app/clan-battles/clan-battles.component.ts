import { Component, OnInit } from '@angular/core';
import { ClanBattle } from '../models/clanBattle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clan-battles',
  templateUrl: './clan-battles.component.html',
  styleUrls: ['./clan-battles.component.css']
})
export class ClanBattlesComponent implements OnInit {

  public tabs: { name: string, active: boolean }[] = [
    { "name": "Friendly", "active": true },
    { "name": "Collection Day", "active": false },
    { "name": "War Day", "active": false }
  ]

  public clanbattles: ClanBattle[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { clanBattles: ClanBattle[] }) => {
        console.log(data.clanBattles);
        this.clanbattles = data.clanBattles;
      });

  }

  public selectNav(tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
    return this.clanbattles.filter(
      clanbattle => clanbattle.mode.name === "test");

  }

}
