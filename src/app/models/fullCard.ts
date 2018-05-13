export class FullCard {
    constructor(
        public name: string,
        public level: number,
        public maxLevel: number,
        public count: number,
        public rarity: string,
        public requiredForUpgrade: string,
        public leftToUpgrade: string,
        public icon: string,
        public key: string,
        public elixir: number,
        public type: string,
        public arena: number,
        public description: string,
        public id: number) { }
}
