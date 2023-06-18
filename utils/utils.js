export const getAllPosts = async () => {
  try {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFeedElements = async () => {
  try {
    const elements = document.querySelectorAll(".postImg");
    return elements;
  } catch (error) {
    console.log(error);
  }
};

export const addListenerToFeedElements = (elements) => {
  try {
    elements.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("myModal").style.display = "block";
        document.getElementById("modalImg").src = element.src;
      });
    });
  } catch (error) {}
};

export const themeSwitch = () => {
  try {
    const posts = document.querySelectorAll(".social-media-post");
    const header = document.querySelector(".header-container");
    console.log(header);
    const isDarkTheme = document
      .getElementById("layout-container")
      .getAttribute("class")
      .split(" ")
      .includes("dark-theme");

    console.log(isDarkTheme);

    posts.forEach((p) => {
      if (!p.classList.contains(".dark-theme") && isDarkTheme) {
        header.style.backgroundColor = "grey";
        p.classList.add("dark-theme");
        // console.log(p);
      } else if (isDarkTheme) {
        p.classList.add("dark-theme");
      }
    });

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};
