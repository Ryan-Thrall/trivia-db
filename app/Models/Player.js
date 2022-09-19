import { generateId } from "../Utils/generateId.js";


export class Player {
  /**@param {{id?: string, score: number, name: string, buzzer: string}} data */
  constructor(data) {
    this.id = data.id || generateId();
    this.score = data.score;
    this.name = data.name;
    this.buzzer = data.buzzer;
  }
}