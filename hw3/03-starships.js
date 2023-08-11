const url = "https://swapi.dev/api/starships/";

const app = document.querySelector("#results");

let starships = [];

const fetchData = (url) => {
  // Retrieve the data from the API
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let arr = data.results;
      console.log(arr);
      arr.forEach((element) => {
        starships.push(element);
      });
      return data.results;
    })
    .catch((error) => console.log(error));
};

fetchData(url);

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.classList.add("grid-container");

  container.style.backgroundColor = "white";
  container.style.borderRadius = "10px";
  container.style.width = "25em";
  container.style.margin = "10px";
  container.style.padding = "10px";

  // Name
  const name = document.createElement("p");
  const nameB = document.createElement("b");
  nameB.textContent = spaceship.name;
  name.appendChild(nameB);
  name.classList.add("grid-item", "name");

  // Credits
  const cost = document.createElement("p");
  const costB = document.createElement("b");
  costB.textContent =
    parseInt(spaceship.cost_in_credits).toLocaleString() + " credits";
  cost.appendChild(costB);
  cost.classList.add("grid-item", "cost");

  // Manufacturer
  const manufacturer = document.createElement("p");
  manufacturer.textContent = "Manufactured by " + spaceship.manufacturer;
  manufacturer.classList.add("grid-item", "manufacturer");

  // Max Speed
  const maxAS = document.createElement("p");
  const speedValue = document.createElement("b");
  const description = document.createTextNode(" Max atmosphering speed");
  speedValue.textContent = parseInt(
    spaceship.max_atmosphering_speed
  ).toLocaleString();
  maxAS.appendChild(speedValue);
  maxAS.appendChild(description);
  maxAS.classList.add("grid-item", "maxAS");

  // Cargo capacity
  const cargo = document.createElement("p");
  const cargoN = document.createElement("b");
  const cargoD = document.createTextNode(" Cargo Capacity");
  cargoN.textContent = parseInt(spaceship.cargo_capacity).toLocaleString();
  cargo.appendChild(cargoN);
  cargo.appendChild(cargoD);
  cargo.classList.add("grid-item", "capacity");

  // Append items
  container.append(name);
  container.append(cost);
  container.append(manufacturer);
  container.append(maxAS);
  container.append(cargo);

  document.body.append(container);

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  let newArr = [];
  input.forEach((element) => {
    if (element.passengers < 10 && element.crew > 1) {
      newArr.push(element);
    }
  });
  return newArr;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  let totalCost = 10;

  input.forEach((element) => {
    let cost = element.cost_in_credits;
    if (cost != "unknown") {
      totalCost = totalCost + parseInt(element.cost_in_credits);
    }
  });

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
