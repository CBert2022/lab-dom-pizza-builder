// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenpepper) => {
    if (state.greenPeppers) {
      oneGreenpepper.style.visibility = 'visible';
    } else {
      oneGreenpepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((oneWhiteSauce) => {
    if (state.whiteSauce) {
      oneWhiteSauce.style.visibility = 'visible';
    } else {
      oneWhiteSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneGlutenFreeSauce) => {
    if (state.glutenFreeCrust) {
      oneGlutenFreeSauce.style.visibility = 'visible';
    } else {
      oneGlutenFreeSauce.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Get all buttons on the page
  const buttons = document.querySelectorAll("button");

  // Loop through each button
  buttons.forEach(function(button) {
    // Check if button should have the "active" class
    if (button.dataset.active) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}



function renderPrice() {
  let totalPrice = basePrice;

  const ingredientsList = document.querySelector('.panel.price ul');
  ingredientsList.innerHTML = '';

  for (let ingredient in state) {
    if (state[ingredient]) {
      const unit = document.createElement('li');
      unit.innerText = `${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      ingredientsList.append(unit);
      totalPrice += ingredients[ingredient].price;
    }
  }

  const price = document.querySelector('.panel.price strong');
  price.textContent = `$ ${totalPrice}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
