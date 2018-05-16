export class Mode {
    constructor(
        public name: string,
        public deck: string,
        public cardLevels: string,
        public overtimeSeconds: number,
        public players: string,
        public sameDeck: boolean) { }
}
