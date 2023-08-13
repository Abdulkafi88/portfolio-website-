const chagne = document.querySelector("#change")

chagne.addEventListener("click", (e) => {
  const target = e.target
  document.body.classList.toggle("dark-theme")
  console.log(target)
})


