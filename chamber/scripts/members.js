const cards = document.querySelector("#members");

const gridBtn = document.querySelector("#grid-button");
gridBtn.addEventListener("click", () => {
	createGrid();
});

const listBtn = document.querySelector("#list-button");
listBtn.addEventListener("click", () => {
	createList();
});

createGrid();

async function createGrid() {
    cards.innerHTML = "";
    try {
        const response = await fetch("data/members.jason");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        };

        const data = await response.json();

        const members = data.members;

        members.forEach(member => {
            const card = document.createElement("section");
            const name = document.createElement("h2");
            const image = document.createElement("img");
            const email = document.createElement("p");
            const phone = document.createElement("p");
            const url = document.createElement("a");

            name.textContent = member.name;

            image.setAttribute("src", member.image);
            image.setAttribute("alt", `Picture of ${member.name}`);
            image.setAttribute("loading", "lazy");
            image.setAttribute("width", "60");
            image.setAttribute("hight", "60");

            email.textContent = `<span class="bold">Email:</span> ${member.email}`;

            phone.textContent = `<span class="bold">Phone:</span> ${member.phone}`;

            url.textContent = `<span class="bold">URL:</span> ${member.website}`;
            url.setAttribute("href", member.website);

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(email);
            card.appendChild(phone);
            card.appendChild(url);

            cards.setAttribute("class", "mGrid");
            cards.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    };
};

async function createList() {
    cards.innerHTML = "";
    try {
        const response = await fetch("data/members.jason");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        };

        const data = await response.json();

        const members = data.members;

        members.forEach(member => {
            const card = document.createElement("section");
            const name = document.createElement("h2");
            const email = document.createElement("p");
            const phone = document.createElement("p");
            const url = document.createElement("a");

            name.textContent = member.name;

            email.textContent = `<span class="bold">Email:</span> ${member.email}`;

            phone.textContent = `<span class="bold">Phone:</span> ${member.phone}`;

            url.textContent = `<span class="bold">URL:</span> ${member.website}`;
            url.setAttribute("href", member.website);

            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(phone);
            card.appendChild(url);

            cards.setAttribute("class", "mList");
            cards.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    };
};