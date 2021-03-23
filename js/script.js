
// FUNZIONI & RISORSE DI PARTENZA

// 1)- Funzione
// Qui vado a definire una funzione con cui poi andrò ogni volta a scrivere e iniettare l'html che rappresenta le mie icone.
// Provo a definirla come funzione a 2 argomenti/parametri: l'array da ciclare con il foreach, e il target su cui iniettare l html con append.

function iconizer(array,target) {

  return array.forEach((icon) => {

    //destrutturo!
    const {name, family, prefix, category} = array;

    //scrivo l html da inserire con destrutturazione e literal template:

    const Html =
    `<div>
      <i style="color:${icon.color};" class="${icon.family} ${icon.prefix}${icon.name}"></i>
      <div class="title">${icon.name}</div>
    </div>`

    target.append(Html);
  });

};

// 2)- Funzione
// Mi invento una funzione Cancel per cancellare l'Html: ho visto che è un procedimento che ripeto spesso a ogni scelta:

function cancel(target) {
  target.html("");
}

//Questo è l'Array Icons di partenza.
const Icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
];

//------------------------------------------------------------------------------
// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//------------------------------------------------------------------------------

// definisco il target dove andare a iniettare l html:
const Target = $(".icons");

// destrutturo:
const {name, family, prefix, category} = Icons;

/* VECCHIO METODO

uso for each come un ciclo for per ciclare Icons e iniettare tutte le icone nel target:

Icons.forEach((icon) => {

  //scrivo l html da inserire con destrutturazione e literal template:

  const Html =
  `<div>
    <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
    <div class="title">${icon.name}</div>
  </div>`

  Target.append(Html);
});
*/

// TUTTO QUELLO CHE HO SCRITTO PRIMA PU0' ESSERE RIASSUNTO NELLA FUNZIONE FATTA AD HOC:

iconizer(Icons, Target);

//------------------------------------------------------------------------------
// Milestone 2
// Coloriamo le icone per tipo

// Provo il processo per associazione; definisco un array di elementi in cui associo categoria a colore.

const Colors = [
  { category: "Food",
    color: "red"
  },
  { category: "Beverage",
    color: 	"violet"
  },
  { category: "Animals",
    color: "purple"
  },
];

//Assegno le categorie e i colori di Colors a delle variabili per utilizzo futuro:

//???????????????????


// Uso Map per creare un nuovo array di icone colorate a partire da Icons; lo chiamo ColorIcons:

const ColorIcons = Icons.map((icon) => {

  // I colori gli assegno con un if / else if / else in attesa di ricordarmi il metodo più corretto.
  if (icon.category == "Food") {
    icon.color = "#ff008d";
  } else if (icon.category == "Beverage") {
    icon.color = "#d14eea"
  } else {
    icon.color = "#f96363"
  }
  return icon;
});

// Cancello l'html incollato a Target; questo mi servirà dopo, per la modularità dovuta alle options della select. Uso la funzione Cancel:

cancel(Target);

/* METODO SENZA FUNZIONE
uso Append per sostituire le ColorIcons alle Icons;

ColorIcons.forEach((icon) => {

  //scrivo l html da inserire con destrutturazione e literal template:

  const Html =
  `<div>
    <i style="color:${icon.color};" class="${icon.family} ${icon.prefix}${icon.name}"></i>
    <div class="title">${icon.name}</div>
  </div>`

  Target.append(Html);
});
*/

// USO DI NUOVO LA FUNZIONE ICONIZER PER EVITARE DI RISCRIVERE TUTTO:

iconizer(ColorIcons, Target);

//------------------------------------------------------------------------------
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

//Con for each e includes individuo tutte le categorie di ColorIcons e le inserisco in un Array Categories.
const Categories =[];

ColorIcons.forEach((icon) => {
 if (!Categories.includes(icon.category)) {
   Categories.push(icon.category);
 }
});

// Con for each ciclo tutto l'array Categories e scrivo un Html per ciascuna option della select, posizionandolo infine con append.
Categories.forEach((option) => {

  // Con Template Literal creo l'HTML per le option da aggiungere alla select:
  const Html = `<option value="${option}">${option}</option>`;

  $("#type").append(Html);
});

// Inizializzo l'evento al Change della select; non posso usare un Arrow Function per via del fatto che mi assocerebbe This al Document:
$("#type").change( function() {
  console.log($(this).val());

  // cancello l'Html usando Cancel:
    cancel(Target);

  // Prima devo necessariamente aggiungere una condizione IF che alla scelta di All, rimetta tutta l'icone dentro; Uso la funzione Iconizer.
  if ($(this).val() == "") {

    iconizer(ColorIcons, Target);

  } else {

    // ora devo associare il Filter alla scelta della Categoria; per prima cosa inizializzo variabile SelectedIcons e vado a usare Filter su ColorIcons.
    const SelectedIcons = ColorIcons.filter((icon) => {
      return icon.category == $(this).val();
    });

    // Ora eseguo lo stesso comando di prima ciclando su SelectedIcons invece che ColorIcons. Uso Iconizer per fare ovviamente prima.

    iconizer(SelectedIcons, Target);

  }

});
