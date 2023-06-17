import HomePage from "./views/HomePage.view.mjs";
export default class App {
  static async init() {
    // console.log(await HomePage.render());
    document.getElementById("layout-container").innerHTML =
      await HomePage.render();
  }
}

App.init();
