import "./style.scss";
// main.js

const tabButtons = document.querySelectorAll(".nav_link");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const tabId = button.getAttribute("data-tab");

    tabs.forEach((tab) => {
      tab.style.display = "none";
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "block";

    tabButtons.forEach((btn) => {
      btn.classList.remove("active-tab");
    });

    button.classList.add("active-tab");
  });
});

document.addEventListener("click", (event) => {
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  tabButtons.forEach((btn) => {
    btn.classList.remove("active-tab");
  });
});

const searchInput = document.querySelector(".search");
const searchIcon = document.querySelector(".search_Icon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    // Enter key code
    searchInput.classList.remove("active");
  }
});

// Hide search input when clicking outside
document.addEventListener("click", (event) => {
  if (
    !searchInput.contains(event.target) &&
    !searchIcon.contains(event.target)
  ) {
    searchInput.classList.remove("active");
  }
});

// Mobile toggle
const toggleButton = document.getElementById("togglebtn");
const sidebar = document.querySelector(".mobile_view_sideBar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active_sidebar");
});

// Toggle Mobile sub-dropdown
const mainItems = document.querySelectorAll(".main_item");
const subItems = document.querySelectorAll(".sub-item");

mainItems.forEach((mainItem, index) => {
  mainItem.addEventListener("click", function () {
    subItems[index].classList.toggle("active");
  });
});
