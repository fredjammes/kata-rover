import { Direction, Position, Rover } from './kata-rover';

describe('Rover', () => {
    const expectRoverToBeAtPosition = (rover: Rover | undefined, expectedPosition: Position): void => {
        expect(rover?.position).toStrictEqual(expectedPosition);
    };

    const expectInitialPositionToBeTheOneOfTheRover = (initialPosition: Position) => (expectedPosition: Position) => {
        const rover: Rover = new Rover(initialPosition, 'W');
        expectRoverToBeAtPosition(rover, expectedPosition)
    }

    it('should initially be at its starting point', () => {
        expectInitialPositionToBeTheOneOfTheRover([0, 0])([0, 0]);
        expectInitialPositionToBeTheOneOfTheRover([1, 1])([1, 1]);
        expectInitialPositionToBeTheOneOfTheRover([1, 2])([1, 2]);
    });

    it('should initially face West',() => {
        let rover = new Rover([0, 0], 'W');
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

    it('should move the rover forward ',() => {
        expectRoverToMoveForward([0, 0], 'W')([-1, 0]);
        expectRoverToMoveForward([2, 0], 'W')([1, 0]);
        expectRoverToMoveForward([0, 3], 'W')([-1, 3]);
        expectRoverToMoveForward([0, 0], 'E')([1, 0]);
    });
});
