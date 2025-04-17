const form = document.querySelector("#cardForm");
const cardContainer = document.querySelector(".card-container");
const name = document.querySelector(".card-text").innerHTML;
const desc = document.querySelector(".card-description").innerHTML;
const price = document.querySelector(".card-title").innerHTML;




form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Input values
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const phone = document.getElementById("phoneNumber").value;
  const desc = document.getElementById("productDesc").value;
  const image = document.getElementById("productImage").files[0];

  // Card HTML (with data-phone attribute)
  const cardHTML = `
    <div class="card shadow mb-4 bg-body-tertiary rounded" style="width: 18rem;" data-phone="${phone}">
      <img src="${URL.createObjectURL(image)}" alt="Product Image">
      <div class="card-body d-flex flex-column justify-content-evenly">
        <h5 class="card-title">Rs: ${price} PKR</h5>
        <p class="card-text fw-bold">${name}</p>
        <p class="card-description">${desc}</p>
        <a href="#" class="btn align-text-bottom btn-outline-success">Contact On Whatsapp</a>
      </div>
    </div>
  `;

  cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  form.reset();

  const modal = bootstrap.Modal.getInstance(document.getElementById("staticBackdrop"));
  modal.hide();
});



let wsBtn = document.querySelector(".wsBtn")
wsBtn.addEventListener("click", () => {
  const message = `Assalamualaikum!\n Mujhe yeh product chahiye:\n\n*${name}*\n${desc}\nPrice: ${price}`;
  const encodedMsg = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/923343688913?text=${encodedMsg}`;
  window.open(whatsappURL, '_blank');
})



// WhatsApp Button Click Listener (using Event Delegation)
if (cardContainer) {
  cardContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-outline-success")) {
      e.preventDefault();

      const card = e.target.closest(".card");
      const phone = card.getAttribute("data-phone");
      const cardPrice = card.querySelector(".card-title").innerText;
      const cardName = card.querySelector(".card-text").innerText;
      const cardDesc = card.querySelector(".card-description").innerText;

      const message = `Assalamualaikum!\n Mujhe yeh product chahiye:\n\n*${cardName}*\n${cardDesc}\nPrice: ${cardPrice}`;
      const encodedMsg = encodeURIComponent(message);

      const whatsappURL = `https://wa.me/92${phone}?text=${encodedMsg}`;
      window.open(whatsappURL, '_blank');
    }
  });
}