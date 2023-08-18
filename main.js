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
