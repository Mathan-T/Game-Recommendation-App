import React, { useState } from "react";
import "./styles.css";

var gamesDB = {
  All: [
    { Name: "Grand Theft Auto V", Rating: "10/10" },
    { Name: "Batman, Arkham Knight", Rating: "10/10" },
    { Name: "Cyberpunk 2077", Rating: "9/10" },
    { Name: "Assasins Creed Valhalla", Rating: "8/10" },
    { Name: "Doom Eternal", Rating: "7.5/10" },
    { Name: "The Last of US Part 2", Rating: "10/10" },
    { Name: "Spider-Man: Miles Morales", Rating: "9/10" },
    { Name: "Yakuza: Like a Dragon", Rating: "9/10" },
    { Name: "Marvel's Avengers", Rating: "8.5/10" },
    { Name: "Final Fantasy VII Remake", Rating: "8/10" },
    { Name: "PlayerUnknown's Battlegrounds", Rating: "10/10" },
    { Name: "Fortnite", Rating: "10/10" },
    { Name: "Apex Legends", Rating: "9/10" },
    { Name: "Valorant", Rating: "9/10" },
    { Name: "Call of Duty: Warzone", Rating: "8/10" },
    { Name: "FIFA 21", Rating: "10/10" },
    { Name: "NBA 2K21", Rating: "10/10" },
    { Name: "Mutant Football League", Rating: "9/10" },
    { Name: "Rocket League", Rating: "8/10" },
    { Name: "Tony Hawk's Pro Skater 1+2", Rating: "7/10" }
  ],
  Action: [
    { Name: "Grand Theft Auto V", Rating: "10/10" },
    { Name: "Batman, Arkham Knight", Rating: "10/10" },
    { Name: "Cyberpunk 2077", Rating: "9/10" },
    { Name: "Assasins Creed Valhalla", Rating: "8/10" },
    { Name: "Doom Eternal", Rating: "7.5/10" }
  ],
  Adventure: [
    { Name: "The Last of US Part 2", Rating: "10/10" },
    { Name: "Spider-Man: Miles Morales", Rating: "9/10" },
    { Name: "Yakuza: Like a Dragon", Rating: "9/10" },
    { Name: "Marvel's Avengers", Rating: "8.5/10" },
    { Name: "Final Fantasy VII Remake", Rating: "8/10" }
  ],
  BattleRoyale: [
    { Name: "PlayerUnknown's Battlegrounds", Rating: "10/10" },
    { Name: "Fortnite", Rating: "10/10" },
    { Name: "Apex Legends", Rating: "9/10" },
    { Name: "Valorant", Rating: "9/10" },
    { Name: "Call of Duty: Warzone", Rating: "8/10" }
  ],
  Sports: [
    { Name: "FIFA 21", Rating: "10/10" },
    { Name: "NBA 2K21", Rating: "10/10" },
    { Name: "Mutant Football League", Rating: "9/10" },
    { Name: "Rocket League", Rating: "8/10" },
    { Name: "Tony Hawk's Pro Skater 1+2", Rating: "7/10" }
  ]
};

export default function App() {
  var [selectedCategory, setCategory] = useState("All");
  function ClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1>🎮 Game(R)ecommender 🎮</h1>
      <h3>The best 20 modern PC games in four categories to play right now!</h3>
      <p>
        Will be updating the database with more games and categories soon....
      </p>
      <hr></hr>
      <div>
        {Object.keys(gamesDB).map((category) => (
          <button onClick={() => ClickHandler(category)}>{category}</button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gamesDB[selectedCategory].map((game) => (
            <li key={game.Name}>
              <div style={{ fontSize: "larger" }}>{game.Name}</div>
              <div style={{ fontSize: "larger" }}>{game.Rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
