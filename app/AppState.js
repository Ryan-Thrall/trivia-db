import { Card } from "./Models/Card.js"
import { Category } from "./Models/Category.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { getRandomFromArray } from "./Utils/GetRandom.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', Value)

  /**@type {import('./Models/Question').Question[]} */
  questions = []

  possibleCategories = [
    new Category({ name: "General Knowledge", number: 9 }),
    new Category({ name: "Entertainment: Books", number: 10 }),
    new Category({ name: "Entertainment: Film", number: 11 }),
    new Category({ name: "Entertainment: Music", number: 12 }),
    new Category({ name: "Entertainment: Musicals & Theatres", number: 13 }),
    new Category({ name: "Entertainment: Television", number: 14 }),
    new Category({ name: "Entertainment: Video Games", number: 15 }),
    new Category({ name: "Entertainment: Board Games", number: 16 }),
    new Category({ name: "Science & Nature", number: 17 }),
    new Category({ name: "Science: Computers", number: 18 }),
    new Category({ name: "Science: Mathematics", number: 19 }),
    new Category({ name: "Mythology", number: 20 }),
    new Category({ name: "Sports", number: 21 }),
    new Category({ name: "Geography", number: 22 }),
    new Category({ name: "History", number: 23 }),
    new Category({ name: "Politics", number: 24 }),
    new Category({ name: "Art", number: 25 }),
    new Category({ name: "Celebrities", number: 26 }),
    new Category({ name: "Animals", number: 27 }),
    new Category({ name: "Vehicles", number: 28 }),
    new Category({ name: "Entertainment: Comics", number: 29 }),
    new Category({ name: "Science: Gadgets", number: 30 }),
    new Category({ name: "Entertainment: Japanese Anime & Manga", number: 31 }),
    new Category({ name: "Entertainment: Cartoon & Animations", number: 32 })
  ]

  categories = getRandomFromArray(6, this.possibleCategories)


  // categories = this.categoryNames.map(n => new Category({ name: n }))

  /**@type {import('./Models/Card').Card[]} */
  cards = [
    new Card({ points: 200, category: this.categories[0].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 200, category: this.categories[1].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 200, category: this.categories[2].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 200, category: this.categories[3].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 200, category: this.categories[4].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 200, category: this.categories[5].name, difficulty: "easy", dailyDouble: false }),

    new Card({ points: 400, category: this.categories[0].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 400, category: this.categories[1].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 400, category: this.categories[2].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 400, category: this.categories[3].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 400, category: this.categories[4].name, difficulty: "easy", dailyDouble: false }),
    new Card({ points: 400, category: this.categories[5].name, difficulty: "easy", dailyDouble: false }),

    new Card({ points: 600, category: this.categories[0].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 600, category: this.categories[1].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 600, category: this.categories[2].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 600, category: this.categories[3].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 600, category: this.categories[4].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 600, category: this.categories[5].name, difficulty: "medium", dailyDouble: false }),

    new Card({ points: 800, category: this.categories[0].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 800, category: this.categories[1].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 800, category: this.categories[2].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 800, category: this.categories[3].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 800, category: this.categories[4].name, difficulty: "medium", dailyDouble: false }),
    new Card({ points: 800, category: this.categories[5].name, difficulty: "medium", dailyDouble: false }),

    new Card({ points: 1000, category: this.categories[0].name, difficulty: "hard", dailyDouble: false }),
    new Card({ points: 1000, category: this.categories[1].name, difficulty: "hard", dailyDouble: false }),
    new Card({ points: 1000, category: this.categories[2].name, difficulty: "hard", dailyDouble: false }),
    new Card({ points: 1000, category: this.categories[3].name, difficulty: "hard", dailyDouble: false }),
    new Card({ points: 1000, category: this.categories[4].name, difficulty: "hard", dailyDouble: false }),
    new Card({ points: 1000, category: this.categories[5].name, difficulty: "hard", dailyDouble: false }),
  ]

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
