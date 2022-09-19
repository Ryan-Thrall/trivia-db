import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { getFormData } from "../Utils/FormHandler.js";
import { getRandomFromArray } from "../Utils/GetRandom.js";
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js";

export class QuestionsController {
  constructor() {
    console.log("Questions Controller Activated")

    // Get Each Type Of Question 
    this.getQuestions(2, appState.categories[0].number, "easy")
    this.getQuestions(2, appState.categories[0].number, "medium")
    this.getQuestions(1, appState.categories[0].number, "hard")
    this.getQuestions(2, appState.categories[1].number, "easy")
    this.getQuestions(2, appState.categories[1].number, "medium")
    this.getQuestions(1, appState.categories[1].number, "hard")
    this.getQuestions(2, appState.categories[2].number, "easy")
    this.getQuestions(2, appState.categories[2].number, "medium")
    this.getQuestions(1, appState.categories[2].number, "hard")
    this.getQuestions(2, appState.categories[3].number, "easy")
    this.getQuestions(2, appState.categories[3].number, "medium")
    this.getQuestions(1, appState.categories[3].number, "hard")
    this.getQuestions(2, appState.categories[4].number, "easy")
    this.getQuestions(2, appState.categories[4].number, "medium")
    this.getQuestions(1, appState.categories[4].number, "hard")
    this.getQuestions(2, appState.categories[5].number, "easy")
    this.getQuestions(2, appState.categories[5].number, "medium")
    this.getQuestions(1, appState.categories[5].number, "hard")
  }

  async getQuestions(amount, category, difficulty) {
    try {
      await questionsService.getQuestions(amount, category, difficulty)
    } catch (error) {
      console.error('[getQuestions]', error)
      Pop.error(error)
    }
  }

  drawQuestion(shouldFunction, cardId) {
    // console.log("Drawing Question")
    if (shouldFunction) {
      let card = appState.cards.find(c => c.id == cardId)
      // @ts-ignore
      card.used = true;
      appState.cards = appState.cards;

      let template = '';
      // @ts-ignore
      let potentialQuestions = appState.questions.filter(q => q.category == card.category && q.difficulty == card.difficulty)
      console.log(potentialQuestions)
      let chosenQuestion = getRandomFromArray(1, potentialQuestions);
      console.log(chosenQuestion)
      let question = chosenQuestion[0];


      console.log(question)
      template += question.Template;

      // console.log(template)
      setHTML("questionArea", template)
    }
  }

  checkAnswer(questionId) {
    // console.log("Checking Answer")

    try {
      // @ts-ignore
      window.event.preventDefault();

      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      // console.log(formData)
      questionsService.checkAnswer(formData, questionId)

    } catch (error) {
      console.error("[checkAnswer]", error)
    }

    // Remove Question Element from page
    this.removeQuestion()

  }

  removeQuestion() {
    let questionObject = document.getElementById("questionArea")
    // @ts-ignore
    questionObject.innerHTML = '';
  }
}