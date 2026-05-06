function search() {/*for search*/
  let input = document.querySelector(".searching").value.toLowerCase();
  
  let sections = document.querySelectorAll('.fantasy, .history, .psychology, .best-seller');

  sections.forEach(section => {
    let cards = section.querySelectorAll(".book-card");
    let hasVisibleCards = false;

    cards.forEach(card => {
      let title = card.querySelector(".photo-info").textContent.toLowerCase();
      
      if (title.includes(input)) {
        card.style.display = ""; 
        hasVisibleCards = true; 
      } else {
        card.style.display = "none";
      }
    });

    let header = section.previousElementSibling; 
    
    if (hasVisibleCards) {
      section.style.display = "grid";
      if (header) header.style.display = "flex";
    } else {
      section.style.display = "none";
      if (header) header.style.display = "none";
    }
  });
}

let themeBtn = document.getElementById("theme-chnger");/*for theme8*/

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}


themeBtn.onclick = function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
};