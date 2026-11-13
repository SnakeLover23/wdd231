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
        const response = await fetch("https://snakelover23.github.io/wdd231/chamber/data/members.json");
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
            const section = document.createElement("section");

            name.textContent = member.name;

            image.setAttribute("src", member.image);
            image.setAttribute("alt", `Picture of ${member.name}`);
            image.setAttribute("loading", "lazy");
            image.setAttribute("width", "60");
            image.setAttribute("hight", "60");

            email.textContent = member.email;
            const espan = document.createElement("span");
            espan.setAttribute("class", "bold");
            espan.textContent = "Email: ";
            email.prepend(espan);

            phone.textContent = member.phone;
            const pspan = document.createElement("span");
            pspan.setAttribute("class", "bold");
            pspan.textContent = "Phone: ";
            phone.prepend(pspan);

            url.textContent =member.website;
            const uspan = document.createElement("span");
            uspan.setAttribute("class", "bold");
            uspan.textContent = "URL: ";
            url.prepend(uspan);
            url.setAttribute("href", member.website);

            card.appendChild(name);
            card.appendChild(image);
            section.appendChild(email);
            section.appendChild(phone);
            section.appendChild(url);
            card.appendChild(section);

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
        const response = await fetch("https://snakelover23.github.io/wdd231/chamber/data/members.json");
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
            const section = document.createElement("section");

            name.textContent = member.name;

            email.textContent = member.email;
            const espan = document.createElement("span");
            espan.setAttribute("class", "bold");
            espan.textContent = "Email: ";
            email.prepend(espan);

            phone.textContent = member.phone;
            const pspan = document.createElement("span");
            pspan.setAttribute("class", "bold");
            pspan.textContent = "Phone: ";
            phone.prepend(pspan);

            url.textContent =member.website;
            const uspan = document.createElement("span");
            uspan.setAttribute("class", "bold");
            uspan.textContent = "URL: ";
            url.prepend(uspan);
            url.setAttribute("href", member.website);

            card.appendChild(name);
            section.appendChild(email);
            section.appendChild(phone);
            section.appendChild(url);
            card.appendChild(section);

            cards.setAttribute("class", "mList");
            cards.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    };
};