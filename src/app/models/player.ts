import { Arena } from "./arena";
import { Clan } from "./clan";
import { Games } from "./games";
import { LeagueStatistics } from "./leagueStatistics";
import { FullCard } from "./fullCard";
import { Stats } from "./stats";
import { ChestCycle } from "./chestCycle";

export class Player {
    constructor(
        public tag: string,
        public name: string,
        public trophies: number,
        public rank: number,
        public arena: Arena,
        public clan: Clan,
        public stats: Stats,
        public games: Games,
        public leagueStatistics: LeagueStatistics,
        public deckLink: string,
        public currentDeck: FullCard[],
        public cards: FullCard[],
        public chestCycle: ChestCycle) { }
}
