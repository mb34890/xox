/**
 * Created by Mircea on 12/18/2016.
 */
export class Game {
  public static getNextMove(): string {
    return this._nextMove;
  }

  public static setNextMove(value: string) {
    this._nextMove = value;
  }

  private static _nextMove:string;
}
