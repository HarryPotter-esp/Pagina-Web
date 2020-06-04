window.addEventListener("keydown", caracteresPresionados,false);

veces_presionado = -1;
caracteres = [];

secciones = document.getElementsByTagName("section");

function caracteresPresionados(key) {

  veces_presionado += 1;

  console.log(key.key);
  caracteres[veces_presionado] = key.key;

  if (key.key == "r") {
    if (caracteres[veces_presionado - 1] == "Alt") {
      secciones[0].style.backgroundColor = "red";
    }
  }

  if (key.key == "g") {
    if (caracteres[veces_presionado - 1] == "Alt") {
      secciones[0].style.backgroundColor = "green";
    }
  }

  if (key.key == "w") {
    if (caracteres[veces_presionado - 1] == "Alt") {
      secciones[0].style.backgroundColor = "white";
    }
  }

}
