const botones = document.querySelectorAll(".class-button");
const imagen = document.getElementById("classImage");
const Titulo = document.getElementById("classTitle");
const descripcion = document.getElementById("classText");

const contenidos = [
    { imagen: "Images/Clases/Fighter.png", titulo: "Fighter", descripcion: "Textos/Clases/fighter.txt" },
    { imagen: "Images/Clases/Paladin.png", titulo: "Paladin", descripcion: "Textos/Clases/paladin.txt" },
    { imagen: "Images/Clases/Druid.png", titulo: "Druid", descripcion: "Textos/Clases/druid.txt" },
    { imagen: "Images/Clases/Barbarian.png", titulo: "Barbarian", descripcion: "Textos/Clases/barbarian.txt" },
    { imagen: "Images/Clases/Cleric.png", titulo: "Cleric", descripcion: "Textos/Clases/cleric.txt" },
    { imagen: "Images/Clases/Wizard.png", titulo: "Wizard", descripcion: "Textos/Clases/wizard.txt" },
    { imagen: "Images/Clases/Rogue.png", titulo: "Rogue", descripcion: "Textos/Clases/rogue.txt" },
    { imagen: "Images/Clases/Artificer.png", titulo: "Artificer", descripcion: "Textos/Clases/artificer.txt" },
    { imagen: "Images/Clases/Sorcerer.png", titulo: "Sorcerer", descripcion: "Textos/Clases/sorcerer.txt" },
    { imagen: "Images/Clases/Monk.png", titulo: "Monk", descripcion: "Textos/Clases/monk.txt" },
    { imagen: "Images/Clases/Ranger.png", titulo: "Ranger", descripcion: "Textos/Clases/ranger.txt" },
    { imagen: "Images/Clases/Warlock.png", titulo: "Warlock", descripcion: "Textos/Clases/warlock.txt" },
];

async function cambiarContenido(index) {
    const item = contenidos[index];

    imagen.src = item.imagen;
    Titulo.textContent = item.titulo;

    const response = await fetch(item.descripcion);
    const texto = await response.text();

    descripcion.textContent = texto;
}

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        cambiarContenido(index);
    });
});