const drivers = [
    "Lewis Hamilton",
    "Max Verstappen",
    "Charles Leclerc",
    "Fernando Alonso",
    "Nico Hulkenber",
    "Kevin Magnussen",
    "Esteban Ocon",
    "Pierre Gasly",
    "Logan Sargeant",
    "Alex Albon",
    "Carlos Sainz",
    "George Russell",
    "Yuki Tsunoda",
    "Daniel Ricciardo",
    "Zhou Guanyu",
    "Valterri Bottas",
    "Sergio Perez",
    "Lance Stroll",
    "Lando Norris",
    "Oscar Piastri"
];

const teams = [
    "Mercedes",
    "Red Bull",
    "Ferrari",
    "McLaren",
    "Alpine",
    "Haas",
    "Aston Martin",
    "Racing Bulls (RB)",
    "Sauber",
    "Williams"
];

const principals = [
    "Toto Wolff",
    "Christian Horner",
    "Fred Vasseur",
    "Andrea Stella",
    "Mike Krack",
    "James Vowles",
    "Bruno Famin",
    "Laurent Mekies",
    "Alessandro Bravi",
    "Ayao Komatsu",
    "Guenther Steiner"
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById('generateButton').addEventListener('click', () => {
    const driver1 = getRandomElement(drivers);
    document.getElementById('driver1').textContent = driver1;
        // Automatically generate a different driver for driver2 if driver2 is already selected
        let driver2;
        do {
            driver2 = getRandomElement(drivers);
        } while (driver2 === driver1);
        document.getElementById('driver2').textContent = driver2;
});

document.getElementById('generateButton').addEventListener('click', () => {
    let driver1 = document.getElementById('driver1').textContent;
    let driver2;
    do {
        driver2 = getRandomElement(drivers);
    } while (driver2 === driver1);
    document.getElementById('driver2').textContent = driver2;
});

document.getElementById('generateButton').addEventListener('click', () => {
    const team = getRandomElement(teams);
    document.getElementById('team').textContent = team;
});

document.getElementById('generateButton').addEventListener('click', () => {
    const principal = getRandomElement(principals);
    document.getElementById('principal').textContent = principal;
});