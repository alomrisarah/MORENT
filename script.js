document.addEventListener("DOMContentLoaded", function () {
 // Function to load content into a placeholder
 function loadContent(elementId, url) {
  fetch(url)
   .then((response) => {
    if (!response.ok) {
     throw new Error(`Failed to load ${url}: ${response.statusText}`)
    }
    return response.text()
   })
   .then((data) => {
    document.getElementById(elementId).innerHTML = data
   })
   .catch((error) => {
    document.getElementById(elementId).innerHTML = `<p>Error loading content: ${error.message}</p>`
   })
 }

 // Load content into placeholders
 loadContent("navbar-placeholder", "nav.html")
 loadContent("footer-placeholder", "footer.html")
 loadContent("form-placeholder", "select.html")
})

/////////////////////////
function scrollPage() {
 const scrollButton = document.getElementById("scrollButton")
 const scrollButtonContainer = document.querySelector(".scroll-button-container")
 let scrollDown = true
 if (scrollDown) {
  window.scrollTo({
   top: document.body.scrollHeight,
   behavior: "smooth",
  })
  scrollButton.innerText = "Up"
  scrollButtonContainer.style.position = "fixed"
  scrollButtonContainer.style.bottom = "20px"
  scrollButtonContainer.style.left = "95%"
  scrollButtonContainer.style.transform = "translateX(-50%)"
 } else {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  })
  scrollButton.innerText = "Scroll Down"
  scrollButtonContainer.style.position = ""
  scrollButtonContainer.style.bottom = ""
  scrollButtonContainer.style.left = ""
  scrollButtonContainer.style.transform = ""
 }
 scrollDown = !scrollDown
}

