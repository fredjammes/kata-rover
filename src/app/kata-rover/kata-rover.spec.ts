import {Direction, Position, Rover} from './kata-rover';

describe('Rover', () => {
    const expectRoverToBeAtPosition = (rover: Rover | undefined, expectedPosition: Position): void => {
        expect(rover?.position).toStrictEqual(expectedPosition);
    };

    const expectInitialPositionToBeTheOneOfTheRover = (initialPosition: Position) => (expectedPosition: Position) => {
        const rover: Rover = new Rover(initialPosition, 'W');
        expectRoverToBeAtPosition(rover, expectedPosition)
    }

    it('should initially be at its starting point', () => {
        expectInitialPositionToBeTheOneOfTheRover({x: 0, y: 0})({x: 0, y: 0});
        expectInitialPositionToBeTheOneOfTheRover({x: 1, y: 1})({x: 1, y: 1});
        expectInitialPositionToBeTheOneOfTheRover({x: 1, y: 2})({x: 1, y: 2});
    });

    it('should initially face West', () => {
        let rover = new Rover({x: 0, y: 0}, 'W');
        expect(rover.direction).toStrictEqual('W');
    });

    const expectPositionAfterMoving = (rover: Rover, expectedPosition: Position): void => {
        expect(rover.position).toStrictEqual(expectedPosition);
    };

    const moveForward = (rover: Rover): void => {
        rover.move('f');
    };

    const initRoverPositionAndDirection = (initialPosition: Position, direction: Direction): Rover => {
        let rover = new Rover(initialPosition, direction);
        return rover;
    };

    const expectRoverToMoveForward = (initialPosition: Position, direction: Direction) => (expectedPosition: Position) => {
        let rover = initRoverPositionAndDirection(initialPosition, direction);
        moveForward(rover);
        expectPositionAfterMoving(rover, expectedPosition);
    };


    it('should move the rover forward ', () => {
        expectRoverToMoveForward({x: 0, y: 0}, 'W')({x: -1, y: 0});
        expectRoverToMoveForward({x: 2, y: 0}, 'W')({x: 1, y: 0});
        expectRoverToMoveForward({x: 0, y: 3}, 'W')({x: -1, y: 3});
        expectRoverToMoveForward({x: 0, y: 0}, 'E')({x: 1, y: 0});
        expectRoverToMoveForward({x: 2, y: 0}, 'E')({x: 3, y: 0});
        expectRoverToMoveForward({x: 0, y: 3}, 'E')({x: 1, y: 3});
        expectRoverToMoveForward({x: 0, y: 0}, 'S')({x: 0, y: -1});
        expectRoverToMoveForward({x: 2, y: 0}, 'S')({x: 2, y: -1});
        expectRoverToMoveForward({x: 0, y: 0}, 'N')({x: 0, y: 1});
    });

    const moveBackward = (rover: Rover) => {
        rover.move("b");
    };

    const expectRoverToMoveBackward = (initialPosition: Position, direction: Direction) => (expectedPosition: Position) => {
        let rover = initRoverPositionAndDirection(initialPosition, direction);
        moveBackward(rover);
        expectPositionAfterMoving(rover, expectedPosition);
    };
    it('should move the rover backward ', () => {
        expectRoverToMoveBackward({x: 0, y: 0}, 'N')({x: 0, y: -1});
        expectRoverToMoveBackward({x: 0, y: 0}, 'S')({x: 0, y: 1});
        expectRoverToMoveBackward({x: 0, y: 0}, 'W')({x: 1, y: 0});
        expectRoverToMoveBackward({x: 0, y: 0}, 'E')({x: -1, y: 0});
    });

    const turnLeft = (rover: Rover) => {
        rover.turn('l');
    };

    const expectRoverToTurnLeft = (initialDirection: Direction) => (expectedDirection: Direction) => {
        let rover = initRoverPositionAndDirection({x: 0, y: 0}, initialDirection);
        turnLeft(rover);
        expect(rover.direction).toBe(expectedDirection);
    };

    it('should turn the rover to the left', () => {
        expectRoverToTurnLeft("N")("W");
        expectRoverToTurnLeft("W")("S");
        expectRoverToTurnLeft("S")("E");
        expectRoverToTurnLeft("E")("N");
    });

    const turnRight = (rover: Rover) => {
        rover.turn('r');
    };

    const expectRoverToTurnLRight = (initialDirection: Direction) => (expectedDirection: Direction) => {
        let rover = initRoverPositionAndDirection({x: 0, y: 0}, initialDirection);
        turnRight(rover);
        expect(rover.direction).toBe(expectedDirection);
    };


    it('should turn the rover to the right', () => {
        expectRoverToTurnLRight("E")("S");
        expectRoverToTurnLRight("N")("E");
        expectRoverToTurnLRight("W")("N");
        expectRoverToTurnLRight("S")("W");
    });
});
