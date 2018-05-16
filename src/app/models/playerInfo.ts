import { Clan } from "./clan";
import { FullCard } from "./fullCard";

export class PlayerInfo {
    constructor(
        public tag: string,
        public name: string,
        public crownsEarned: number,
        public startTrophies: number,
        public clan: Clan,
        public deckLink: string,
        public deck: FullCard[]) { }
}
