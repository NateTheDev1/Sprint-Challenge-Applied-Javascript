// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const prefix = "https://lambda-times-backend.herokuapp.com/topics";
const topicsDOM = document.querySelector(".topics");

axios
  .get(`${prefix}`)
  .then(response => {
    response.data.topics.forEach(t => {
      tabCreator(t);
    });
  })
  .catch(err => {
    console.log(err);
  });

const tabCreator = topic => {
  const div = document.createElement("div");
  div.classList.add("tab");
  div.textContent = topic;

  topicsDOM.appendChild(div);
};
