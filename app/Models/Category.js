import { generateId } from "../Utils/generateId.js";


export class Category {
  /**@param {{id?: string, name: string, number: number}} data */
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.number = data.number
  }

  get Template() {
    return /*html*/ `
    <div class="col-2 d-flex justify-content-center align-items-center">
      <p class="category-text">${this.name}</p>
    </div>
    `
  }
}