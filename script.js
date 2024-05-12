const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "yeayyyy yeayy ayok mainn";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
  
  // Tambahkan tombol baru setelah tombol "yes" ditekan
  const newButton = document.createElement("button");
  newButton.textContent = "klik inii!!!";
  newButton.classList.add("new-btn");
  newButton.addEventListener("click", () => {
    // Tindakan yang ingin dilakukan saat tombol baru ditekan
    console.log("Tombol baru ditekan!");
    // Contoh tindakan tambahan:
    window.location.href = "https://www.wa.link/qz75ji"; // Mengarahkan ke halaman web lain
  });

  wrapper.appendChild(newButton);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
