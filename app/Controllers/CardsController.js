import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";


export class CardsController {

  constructor() {
    console.log("Cards Controller Activated")
    // console.log("categories", appState.categories)
    this.drawCards();

    appState.on("cards", this.drawCards)
  }

  drawCards() {
    console.log("Drawing Cards")
    let template = '';
    appState.cards.forEach(c => {
      if (!c.used) {
        template += c.Template;
      } else {
        template += c.UsedTemplate;
      }

    })


    // console.log(template)
    setHTML("cardsArea", template)

  }
}