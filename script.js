const contactsContainer = document.getElementById("contacts-container");
const favoritedContainer = document.getElementById("favorited-container");
let showAddForm,
  addForm,
  nameInput,
  numberInput,
  emailInput,
  addressInput,
  contact,
  favoriteBtn;

let contactsDB = JSON.parse(localStorage.getItem("contactsDB"));

addForm = document.getElementById("add-form");
nameInput = document.getElementById("name-input");
numberInput = document.getElementById("number-input");
emailInput = document.getElementById("email-input");
addressInput = document.getElementById("address-input");
let sumbitBtn = document.getElementById("save-contact");

sumbitBtn.onclick = (e) => {
  e.preventDefault();
  contactsDB.push({
    name: nameInput.value,
    phoneNumber: numberInput.value,
    email: emailInput.value,
    address: addressInput.value,
    favorite: false,
  });

  localStorage.setItem("contactsDB", JSON.stringify(contactsDB));
  addForm.reset();
  alert("Contact Saved Successfully!");
  window.location.href = "index.html";
};

function addContact(name, phoneNumber, email, address, favorite) {
  let contact = ``;
  if (favorite === true) {
    contact = `
  <div class = "contact favorite" id="contact">
                  <div class="contact-texts">
              <h2 class="contact-name">${name}</h2>
              <h3 class="contact-number">${phoneNumber}</h3>
              <h3 class="contact-email">${email}</h3>
              <h3 class="contact-address">${address}</h3>
            </div>
            <div class="contact-buttons">
              <button class="favorite-btn" id="favorite-btn"></button>
              <!--<button class="edit-btn"></button>-->
              <button class="delete-btn" id="delete-btn"></button>
            </div>
  </div>
`;
  } else {
    contact = `
  <div class = "contact" id="contact">
                  <div class="contact-texts">
              <h2 class="contact-name">${name}</h2>
              <h3 class="contact-number">${phoneNumber}</h3>
              <h3 class="contact-email">${email}</h3>
              <h3 class="contact-address">${address}</h3>
            </div>
            <div class="contact-buttons">
              <button class="favorite-btn" id="favorite-btn"></button>
              <!--<button class="edit-btn"></button>-->
              <button class="delete-btn" id="delete-btn"></button>
            </div>
  </div>
`;
  }

  return contact;
}
function changeMode(mode) {
  const container = document.getElementById("my-container");
  const tabs = document.getElementsByClassName("tabs");

  if (mode === "light") {
    container.style.backgroundColor = "white";
    for (let tab of tabs) {
      tab.style.backgroundColor = "#d3d3d3";
    }
  } else if (mode === "dark") {
    container.style.background = "linear-gradient(135deg, #242424, #131313)";
    for (let tab of tabs) {
      tab.style.backgroundColor = "#222222";
    }
  }
}
