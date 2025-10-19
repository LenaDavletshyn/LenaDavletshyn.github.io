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

/** The service div looks like:
 *
 *  <div class="project">
 *    <img class="project-1" src="img/hero-img.png" alt="olda's logo" />
 *    <div class="overlay">
 *      <p>Project 1</p>
 *    </div>
 *  </div>
 *  <div class="project">
 *    <img class="project-2" src="img/hero-img.png" alt="olda's logo" />
 *    <div class="overlay">
 *      <p>Project 1</p>
 *    </div>
 *  </div>
 *  ...
 */
function createShowcase(data) {
  const showcaseContainer = document.querySelector(".showcase");

  if (!data || !data.projects || !showcaseContainer) {
    console.error("Showcase data or container missing.");
    return;
  }

  const showcaseProjects = data.projects.filter(
    (project) => project.isShowcase === true
  );

  showcaseProjects.forEach((project, index) => {
    if (index > 4) return;

    const div = document.createElement("div");
    div.classList.add("project");
    const classNumber = index + 1;
    div.classList.add("project-" + classNumber);

    showcaseContainer.append(div);

    const img = document.createElement("img");
    img.classList.add("image");
    img.src = "img/projects/" + project.id + "/" + project.cover_image;

    div.addEventListener("click", (e) => {
      location.assign("project-info.html#" + project.id);
    });

    div.append(img);

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    div.append(overlayDiv);

    const p = document.createElement("p");
    p.textContent = project.title.toUpperCase();

    overlayDiv.append(p);
  });
}
