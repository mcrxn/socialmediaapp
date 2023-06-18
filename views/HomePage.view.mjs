// import Lightbox from "../components/Lightbox.view.component.js";
import PostCard from "../components/PostCard.component.js";
import {
  getAllPosts,
  getFeedElements,
  addListenerToFeedElements,
  themeSwitch,
} from "../utils/utils.js";

export default class HomePage {
  static async render() {
    const posts = await getAllPosts();
    const loadMoreBtn = document.getElementById("load_more");
    const container = document.getElementById("layout-container");
    let startIndex = 0;
    const postsPerPage = 4;
    const endIndex = startIndex + postsPerPage;
    const firstToLoad = posts.slice(startIndex, endIndex);

    const postCards = firstToLoad.map((post) => {
      return PostCard.render(post);
    });

    const renderedHtml = postCards.join("");
    startIndex += postsPerPage;

    const loadMore = async () => {
      let currentEndIndex = startIndex + postsPerPage;

      const morePosts = posts.slice(startIndex, currentEndIndex);

      morePosts.forEach((post) => {
        container.innerHTML += PostCard.render(post);
      });

      const elements = await getFeedElements();
      addListenerToFeedElements(elements);

      themeSwitch();

      startIndex += postsPerPage;
      if (startIndex >= posts.length) {
        loadMoreBtn.classList.add("hidden");
      }

      const closeModal = document.querySelector("#closeModal");

      closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("myModal").style.display = "none";
      });
    };
    loadMoreBtn.addEventListener("click", loadMore);

    return `            
              ${renderedHtml}                   
        `;
  }
}
