import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { shuffle } from "../Utils/GetRandom.js";


export class Question {
  /**@param {{id: string, category: string, correct_answer: string, difficulty: string, incorrect_answers: Array, question: string, type: string}} data */
  constructor(data) {
    this.id = data.id || generateId()
    this.category = data.category;
    this.answer = data.correct_answer;
    this.difficulty = data.difficulty;
    this.incorrect_answers = data.incorrect_answers;
    this.question = data.question;
    this.type = data.type;
  }

  get Template() {
    return /*html*/ `
  <div class="question-card d-flex flex-column align-items-center" id="${this.id}">
    <p class="question-text">${this.question}</p>

    <form onsubmit="app.questionsController.checkAnswer('${this.id}')" class="d-flex flex-column">
      ${this.AnswerTemplate}

      <button type="submit" class="btn btn-warning">Final Answer</button>
    </form>
  </div>
    `
  }

  get AnswerTemplate() {
    let answers = [this.answer, ...this.incorrect_answers]
    let shuffled = shuffle(answers)
    let answerPrefix = ["A.) ", "B.) ", "C.) ", "D.) "]
    let template = ''
    let prefixIndex = 0;
    shuffled.forEach(a => {
      template += /*html*/`
      <div>
        <input type="radio" name="answer" value="${a}">
        <label for="answer" class="answer-text">${answerPrefix[prefixIndex]} ${a}</label>
      </div>
    `
      prefixIndex++;
    })
    return template
  }

}