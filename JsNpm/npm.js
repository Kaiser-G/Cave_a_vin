// Import SweetAlert
import Swal from "../npm/node_modules/sweetalert2/src/sweetalert2.js";
//apparait a l'ouverture du site
window.addEventListener("load", () => {
  Swal.fire({
    title: "Bonjour",
    text: "Voulez-vous continuer ?",
    icon: "Erreur",
    confirmButtonText: "Oui",
  });
  //Sur le bouton enregistré du bouton nouveau
  let btnNouvEnr = document.getElementById("btnAjoutEnreg");
  btnNouvEnr.addEventListener("click", () => {
    let timerInterval;
    Swal.fire({
      title: "Création en cours !",
      html: "Temps restant <b></b> milliseconds.",
      timer: 4000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  });
  //sur le bouton de enregistré modif
  let btnEnr = document.getElementById("btnModifEnreg");
  btnEnr.addEventListener(
    "click",
    () => {
      Swal.fire({
        title: "Modification enregistrée",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    },
    false
  );
  //Sur le bouton supprimé
  let btnSupp = document.getElementById("btnSupprOui");
  btnSupp.addEventListener(
    "click",
    () => {
      Swal.fire({
        title: "Confirmez la suppression ?",
        text: "Toute suppression est définitive !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprimer !",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Supprimé !",
            text: "La voiture a été supprimée.",
            icon: "success",
          });
        }
      });
    },
    false
  );
});
