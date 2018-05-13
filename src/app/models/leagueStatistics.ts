import { Season } from "./season";
import { BestSeason } from "./bestSeason";

export class LeagueStatistics {
    constructor(
        public currentSeason: Season,
        public previousSeason: Season,
        public bestSeason: BestSeason) { }
}
