const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

      // Create new markup.
      const header = document.createElement("div");
      const headerDate = document.createElement("span");
      const headerH1 = document.createElement("h1");
      const headerTemp = document.createElement("span");

      // Append new markup to the DOM.
      header.appendChild(headerDate);
      header.appendChild(headerH1);
      header.appendChild(headerTemp);

      // Add classes where applicable to the appended markup.
      header.classList.add("header");
      headerDate.classList.add("date");
      headerTemp.classList.add("temp");

      // Set text inside elements according to passed in parameters.
      headerDate.textContent = [ date ];
      headerH1.textContent = [ title ];
      headerTemp.textContent = [ temp ];

  return header;

};

const headerAppender = (selector) => {
// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//

    // Grab the header container.
    const header = document.querySelector(selector);

    // Append Header component to the header container.
    header.appendChild(Header("Lambda Times", "January 24, 2021", "86.5°"));

}

//headerAppender(".header-container");

export { Header, headerAppender };