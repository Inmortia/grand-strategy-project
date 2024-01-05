import { chooseAndRemoveCounty } from './helpers/chooseAndRemove.js'

const strategy = () => {
  const map = document.getElementById("map")
  const counties = ["Albacete",
  "Alicante",
  "Almería",
  "Araba",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Illes Balears",
  "Barcelona",
  "Bizkaia",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ciudad Real",
  "Córdoba",
  "A Coruña",
  "Cuenca",
  "Gipuzkoa",
  "Girona",
  "Granada",
  "Guadalajara",
  "Huelva",
  "Huesca",
  "Jaén",
  "León",
  "Lleida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Murcia",
  "Navarra",
  "Ourense",
  "Palencia",
  "Las Palmas",
  "Pontevedra",
  "La Rioja",
  "Salamanca",
  "Santa Cruz de Tenerife",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Zamora",
  "Zaragoza",
  "Ceuta",
  "Melilla"]

  const onClickShowName = (event) => {
    const county = event.target
    const countyTitle = county.title
    document.getElementById('properties').style.visibility = 'visible'
    document.getElementsByClassName('county_name')[0].innerHTML = countyTitle
  }

  const generateMap = (rows, cols) => {
    // 5 rows 5 cols
    for (let i = 0; i < rows*cols; i++) {
      console.log('Here')
      const container = map.appendChild(document.createElement('div'))
      container.classList.add('county')
      const county = chooseAndRemoveCounty(counties)
      container.setAttribute('data-county', county)
      container.setAttribute('title', county)
      container.addEventListener('click', onClickShowName)
    }
  }

  return {
    generateMap,
  }
}

const game = strategy()

game.generateMap(5,5)