const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  // ouvre le formulaire d'inscription
  $.getElementById("login").addEventListener("click", () => {
    $.querySelector(".modal").classList.add("show-modal");
    $.body.classList.add("stop-scrolling");
  });

  // ferme le formulaire d'inscription
  $.querySelector(".close-modal").addEventListener("click", () => {
    $.querySelector(".modal").classList.remove("show-modal");
    $.body.classList.remove("stop-scrolling");
  });

  // envoi du formulaire
  $.querySelector(".register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = $.getElementById("firstName").value;
    const lastName = $.getElementById("lastName").value;
    const email = $.getElementById("email").value;
    const password = $.getElementById("password").value;

    if (firstName && lastName && email && password) {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };

      const response = await axios.post(
        "https://back-tripadvisor.herokuapp.com/",
        data
      );
      console.log(response);
      if (response.status === 200) {
        alert(
          `Merci ${response.data.message.firstName} pour votre inscription.
Un email de confirmation vous a été adressé à ${response.data.message.email}`
        );
        $.querySelector(".modal").classList.remove("show-modal");
        $.body.classList.remove("stop-scrolling");
      } else {
        console.log(response);
      }
    } else {
      alert("Veuillez saisir toutes les informations demandées.");
    }
  });
});
