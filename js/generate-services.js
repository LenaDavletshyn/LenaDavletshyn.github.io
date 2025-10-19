// The data is already loaded globally from data/services.js
// So we just read it and create the service elements

document.addEventListener("DOMContentLoaded", () => {
  if (!servicesData) {
    console.error(
      "servicesData not found. Make sure data/services.js is loaded before this script."
    );
    return;
  }

  createServices(servicesData);
});

/** The service div looks like:
 *  <div class="service card">
 *      <h3>UX Design</h3>
 *      <div>
 *          <h4>01</h4>
 *          <img src="img/asterisc.svg" />
 *      </div>
 *      <div class="spacing-lg"></div>
 *      <p>Description</p>
 *  </div>
 */
function createServices(data) {
  const servicesContainer = document.querySelector(".services");

  if (!data || !data.services || !servicesContainer) {
    console.error("Services data or container missing.");
    return;
  }

  data.services.forEach((service, index) => {
    const serviceDiv = document.createElement("div");
    serviceDiv.classList.add("service");
    serviceDiv.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = service.title;

    const headerDiv = document.createElement("div");

    const number = document.createElement("h4");
    number.textContent = String(index + 1).padStart(2, "0");

    const img = document.createElement("img");
    img.src = "img/asterisc.svg";
    img.alt = "Asterisk icon";

    headerDiv.append(number, img);

    const spacingDiv = document.createElement("div");
    spacingDiv.classList.add("spacing-lg");

    const paragraph = document.createElement("p");
    paragraph.innerHTML = service.description.replace(
      /<br\s*\/?>/gi,
      "<br><br>"
    );

    serviceDiv.append(title, headerDiv, spacingDiv, paragraph);
    servicesContainer.appendChild(serviceDiv);
  });
}
