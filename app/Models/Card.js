import { generateId } from "../Utils/generateId.js";

export class Card {
  /**@param {{id?: string, points: number, category: string, difficulty: string, dailyDouble: boolean, used?: boolean}} data */
  constructor(data) {
    this.id = data.id || generateId();
    this.points = data.points;
    this.category = data.category;
    this.difficulty = data.difficulty;
    this.dailyDouble = data.dailyDouble || false;
    this.used = false;
  }

  get Template() {
    return /*html*/ `
    <div class="col-2 d-flex justify-content-center align-items-center"
      onclick="app.questionsController.drawQuestion('${!this.used}', '${this.id}')">
      <p class="jeopardy-text">${this.points}</p>
    </div>
    `
  }

  get UsedTemplate() {
    return /*html*/ `
    <div class="col-2 d-flex justify-content-center align-items-center">
    </div>
    `
  }
}