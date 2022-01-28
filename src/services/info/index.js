import { getDatabase, get, ref } from "firebase/database";

export class data {
  constructor() {
    this.db = ref(getDatabase());
  }
  async getRecipes() {
    try {
      const recipes = await get(this.db);
      return recipes.val();
    } catch (e) {
      console.log(e);
    }
  }
}
