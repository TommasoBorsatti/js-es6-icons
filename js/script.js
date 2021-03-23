

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const Icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];


// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// definisco il target dove andare a iniettare l html:
const Target = $(".icons");

// destrutturo:
const {name, family, prefix, category} = Icons;

// uso for each come un ciclo for per ciclare Icons e iniettare tutte le icone nel target:

Icons.forEach((icon, index) => {

  //scrivo l html da inserire con destrutturazione e literal template:

  const Html =
  `<div>
    <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
    <div class="title">${icon.name}</div>
  </div>`

  Target.append(Html);
});


// Milestone 2
// Coloriamo le icone per tipo

// Provo il processo per associazione; definisco un array di elementi in cui associo categoria a colore.

const Colors = [

  { category: food,
    color: #ff008d
  },
  { category: food,
    color: 	#d14eea
  },
  { category: food,
    color: #f96363
  },

];
