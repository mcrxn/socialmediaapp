import { getFeedElements, addListenerToFeedElements } from "./utils/utils.js";
import HomePage from "./views/HomePage.view.mjs";
export default class App {
  static async init() {
    document.getElementById("layout-container").innerHTML =
      await HomePage.render();
    const themeSwitchBtn = document.getElementById("switch");

    themeSwitchBtn.addEventListener("click", () => {
      document
        .getElementById("layout-container")
        .classList.toggle("dark-theme");
      document.querySelectorAll(".social-media-post").forEach((p) => {
        p.classList.toggle("dark-theme");
      });
    });

    const elements = await getFeedElements();
    addListenerToFeedElements(elements);

    const closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("myModal").style.display = "none";
    });
  }
}

App.init();
