// The data is already loaded globally from data/services.js
// So we just read it and create the service elements

document.addEventListener("DOMContentLoaded", () => {
  if (!projectsData) {
    console.error(
      "projectsData not found. Make sure data/projects.js is loaded before this script."
    );
    return;
  }

  createShowcase(projectsData);
});

function createShowcase(data) {
  const id = window.location.href.split("#")[1];
  const project = data.projects.find((project) => project.id === id);

  if (project === undefined) window.location.href = "projects.html";

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("cover-image").src =
    "../img/projects/" + project.id + "/" + project.cover_image;
  document.getElementById("service").textContent = project.service;
  document.getElementById("subtitle").textContent = project.subtitle;

  const leftInfoContainer = document.querySelector(".left-info");

  /** <div class="card">
   *    <h4>Card title</h4>
   *    <img src="img/hero-img.png" />
   *    <p>Card description</p>
   *  </div>
   */
  project.left_info.forEach((cardInfo) => {
    if (cardInfo.title === undefined && cardInfo.text === undefined) {
      const image = document.createElement("img");
      image.src = "img/projects/" + id + "/" + cardInfo.image;
      image.classList.add("image-shadow");
      leftInfoContainer.append(image);
    } else {
      const card = document.createElement("div");
      card.classList.add("card");
      if (project.isDark) card.classList.add("dark");

      leftInfoContainer.append(card);

      if (cardInfo.title) {
        const h4 = document.createElement("h4");
        h4.textContent = cardInfo.title;
        card.append(h4);
      }

      if (cardInfo.image) {
        const image = document.createElement("img");
        image.src = "img/projects/" + id + "/" + cardInfo.image;
        card.append(image);
      }

      if (cardInfo.text) {
        const p = document.createElement("p");
        p.textContent = cardInfo.text;
        p.innerHTML = cardInfo.text.replace(/<br\s*\/?>/gi, "<br><br>");
        card.append(p);
      }
    }
  });

  const rightInfoContainer = document.querySelector(".right-info");

  /** <div class="card">
   *    <h4>Card title</h4>
   *    <img src="img/hero-img.png" />
   *    <p>Card description</p>
   *  </div>
   */
  project.right_info.forEach((cardInfo) => {
    if (cardInfo.title === undefined && cardInfo.text === undefined) {
      const image = document.createElement("img");
      image.src = "img/projects/" + id + "/" + cardInfo.image;
      image.classList.add("image-shadow");
      rightInfoContainer.append(image);
    } else {
      const card = document.createElement("div");
      card.classList.add("card");
      if (project.isDark) card.classList.add("dark");

      rightInfoContainer.append(card);

      if (cardInfo.title) {
        const h4 = document.createElement("h4");
        h4.textContent = cardInfo.title;
        card.append(h4);
      }

      if (cardInfo.image) {
        const image = document.createElement("img");
        image.src = "img/projects/" + id + "/" + cardInfo.image;
        card.append(image);
      }

      if (cardInfo.text) {
        const p = document.createElement("p");
        p.textContent = cardInfo.text;
        p.innerHTML = cardInfo.text.replace(/<br\s*\/?>/gi, "<br><br>");
        card.append(p);
      }
    }
  });
}
