import { Arena } from "./arena";
import { Mode } from "./mode";
import { PlayerInfo } from "./playerInfo";

export class ClanBattle {
    constructor(
        public type: string,
        public challengeType: string,
        public mode: Mode,
        public winCountBefore: string,
        public utcTime: number,
        public deckType: string,
        public teamSize: number,
        public winner: number,
        public teamCrowns: number,
        public team: PlayerInfo,
        public opponent: PlayerInfo,
        public arena: Arena) { }
}
