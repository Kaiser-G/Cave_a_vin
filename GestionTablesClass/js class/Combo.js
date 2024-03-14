class Combo {
  id_zone = "";
  id_select = "";
  class_select = "";
  data = "";
  fonction_change = "";

  //methode generer
  generer() {
    if (this.id_zone != "") {
      let code_generer = document.createElement("select");

      if (this.id_select != "") {
        code_generer.id = this.id_select;
        // document.createElement("option").appendChild(code_generer.id_select);
      }
      if (this.class_select != "") {
        code_generer.className = this.class_select;
      }
      if (this.data != "") {
        this.data.forEach((value) => {
          let option = document.createElement("option");
          option.innerHTML = value[1];
          option.value = value[0];
          code_generer.appendChild(option);
        });
      }

      //Interception de l'évènement CHANGE (si une fonction est prévue par l'utilisateur)
      if (typeof this.fonction_change == "function") {
        code_generer.addEventListener("change", this.fonction_change, false);
      }

      document.getElementById(this.id_zone).appendChild(code_generer);
    } else {
      throw new Error(
        "Pour générer un Link, il faut préciser la proprieté id_zone"
      );
    }
  }
}
