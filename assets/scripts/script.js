console.log("Script chargé!");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const container = document.getElementById("posts-container");
    let classCounter = 1; // Initialize a counter for your class names
    posts.forEach((post) => {
      const div = document.createElement("div");
      // Add a class with an incrementing number
      div.classList.add(`div${classCounter}`); // Each div gets a unique class name
      classCounter++; // Increment the counter for the next div
      div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      container.appendChild(div);
    });
  })
  .catch((error) => console.error(error));

// Theme
const setTheme = (theme) => (document.documentElement.className = theme);

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back 😕";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})
