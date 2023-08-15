const chagne = document.querySelector("#change")
const randomImgContainer = document.querySelector(".left-about")
const btnBackground = document.querySelector(".right-about .btn-main")
const btnBackground2 = document.querySelector(".form  .btn-submit")
const service = document.querySelectorAll(".service")
chagne.addEventListener("click", (e) => {
  const target = e.target
  document.body.classList.toggle("dark-theme")
  if (target) {
    btnBackground.style.backgroundColor = "#27ae60"
    btnBackground.style.color = "white"
    btnBackground2.style.backgroundColor = "#27ae60"
    btnBackground2.style.color = "white"
   service.forEach(items => {
    
   });
  }
  console.log()
})

