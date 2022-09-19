import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionServer } from "../Services/AxiosService.js"

class QuestionsService {
  checkAnswer(formData, questionId) {
    let question = appState.questions.find(q => q.id == questionId)

    // @ts-ignore
    if (formData.answer == question.answer) {
      window.alert("Correct")
    } else {
      // @ts-ignore
      window.alert(`Incorrect, Correct Answer was ${question.answer}`)
    }


    console.log("Question ", question)
    // @ts-ignore
    appState.questions = appState.questions.filter(q => q.id != question.id)
    console.log(appState.questions)
  }

  async getQuestions(amount, category, difficulty) {
    // console.log("retrieving Questions")
    const res = await questionServer.get('/api.php', {
      params: {
        amount: amount,
        category: category,
        difficulty: difficulty,
      }
    })

    // console.log(res.data)
    let newStuff = res.data.results.map(rawData => new Question(rawData))
    newStuff.forEach(stuff => {
      appState.questions = [...appState.questions, stuff]
    })
    // console.log("appState.questions", appState.questions)

  }

}


export const questionsService = new QuestionsService();