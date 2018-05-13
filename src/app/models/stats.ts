import { Card } from "./card";

export class Stats {
    constructor(
        public tournamentCardsWon: number,
        public maxTrophies: number,
        public threeCrownWins: number,
        public cardsFound: number,
        public favoriteCard: Card,
        public totalDonations: number,
        public challengeMaxWins: number,
        public challengeCardsWon: number,
        public level: number) { }
}
