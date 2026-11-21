const cards = document.querySelector("#spotlight")

export default async function createSpotlights() {
    cards.innerHTML = "";
    const title = document.createElement("h2");
    title.textContent = "Spotlights";
    cards.appendChild(title);
    try {
        const response = await fetch("https://snakelover23.github.io/wdd231/chamber/data/members.json");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        };

        const data = await response.json();

        let members = data.members.filter(member => member.membership > 1);

        for (let i = 0; i < 2; i++) {
            let rand = Math.floor(Math.random() * ((members.length - 1) - 0 + 1)) + 0;
            const member = members[rand];
            members.splice(rand, 1);

            const card = document.createElement("section");
            const name = document.createElement("h3");
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

            cards.appendChild(card);
        };
    } catch (error) {
        console.error(error);
    };
};