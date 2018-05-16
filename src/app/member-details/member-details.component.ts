import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { ActivatedRoute } from '@angular/router';
import { FullCard } from '../models/fullCard';
import { DataService } from '../services/data.service';
import { ChestCycle } from '../models/chestCycle';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  public player: Player;
  public tabs: { name: string, active: boolean }[] = [
    { "name": "Home", "active": true},
    { "name": "Chests", "active": false},
    { "name": "Deck", "active": false }
  ]

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { player: Player }) => {
        this.player = data.player;

        this.dataService.getChestCycle(this.player.tag).subscribe(chestCycle => {
          this.player.chestCycle = chestCycle;
        })
        console.log(this.player);
      });
  }

  public CalculateCardPercentage(card: FullCard): number {
    var required = Number(card.requiredForUpgrade);
    if (isNaN(required)) {
      return 100;
    }
    var percentage = (card.count / required) * 100;

    return percentage;
  }

  selectNav(tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

}
