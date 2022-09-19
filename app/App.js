import { CardsController } from "./Controllers/CardsController.js";
import { CategoriesController } from "./Controllers/CategoriesController.js";
import { QuestionsController } from "./Controllers/QuestionsController.js";

class App {

  questionsController = new QuestionsController();

  categoriesController = new CategoriesController();

  cardsController = new CardsController();



}

window["app"] = new App();
