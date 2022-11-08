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
        creatGames("portugal", "13:00", "ghana") +
        creatGames("brazil", "16:00", "serbia")
      )
      +
      creatCard(
        "25/11",
        "sexta",
        creatGames("netherlands", "13:00", "ecuador") +
        creatGames("england", "16:00", "usa")
      )
      +
      creatCard(
        "28/11",
        "segunda",
        creatGames("brazil", "13:00", "swiss") +
        creatGames("portugal", "16:00", "uruguay")
      )