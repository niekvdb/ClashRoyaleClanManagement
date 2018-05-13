import { Arena } from "./arena";

export class Member {
    constructor(
        public name: string,
        public tag: string,
        public rank: number,
        public previousRank: number,
        public role: string,
        public expLevel: number,
        public trophies: number,
        public donations: number,
        public donationsReceived: number,
        public donationsDelta: number,
        public arena: Arena,
        public donationsPercent: number) { }
}
