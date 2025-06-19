const contactContainer = document.getElementById("contacts-container");
const favoritedContainer = document.getElementById("favorited-container");
let showAddForm, addForm, nameInput, numberInput, contact, favoriteBtn;

function ShowAddForm() {
  showAddForm = document.getElementById("add-contact");
  if (showAddForm.querySelector(".add-form")) {
    return;
  }
  addForm = document.createElement("div");
  addForm.classList.add("add-form");
  addForm.innerHTML = `            <label id="alert-name-label">Enter a name</label>
  <input type="text" placeholder="Type name here" id="name-input" />
            <label id="alert-label">Enter a number</label>
            <input
              type="text"
              placeholder="Type phone number here"
              id="number-input"
            />
            <div class="add-form-buttons">
              <button onclick="addContact()"><img src="./images/check.svg" /></button>
              <button onclick="closeForm()"><img src="./images/close.svg" /></button>
            </div>`;
  showAddForm.appendChild(addForm);
}

function addContact() {
  nameInput = document.getElementById("name-input");
  numberInput = document.getElementById("number-input");
  if (nameInput.value === "") {
    let alertNameLabel = document.getElementById("alert-name-label");
    nameInput.style.border = "solid red 1px";
    alertNameLabel.style.display = "block";
  } else if (isNaN(Number(numberInput.value)) || numberInput.value === "") {
    numberInput.style.border = "solid red 1px";
    let alertLabel = document.getElementById("alert-label");
    alertLabel.style.display = "block";
  } else {
    contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = `
            <div class="contact-texts">
              <h2 class="contact-name">${nameInput.value}</h2>
              <h3 class="contact-number">${numberInput.value}</h3>
            </div>
            <div class="contact-buttons">
              <button class="favorite-btn"></button>
              <!--<button class="edit-btn"></button>-->
              <button class="delete-btn"></button>
            </div>`;

    contactContainer.appendChild(contact);
    addForm.remove();
  }
}

function closeForm() {
  addForm.remove();
}

contactContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("favorite-btn")) {
    let contactParent = e.target.closest(".contact");
    contactParent.classList.toggle("favorite");
  } else if (e.target.classList.contains("delete-btn")) {
    let contactParent = e.target.closest(".contact");
    contactParent.remove();
  }
});

let contactTabBtn = document.getElementById("contact-tab-button");
let favoriteTabBtn = document.getElementById("favorite-tab-button");

function favoriteTab() {
  const allContacts = document.querySelectorAll("#contacts-container .contact");
  allContacts.forEach((contact) => {
    if (contact.classList.contains("favorite")) {
      contact.style.display = "flex";
    } else {
      contact.style.display = "none";
    }
  });

  favoriteTabBtn.classList.add("active");
  contactTabBtn.classList.remove("active");
}

function contactsTab() {
  const allContacts = document.querySelectorAll("#contacts-container .contact");
  allContacts.forEach((contact) => {
    contact.style.display = "flex";
  });

  contactTabBtn.classList.add("active");
  favoriteTabBtn.classList.remove("active");
}
