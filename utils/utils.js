export const getAllPosts = async () => {
  try {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
