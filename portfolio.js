const profile = {
  email: "anatinuweampiire@gmail.com",
  whatsapp: "256768534257",
  linkedin: "https://www.linkedin.com/in/Nuweampiire/",
  github: "Princess-Anati"
};

const projects = [
  { title: "Banking System", text: "Accounts, deposits, withdrawals and statements in a Django web application modelled on a Ugandan bank.", tags: ["Python", "Django", "PostgreSQL"], links: [{ label: "Backend", url: "https://github.com/eria-developer/yukon-bank-backend" }, { label: "Frontend", url: "https://github.com/eria-developer/yukon-bank-frontend" }], featured: true },
  { title: "Family Tracker", text: "A multilingual web app with white-label branding and theming.", tags: ["TypeScript", "Node.js"], links: [{ label: "View on GitHub", url: "https://github.com/Ponthius/Family-Tracker" }], featured: true },
  { title: "Smart Task Manager", text: "Create, organise and prioritise tasks so that nothing slips through.", tags: ["Web app"], links: [{ label: "Backend", url: "https://github.com/lakonyemma/SmartTask-Backend" }], featured: true },
  { title: "Savings Group App", text: "Tracks contributions and loans for a savings group, with roles for leader, treasurer, publicity and secretary.", tags: ["HTML", "CSS", "JavaScript"], repo: "savings-group-app" },
  { title: "Kampala Community SACCO", text: "A staff login and management dashboard backed by SQL Server.", tags: ["C#", "UWP", "SQL Server"], repo: "sacco-app" },
  { title: "Student Result System", text: "Enter marks for each subject and get the total, average and grade instantly.", tags: ["C#", "UWP"], repo: "student-result-system" },
  { title: "Personal Browser", text: "A tabbed web browser with page previews.", tags: ["C#", "UWP"], repo: "personal-browser" },
  { title: "Taste of Uganda", text: "A restaurant app for browsing the menu and its dishes.", tags: ["C#", "UWP"], repo: "taste-of-uganda" }
];

const skillGroups = [
  { name: "Languages", items: ["C#", "Java", "C", "Python", "TypeScript", "SQL"] },
  { name: "Web", items: ["HTML", "CSS", "JavaScript", "Next.js", "Django REST Framework"] },
  { name: "Data", items: ["PostgreSQL", "SQL Server", "MySQL"] }
];

const svg = (inner) => '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">' + inner + '</svg>';

const icons = {
  email: svg('<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m3.5 7 8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'),
  whatsapp: svg('<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>'),
  linkedin: svg('<path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'),
  github: svg('<path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>')
};

const contacts = [
  { label: "Email", value: profile.email, href: "mailto:" + profile.email + "?subject=" + encodeURIComponent("Hello Anati"), external: false, icon: icons.email },
  { label: "WhatsApp", value: "Chat with me", href: "https://wa.me/" + profile.whatsapp + "?text=" + encodeURIComponent("Hello Anati, I saw your portfolio and would like to talk."), external: true, icon: icons.whatsapp },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, external: true, icon: icons.linkedin },
  { label: "GitHub", value: "github.com/" + profile.github, href: "https://github.com/" + profile.github, external: true, icon: icons.github }
];

const panels = [...document.querySelectorAll(".panel")];
const stage = document.getElementById("stage");
const rail = document.getElementById("rail");
const cards = document.getElementById("cards");
const moreBtn = document.getElementById("moreBtn");
const groups = document.getElementById("groups");
const contactList = document.getElementById("contactList");

let current = 0;
const visited = new Set();

function go(index, options) {
  const settings = Object.assign({ focus: true, push: true }, options);
  if (index < 0 || index >= panels.length) return;
  current = index;
  panels.forEach((panel, i) => {
    panel.classList.toggle("is-active", i === index);
    panel.classList.toggle("is-before", i < index);
    panel.classList.toggle("is-after", i > index);
    panel.inert = i !== index;
  });
  visited.add(index);
  [...rail.children].forEach((dot, i) => {
    dot.setAttribute("aria-current", String(i === index));
    dot.classList.toggle("visited", visited.has(i));
  });
  rail.style.setProperty("--progress", String(index / (panels.length - 1)));
  panels[index].scrollTop = 0;
  panels[index].querySelectorAll(".scroll").forEach((area) => { area.scrollTop = 0; });
  const hash = "#" + panels[index].id;
  if (settings.push && location.hash !== hash) {
    try { history.pushState(null, "", hash); } catch (error) { return; }
  }
  if (settings.focus) panels[index].focus({ preventScroll: true });
}

function renderRail() {
  panels.forEach((panel, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", panel.dataset.label);
    const label = document.createElement("span");
    label.className = "dot-label";
    label.textContent = panel.dataset.label;
    dot.appendChild(label);
    dot.addEventListener("click", () => go(i));
    rail.appendChild(dot);
  });
}

function renderProjects() {
  let extras = 0;
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card";
    if (!project.featured) {
      card.classList.add("extra");
      card.hidden = true;
      card.style.setProperty("--n", extras++);
    }
    const title = document.createElement("h3");
    title.textContent = project.title;
    const text = document.createElement("p");
    text.textContent = project.text;
    const tags = document.createElement("ul");
    tags.className = "tags";
    project.tags.forEach((tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      tags.appendChild(item);
    });
    const links = project.links || [{ label: "View on GitHub", url: "https://github.com/" + profile.github + "/" + project.repo }];
    const linkRow = document.createElement("div");
    linkRow.className = "card-links";
    links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = link.label + " \u2197";
      linkRow.appendChild(anchor);
    });
    card.append(title, text, tags, linkRow);
    cards.appendChild(card);
  });

  if (extras === 0) {
    moreBtn.parentElement.hidden = true;
    return;
  }

  moreBtn.addEventListener("click", () => {
    const expanded = moreBtn.getAttribute("aria-expanded") === "true";
    const hiddenCards = cards.querySelectorAll(".extra");
    hiddenCards.forEach((card) => {
      card.hidden = expanded;
      card.classList.toggle("reveal", !expanded);
    });
    if (!expanded) hiddenCards[0].scrollIntoView({ behavior: "smooth", block: "nearest" });
    moreBtn.setAttribute("aria-expanded", String(!expanded));
    moreBtn.textContent = expanded ? "View more projects" : "Show fewer projects";
  });
}

function renderSkills() {
  let order = 0;
  skillGroups.forEach((group) => {
    const box = document.createElement("div");
    box.className = "group";
    const heading = document.createElement("h3");
    heading.textContent = group.name;
    const chips = document.createElement("div");
    chips.className = "chips";
    group.items.forEach((name) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.style.setProperty("--i", order++);
      chip.textContent = name;
      chips.appendChild(chip);
    });
    box.append(heading, chips);
    groups.appendChild(box);
  });
}

function renderContacts() {
  contacts.forEach((contact) => {
    const row = document.createElement("a");
    row.className = "row";
    row.href = contact.href;
    if (contact.external) {
      row.target = "_blank";
      row.rel = "noopener noreferrer";
    }
    const icon = document.createElement("span");
    icon.className = "row-icon";
    icon.innerHTML = contact.icon;
    const text = document.createElement("span");
    text.className = "row-text";
    const label = document.createElement("span");
    label.className = "row-label";
    label.textContent = contact.label;
    const value = document.createElement("span");
    value.className = "row-value";
    value.textContent = contact.value;
    text.append(label, value);
    const arrow = document.createElement("span");
    arrow.className = "row-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "\u2192";
    row.append(icon, text, arrow);
    contactList.appendChild(row);
  });
}

document.querySelectorAll(".photo-frame img").forEach((image) => {
  const frame = image.parentElement;
  image.addEventListener("error", () => frame.classList.add("no-photo"));
  if (image.complete && image.naturalWidth === 0) frame.classList.add("no-photo");
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => go((current + 1) % panels.length));
});

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "ArrowRight") go(Math.min(current + 1, panels.length - 1));
  if (event.key === "ArrowLeft") go(Math.max(current - 1, 0));
});

let touchX = 0;
let touchY = 0;

stage.addEventListener("touchstart", (event) => {
  touchX = event.changedTouches[0].clientX;
  touchY = event.changedTouches[0].clientY;
}, { passive: true });

stage.addEventListener("touchend", (event) => {
  const dx = event.changedTouches[0].clientX - touchX;
  const dy = event.changedTouches[0].clientY - touchY;
  if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
  go(dx < 0 ? Math.min(current + 1, panels.length - 1) : Math.max(current - 1, 0));
}, { passive: true });

function indexFromHash() {
  const found = panels.findIndex((panel) => "#" + panel.id === location.hash);
  return found >= 0 ? found : 0;
}

window.addEventListener("popstate", () => go(indexFromHash(), { focus: false, push: false }));

renderRail();
renderProjects();
renderSkills();
renderContacts();
go(indexFromHash(), { focus: false, push: false });