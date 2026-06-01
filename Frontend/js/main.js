const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {

    searchInput.style.width = "220px";
    searchInput.style.opacity = "1";
    searchInput.style.padding = "10px 15px";

    searchInput.focus();

});

searchInput.addEventListener("blur", () => {

    if (searchInput.value === "") {

        searchInput.style.width = "0";
        searchInput.style.opacity = "0";
        searchInput.style.padding = "10px 0";

    }

});