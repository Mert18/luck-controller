import React from "react";
import { Link } from "react-router-dom";

interface GameType {
  id: number;
  title: string;
  chance: number;
  slug: string;
}

const games: GameType[] = [
  {
    id: 1,
    title: "Floating Bubbles",
    chance: 50,
    slug: "floating-bubbles",
  },
  {
    id: 2,
    title: "Floating Bubbles",
    chance: 50,
    slug: "floating-bubbles",
  },
  {
    id: 3,
    title: "Floating Bubbles",
    chance: 50,
    slug: "floating-bubbles",
  },
  {
    id: 4,
    title: "Floating Bubbles",
    chance: 50,
    slug: "floating-bubbles",
  },
  {
    id: 5,
    title: "Floating Bubbles",
    chance: 50,
    slug: "floating-bubbles",
  },
];

const ListOfGames = () => {
  return (
    <div className="listofgames">
      <ul className="games">
        {games.map((game) => (
          <li key={game.id} className="game">
            <Link to={`/${game.slug}`}>
              <h3>{game.title}</h3>
              <p>{game.chance}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfGames;
