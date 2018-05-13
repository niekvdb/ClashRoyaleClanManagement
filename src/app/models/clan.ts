import { Member } from "./member";
import { ClanChest } from "./clanChest";
import { Badge } from "./badge";
import { Tracking } from "./tracking";
import { Location } from "./location";

export class Clan {
    constructor(
        public tag: string,
        public name: string,
        public description: string,
        public type: string,
        public score: number,
        public memberCount: number,
        public requiredScore: number,
        public donations: number,
        public clanChest: ClanChest,
        public badge: Badge,
        public location: Location,
        public members: Member[],
        public tracking: Tracking) { }
}
