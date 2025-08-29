// Mega Menu JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const sidebarItems = document.querySelectorAll(".mega-menu-sidebar ul li");
  const contentSections = document.querySelectorAll(".mega-menu-content");

  if (sidebarItems.length > 0) {
    sidebarItems[0].classList.add("active");
    const mobileContent = document.querySelector(".mega-menu-content-mobile");
    if (mobileContent) {
      mobileContent.classList.add("active");
      mobileContent.style.display = "flex";
    }
  }

  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      const contentType = this.getAttribute("data-content");

      sidebarItems.forEach((sidebarItem) => {
        sidebarItem.classList.remove("active");
      });

      this.classList.add("active");

      contentSections.forEach((section) => {
        section.classList.remove("active");
        section.style.display = "none";
      });

      if (contentType) {
        const targetContent = document.querySelector(
          `.mega-menu-content-${contentType}`
        );
        if (targetContent) {
          targetContent.classList.add("active");
          targetContent.style.display = "flex";
        }
      }
    });
  });

  sidebarItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const contentType = this.getAttribute("data-content");

      sidebarItems.forEach((sidebarItem) => {
        sidebarItem.classList.remove("active");
      });

      this.classList.add("active");

      contentSections.forEach((section) => {
        section.classList.remove("active");
        section.style.display = "none";
      });

      if (contentType) {
        const targetContent = document.querySelector(
          `.mega-menu-content-${contentType}`
        );
        if (targetContent) {
          targetContent.classList.add("active");
          targetContent.style.display = "flex";
        }
      }
    });
  });
});
