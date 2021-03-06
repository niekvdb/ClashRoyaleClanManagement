import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Clan } from '../models/clan';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {
  public clan: Clan;
  @ViewChild('myTable') table: any;
  rows = [];
  timeout: any;
  expanded: any = {};
  selected = [];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { clan: Clan }) => {
        this.clan = data.clan;
        this.rows = this.clan.members;
      });
  }

  public NavigateToMemberDetails(tag: string) {
    this.router.navigate(['/members' , tag]);
  }
  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
  onSelect({ selected }) {
    this.NavigateToMemberDetails(selected[0].tag);
  }

}
