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
        "23/11",
        "quarta",
        creatGames("german", "10:00", "japan") +
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