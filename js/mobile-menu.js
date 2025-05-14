document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".e-u-navigation-list");
  const headerRef = document.querySelector(".e-u-header");
  const navigationRef = document.querySelector(".e-u-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".e-u-navigation-link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    })
  );
});
document.addEventListener("DOMContentLoaded", () => {
  const galleryList = document.querySelector(".e-u-gallery-list");
  const items = galleryList.querySelectorAll(".e-u-gallery-item");
  const button = document.getElementById("show-more-btn");

  items.forEach((item, index) => {
    if (index < 3) {
      item.classList.add("visible");
    }
  });

  button.addEventListener("click", () => {
    items.forEach((item) => item.classList.add("visible"));
    button.style.display = "none";
  });
});
const images = document.querySelectorAll(".e-u-gallery-image");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay-image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    overlayImage.src = image.src;
    overlay.classList.remove("hidden");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".e-u-toggle-button img");

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    buttonImg.style.transform = "rotate(45deg)";
  } else {
    answer.style.display = "none";
    buttonImg.style.transform = "rotate(90deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    popup.style.display = "block";
  }

  acceptButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    popup.style.display = "none";
  };

  declineButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    popup.style.display = "none";
  };
});
