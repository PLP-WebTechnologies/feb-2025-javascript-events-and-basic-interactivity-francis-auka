// 1. Button click changes color
document.getElementById("colorButton").addEventListener("click", function () {
    this.style.backgroundColor = "purple";
    this.textContent = "Color Changed!";
  });
  
  // 2. Image gallery
  const images = [
    "https://via.placeholder.com/300/ff7f7f",
    "https://via.placeholder.com/300/7fffd4",
    "https://via.placeholder.com/300/87ceeb"
  ];
  let currentIndex = 0;
  document.getElementById("nextImage").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentIndex];
  });
  
  // 3. Accordion
  document.querySelector(".accordion-btn").addEventListener("click", () => {
    const content = document.querySelector(".accordion-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
  
  // 4. Keypress detection
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyOutput").textContent = `You pressed: ${e.key}`;
  });
  
  // 5. Form validation
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
      e.preventDefault();
      alert("Password must be at least 8 characters long!");
    }
  });
  