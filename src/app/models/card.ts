export class Card {
    constructor(
        public name: string,
        public id: number,
        public maxLevel: number,
        public icon: string,
        public key: string,
        public elixir: number,
        public type: string,
        public rarity: string,
        public arena: number,
        public description: string
    ) { }
}
