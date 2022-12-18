function creatGames(player1, hour, player2, placar, rodada) {
 return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
  </li>
  <h1>
      <strong>${placar}</strong>
  </h1>
  <p>${rodada}</p>
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
    creatGames("qatar", "13:00", "ecuador", "0 x 2", "fase de grupos")
  ) +
  creatCard(
    "21/11",
    "segunda",
    creatGames("england", "10:00", "iran", "6 x 2", "fase de grupos") +
      creatGames("senegal", "13:00", "netherlands", "0 x 2", "fase de grupos") +
      creatGames("usa", "16:00", "wales", "1 x 1", "fase de grupos")
  ) +
  creatCard(
    "22/11",
    "terça",
    creatGames("argentina", "7:00", "arabia", "1 x 2", "fase de grupos") +
      creatGames("denmark", "10:00", "tunisia", "0 x 0", "fase de grupos") +
      creatGames("mexico", "13:00", "poland", "0 x 0", "fase de grupos") +
      creatGames("france", "16:00", "australia", "4 x 1", "fase de grupos")
  ) +
  creatCard(
    "23/11",
    "quarta",
    creatGames("marrocos", "7:00", "croatia", "0 x 0", "fase de grupos") +
      creatGames("german", "10:00", "japan", "1 x 2", "fase de grupos") +
      creatGames("spain", "13:00", "costarica", "7 x 0", "fase de grupos") +
      creatGames("belgium", "16:00", "canada", "1 x 0", "fase de grupos")
  ) +
  creatCard(
    "24/11",
    "quinta",
    creatGames("swiss", "7:00", "camarões", "1 x 0", "fase de grupos") +
      creatGames("uruguay", "10:00", "southkorea", "0 x 0", "fase de grupos") +
      creatGames("portugal", "13:00", "ghana", "3 x 2", "fase de grupos") +
      creatGames("brazil", "16:00", "serbia", "2 x 0", "fase de grupos")
  ) +
  creatCard(
    "25/11",
    "sexta",
    creatGames("wales", "7:00", "iran", "0 x 2", "fase de grupos") +
      creatGames("qatar", "10:00", "senegal", "1 x 3", "fase de grupos") +
      creatGames("netherlands", "13:00", "ecuador", "1 x 1", "fase de grupos") +
      creatGames("england", "16:00", "usa", "0 x 0", "fase de grupos")
  ) +
  creatCard(
    "26/11",
    "sábado",
    creatGames("australia", "7:00", "tunisia", "1 x 0", "fase de grupos") +
      creatGames("poland", "10:00", "arabia", "2 x 0", "fase de grupos") +
      creatGames("france", "13:00", "denmark", "2 x 1", "fase de grupos") +
      creatGames("argentina", "16:00", "mexico", "2 x 0", "fase de grupos")
  ) +
  creatCard(
    "27/11",
    "domingo",
    creatGames("japan", "7:00", "costarica", "0 x 1", "fase de grupos") +
      creatGames("belgium", "10:00", "marrocos", "0 x 2", "fase de grupos") +
      creatGames("croatia", "13:00", "canada", "4 x 1", "fase de grupos") +
      creatGames("spain", "16:00", "german", "1 x 1", "fase de grupos")
  ) +
  creatCard(
    "28/11",
    "segunda",
    creatGames("camarões", "7:00", "serbia", "3 x 3", "fase de grupos") +
      creatGames("southkorea", "10:00", "ghana", "2 x 3", "fase de grupos") +
      creatGames("brazil", "13:00", "swiss", "1 x 0", "fase de grupos") +
      creatGames("portugal", "16:00", "uruguay", "2 x 0", "fase de grupos")
  ) +
  creatCard(
    "29/11",
    "terça",
    creatGames("ecuador", "12:00", "senegal", "1 x 2", "fase de grupos") +
      creatGames("netherlands", "12:00", "qatar", "2 x 0", "fase de grupos") +
      creatGames("iran", "16:00", "usa", "0 x 1", "fase de grupos") +
      creatGames("wales", "16:00", "england", "0 x 3", "fase de grupos")
  ) +
  creatCard(
    "30/11",
    "quarta",
    creatGames("tunisia", "12:00", "france", "1 x 0", "fase de grupos") +
      creatGames("australia", "12:00", "denmark", "1 x 0", "fase de grupos") +
      creatGames("poland", "16:00", "argentina", "0 x 2", "fase de grupos") +
      creatGames("arabia", "16:00", "mexico", "1 x 2", "fase de grupos")
  ) +
  creatCard(
    "01/12",
    "quinta",
    creatGames("croatia", "12:00", "belgium", "0 x 0", "fase de grupos") +
      creatGames("canada", "12:00", "marrocos", "1 x 2", "fase de grupos") +
      creatGames("japan", "16:00", "spain", "2 x 1", "fase de grupos") +
      creatGames("costarica", "16:00", "german", "2 x 4", "fase de grupos")
  ) +
  creatCard(
    "02/12",
    "sexta",
    creatGames("southkorea", "12:00", "portugal", "2 x 1", "fase de grupos") +
      creatGames("ghana", "12:00", "uruguay", "0 x 2", "fase de grupos") +
      creatGames("serbia", "16:00", "swiss", "2 x 3", "fase de grupos") +
      creatGames("brazil", "16:00", "camarões", "0 x 1", "fase de grupos")
  ) +
  creatCard(
    "03/12",
    "sábado",
    creatGames("netherlands", "12:00", "usa", "3 x 1", "oitavas de final") +
      creatGames("argentina", "16:00", "australia", "2 x 1", "oitavas de final")
  ) +
  creatCard(
    "04/12",
    "domingo",
    creatGames("france", "12:00", "poland", "3 x 1", "oitavas de final") +
      creatGames("england", "16:00", "senegal", "3 x 0", "oitavas de final")
  ) +
  creatCard(
    "05/12",
    "segunda",
    creatGames("japan", "12:00", "croatia", "1(1) x 1(3)", "oitavas de final") +
      creatGames("brazil", "16:00", "southkorea", "4 x 1", "oitavas de final")
  ) +
  creatCard(
    "06/12",
    "terça",
    creatGames("marrocos", "12:00", "spain", "0(3) x 0(0)", "oitavas de final") +
      creatGames("portugal", "16:00", "swiss", "6 x 1", "oitavas de final")
  ) +
  creatCard(
    "09/12",
    "sexta",
    creatGames("croatia", "12:00", "brazil", "1(4) x 1(2)", "quartas de final") +
      creatGames("netherlands", "16:00", "argentina", "2(3) x 2(4)", "quartas de final")
  ) +
  creatCard(
    "10/12",
    "sábado",
    creatGames("marrocos", "12:00", "portugal", "1 x 0", "quartas de final") +
      creatGames("england", "16:00", "france", "1 x 2", "quartas de final")
  ) +
  creatCard(
    "13/12", 
    "terça", 
    creatGames("argentina", "16:00", "croatia", "3 x 0", "semi-final")
  ) +
  creatCard(
    "14/12", 
    "quarta", 
    creatGames("france", "16:00", "marrocos", "2 x 0", "semi-final")
  ) +
  creatCard(
    "17/12",
    "sábado",
    creatGames("croatia", "12:00", "marrocos", "2 x 1", "decisão para o terceiro colocado")
  ) +
  creatCard(
    "18/12",
    "domingo",
    creatGames("argentina", "12:00", "france", "3(4) x 3(2)", "final da Copa do Mundo no Qatar - Argentina campeã e grande jogo da França")
  )