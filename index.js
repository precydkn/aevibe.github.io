//===== shop-by-dropdown functions =====
// get dropdown divs
var shopByContainer = document.querySelector(".shop-by-container"),
    shopBy = document.querySelector(".shop-by-dropdown"),
    era = document.querySelector(".shop-by-dropdown-era"),
    member = document.querySelector(".shop-by-dropdown-member");

// ensure that the shopByContainer ("Era Member" dropdown) hover effect is working after the funcs below has been run
shopByContainer.onmouseenter = function() {
    shopBy.style.display = "flex";
}
shopByContainer.onmouseleave = function() {
    shopBy.style.display = "none";
}

// func to display the era dropdown
function displayEra() {
    shopBy.style.display = "none"; // Hide the main dropdown
    era.style.display = "block"; // Show the "Era" submenu

    // Hide submenu when mouse leaves
    era.onmouseleave = function() {
        era.style.display = "none"; // Hide the "Era" submenu
    };
}

// func to display the member dropdown
function displayMember() {
    shopBy.style.display = "none"; // Hide the main dropdown
    member.style.display = "grid"; // Show the "Member" submenu

    // Hide submenu when mouse leaves
    member.onmouseleave = function() {
        member.style.display = "none"; // Hide the "Member" submenu
    };
}