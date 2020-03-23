// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

function Header() {
  let elements = [];

  const div = document.createElement("div");
  div.classList.add("header");

  const span = document.createElement("span");
  span.classList.add("date");
  span.textContent = "MARCH 28, 2019";
  elements.push(span);

  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  elements.push(h1);

  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = "98°";
  elements.push(temp);

  elements.forEach(e => {
    div.appendChild(e);
  });

  headerContainer.appendChild(div);
}

Header();
