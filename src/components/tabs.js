const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // Grab the Tabs Container
  const tabs = document.querySelector(".tabs-container");

  // Create new markup.

      // Create topics div element.
      const topicsDiv = document.createElement("div");

      // Add a class of "topics" to the topicsDiv.
      topicsDiv.classList.add("topics");

      // Loop through the topics array of strings passed into Tabs function.
      topics.forEach((element) => {

          //create a tab div from each string in the array of tab names.
          let topicDiv = document.createElement("div");

          //Append each tab div to the topicsDiv.
          topicsDiv.appendChild(topicDiv);

          // Add a class of "tab" to each tab div.
          topicDiv.classList.add("tab");

          // Set text inside each tab div.
          topicDiv.textContent = element;

      });

      tabs.appendChild(topicsDiv);

};

Tabs(["JavaScript", "Bootstrap", "Technology", "JQuery", "Node.JS"]);

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  // Grab the tabs container.
  const tabs = document.querySelector(selector);



  // Append the topics div created above to the tabs container.
  tabs.appendChild(Tabs());

}

//tabsAppender(".tabs-container");

export { Tabs, tabsAppender }