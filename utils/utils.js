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
