export class Rover {
    constructor(public position: Position, public direction: Direction) {
    }

    public move(command: Command) {
        if (command === "f") {
            this.moveForward();
        }
        if (command === "b") {
            this.moveBackward();
        }
    }

    private moveBackward() {
        if (this.direction === 'W') {
            this.position.x++;
        } else if (this.direction === 'E') {
            this.position.x--;
        } else if (this.direction === 'S') {
            this.position.y++;
        } else if (this.direction === 'N') {
            this.position.y--;
        }
    }

    private moveForward() {
        if (this.direction === 'W') {
            this.position.x--;
        } else if (this.direction === 'E') {
            this.position.x++;
        } else if (this.direction === 'S') {
            this.position.y--;
        } else if (this.direction === 'N') {
            this.position.y++;
        }
    }

    turn(command: Command) {
        if (command === "l") {
            if (this.direction === "N") {
                this.direction = "W";
            } else if (this.direction === "W") {
                this.direction = "S";
            } else if (this.direction === "S") {
                this.direction = "E";
            } else if (this.direction === "E") {
                this.direction = "N";
            }
        }
        if (command === "r") {
            if (this.direction === "N") {
                this.direction = "E";
            } else if (this.direction === "W") {
                this.direction = "N";
            } else if (this.direction === "S") {
                this.direction = "W";
            } else if (this.direction === "E") {
                this.direction = "S";
            }
        }
    }
}

export interface Position {
    x: number,
    y: number
}

export type Direction = 'N' | 'S' | 'E' | 'W';
export type Command = 'f' | 'b' | 'l' | 'r';
