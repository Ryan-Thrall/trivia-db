import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

export class CategoriesController {

  constructor() {
    console.log("Categories Controller Activated")

    // console.log(appState.questions)

    this.drawCategories()
  }

  drawCategories() {
    let template = '';
    appState.categories.forEach(c => {
      template += c.Template;
    })


    // console.log(template)
    setHTML("categoryArea", template)

  }
}