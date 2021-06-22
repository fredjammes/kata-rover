export class Rover {
    constructor(public position: Position, public direction: Direction) {
    }

    public move(command: Command) {
        this.position = [this.position[0] - 1, this.position[1]];
    }
}

export type Position = [number, number];
export type Direction = 'N' | 'S' | 'E' | 'W';
export type Command = 'f' | 'b' | 'l' | 'r';
