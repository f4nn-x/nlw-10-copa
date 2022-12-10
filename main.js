function creatGames(player1, hour, player2) {
 return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
  </li>
  `
}

let delay = -0.8;
function creatCard(date, day, games) {
  delay += 0.8;
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = 
      creatCard(
        "20/11",
        "domingo",
        creatGames("qatar", "13:00", "ecuador"))
      +
      creatCard(
        "21/11",
        "segunda",
        creatGames("england", "10:00", "iran") +
        creatGames("senegal", "13:00", "netherlands") +
        creatGames("usa", "16:00", "wales"))
      +
      creatCard(
        "22/11",
        "terça",
        creatGames("argentina", "7:00", "arabia") +
        creatGames("denmark", "10:00", "tunisia") +
        creatGames("mexico", "13:00", "poland") +
        creatGames("france", "16:00", "australia"))
      +
      creatCard(
        "23/11",
        "quarta",
        creatGames("marrocos", "7:00", "croatia") +
        creatGames("german", "10:00", "japan") +
        creatGames("spain", "13:00", "costarica") +
        creatGames("belgium", "16:00", "canada"))
      +
      creatCard(
        "24/11",
        "quinta",
        creatGames("swiss", "7:00", "camarões") +
        creatGames("uruguay", "10:00", "southkorea") +
        creatGames("portugal", "13:00", "ghana") +
        creatGames("brazil", "16:00", "serbia")
      )
      +
      creatCard(
        "25/11",
        "sexta",
        creatGames("wales", "7:00", "iran") +
        creatGames("qatar", "10:00", "senegal") +
        creatGames("netherlands", "13:00", "ecuador") +
        creatGames("england", "16:00", "usa")
      )
      +
      creatCard(
        "26/11",
        "sábado",
        creatGames("australia", "7:00", "tunisia") +
        creatGames("poland", "10:00", "arabia") +
        creatGames("france", "13:00", "denmark") +
        creatGames("argentina", "16:00", "mexico")
      )
      +
      creatCard(
        "27/11",
        "domingo",
        creatGames("japan", "7:00", "costarica") +
        creatGames("belgium", "10:00", "marrocos") +
        creatGames("croatia", "13:00", "canada") +
        creatGames("spain", "16:00", "german")
      )
      +
      creatCard(
        "28/11",
        "segunda",
        creatGames("camarões", "7:00", "serbia") +
        creatGames("southkorea", "10:00", "ghana") +
        creatGames("brazil", "13:00", "swiss") +
        creatGames("portugal", "16:00", "uruguay")
      )
      +
      creatCard(
        "29/11",
        "terça",
        creatGames("ecuador", "12:00", "senegal") +
        creatGames("netherlands", "12:00", "qatar") +
        creatGames("iran", "16:00", "usa") +
        creatGames("wales", "16:00", "england")
      )
      +
      creatCard(
        "30/11",
        "quarta",
        creatGames("tunisia", "12:00", "france") +
        creatGames("australia", "12:00", "denmark") +
        creatGames("poland", "16:00", "argentina") +
        creatGames("arabia", "16:00", "mexico")
      )
      +
      creatCard(
        "01/12",
        "quinta",
        creatGames("croatia", "12:00", "belgium") +
        creatGames("canada", "12:00", "marrocos") +
        creatGames("japan", "16:00", "spain") +
        creatGames("costarica", "16:00", "german")
      )
      +
      creatCard(
        "02/12",
        "sexta",
        creatGames("southkorea", "12:00", "portugal") +
        creatGames("ghana", "12:00", "uruguay") +
        creatGames("serbia", "16:00", "swiss") +
        creatGames("brazil", "16:00", "camarões")
      )
      +
      creatCard(
        "03/12",
        "sábado",
        creatGames("netherlands", "12:00", "usa") +
        creatGames("argentina", "16:00", "australia")
      )
      +
      creatCard(
        "04/12",
        "domingo",
        creatGames("france", "12:00", "poland") +
        creatGames("england", "16:00", "senegal")
      )
      +
      creatCard(
        "05/12",
        "segunda",
        creatGames("japan", "12:00", "croatia") +
        creatGames("brazil", "16:00", "southkorea")
      )
      +
      creatCard(
        "06/12",
        "terça",
        creatGames("marrocos", "12:00", "spain") +
        creatGames("portugal", "16:00", "swiss")
      )
      +
      creatCard(
        "09/12",
        "sexta",
        creatGames("croatia", "12:00", "brazil") +
        creatGames("netherlands", "16:00", "argentina")
      )
      +
      creatCard(
        "10/12",
        "sábado",
        creatGames("marrocos", "12:00", "portugal") +
        creatGames("england", "16:00", "france")
      )
      +
      creatCard(
        "13/12",
        "terça",
        creatGames("argentina", "16:00", "croatia")
      )