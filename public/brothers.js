const members = [
    { name: "Ethan Everitt", role: "Grand Scribe", img: "unknown_person_icon.png" },
    { name: "Ethan George", role: "Intramurals Chair and Diversity & Inclusion Chair", img: "unknown_person_icon.png" },
    { name: "Farzan Ahmed", role: "", img: "unknown_person_icon.png" },
    { name: "Kurt Schwarz", role: "", img: "unknown_person_icon.png" },
    { name: "Luke Whitlock", role: "", img: "unknown_person_icon.png"},
    { name: "Nash Choudhury", role: "Grand Master", img: "unknown_person_icon.png" },
    { name: "Nick Bentley", role: "Grand Treasurer", img: "unknown_person_icon.png" },
    { name: "Ryan Nyugen", role: "", img: "unknown_person_icon.png" },
    { name: "Simon Palatchi", role: "Grand Master of Ceremonies", img: "unknown_person_icon.png" },
    { name: "Tareq Dheini", role: "Grand Procurator", img: "unknown_person_icon.png" },
    { name: "Tom McReal", role: "Community Service Chair", img: "unknown_person_icon.png" },
    { name: "Tommy Cohen", role: "BIA Pledge Education Chair", img: "unknown_person_icon.png" },
    { name: "Tyler Spielman", role: "Concessions Chair", img: "unknown_person_icon.png" },
    // { name: "", role: "", img: "unknown_person_icon.png" },
];

const container = document.querySelector(".profiles");

members.forEach(member => {
    const profile = document.createElement("div");
    profile.classList.add("profile");       // CSS class
    profile.setAttribute("data-tilt", "");  // Vanilla Tilt attribute
    profile.setAttribute("data-tilt-max", "50");
    profile.setAttribute("data-tilt-speed", "400");
    profile.setAttribute("data-tilt-perspective", "500");
    profile.setAttribute("data-tilt-glare", "true");
    profile.setAttribute("max-glare", "0.5");

    const inner = document.createElement("div");
    inner.classList.add("profile-inner"); 

    inner.innerHTML = `
        <img src="images/${member.img}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.role || ""}</p>
    `;

    profile.appendChild(inner);
    container.appendChild(profile);
});

