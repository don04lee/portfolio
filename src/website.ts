function loadWebsite() {
  const upper = document.createElement("div");
  const header = document.createElement("div");

  document.body.appendChild(upper);
  upper.appendChild(header);

  upper.classList.add("upper");
  header.classList.add("header");

  const about = document.createElement("div");
  const projects = document.createElement("div");
  const contact = document.createElement("div");
  const greeting = document.createElement("h1");

  greeting.textContent = "Hi, I'm Dong Woo.";

  header.appendChild(about);
  header.appendChild(projects);
  header.appendChild(contact);
  upper.appendChild(greeting);

  about.classList.add("headerButton");
  projects.classList.add("headerButton");
  contact.classList.add("headerButton");
  greeting.classList.add("greeting");
}

export default loadWebsite;