const members = [
    { name: "Alek Read", role: "Public Relations Chair", img: "unknown_person_icon.png" },
    { name: "Christian Ramirez", role: "", img: "unknown_person_icon.png" },
    { name: "Daniel Teshome", role: "Big Brother Program", img: "unknown_person_icon.png" },
    { name: "Daniel Wang", role: "Software Engineering Chair", img: "unknown_person_icon.png" },
    { name: "Dev Sheth", role: "Risk Management Chair", img: "unknown_person_icon.png" },
    { name: "Ethan Everitt", role: "Grand Scribe", img: "unknown_person_icon.png" },
    { name: "Ethan George", role: "Intramurals Chair and Diversity & Inclusion Chair", img: "unknown_person_icon.png" },
    { name: "Giovanni Trabelsi", role: "", img: "unknown_person_icon.png" },
    { name: "Kody Johnson", role: "", img: "unknown_person_icon.png" },
    { name: "Kurt Schwarz", role: "", img: "unknown_person_icon.png" },
    { name: "Max Derezinski", role: "", img: "unknown_person_icon.png" },
    { name: "Mikael Gandilyan", role: "Risk Management Chair", img: "unknown_person_icon.png" },
    { name: "Mohnish Mahajan", role: "Finance Chair", img: "unknown_person_icon.png" },
    { name: "Nash Choudhury", role: "Grand Master", img: "unknown_person_icon.png" },
    { name: "Nathan Monteparte", role: "", img: "unknown_person_icon.png" },
    { name: "Nick Bentley", role: "Grand Treasurer", img: "unknown_person_icon.png" },
    { name: "Boah Morraye", role: "", img: "unknown_person_icon.png" },
    { name: "Rami Shawwa", role: "Awards Chair", img: "unknown_person_icon.png" },
    { name: "Ricardo Francisco", role: "Alumni Chair and By-Laws Chair", img: "unknown_person_icon.png" },
    { name: "Saharsh Maloo", role: "Scholarship/Academic Chair", img: "unknown_person_icon.png" },
    { name: "Seth Maisel", role: "", img: "unknown_person_icon.png" },
    { name: "Shan Chung", role: "Assitant Treasurer", img: "unknown_person_icon.png" },
    { name: "Simon Palatchi", role: "Grand Master of Ceremonies", img: "unknown_person_icon.png" },
    { name: "Tareq Dheini", role: "Grand Procurator", img: "unknown_person_icon.png" },
    { name: "Tom McReal", role: "Community Service Chair", img: "unknown_person_icon.png" },
    { name: "Tommy Cohen", role: "BIA Pledge Education Chair", img: "unknown_person_icon.png" },
    { name: "Tyler Spielman", role: "Concessions Chair", img: "unknown_person_icon.png" },
    { name: "Vasili Siarkas", role: "Ritual/Historical Chair", img: "unknown_person_icon.png" },
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
    inner.classList.add("profile-inner"); // matches your CSS

    inner.innerHTML = `
        <img src="images/${member.img}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.role || ""}</p>
    `;

    profile.appendChild(inner);
    container.appendChild(profile);
});

