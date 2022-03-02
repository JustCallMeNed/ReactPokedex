import { useEffect } from "react";
import "./Pokemon.css";
import Stats from "./Stats";
import Abilities from "./Abilities";
import Moves from "./Moves";
import Evos from "./Evos";
import gsap from "gsap";

export function capFirst(foundPokemon) {
  // store "foundPokemon.split" as a variable, iterate over that variable
  let entries = foundPokemon.split("-");
  let cappedEntries = [];
  for (let entry of entries) {
    let cappedEntry = hpCaps(entry);
    cappedEntries.push(cappedEntry);
  }
  return cappedEntries.join(" ");
  // capitalizes each word, returns joined array with the dash
}

// export function joinWords() {
//   let input = Document.getElementbyId("inputBar").split(" ");
//   let inputs = [];
//   for (let input of inputs) {
//     let joinedWord = input;
//     inputs.push(joinedWord);
//   }
//   return inputs.join("-");
//   console.log(inputs);
// }

function hpCaps(entry) {
  let cappedEntry;
  if (entry === "hp") {
    cappedEntry = entry.toUpperCase();
  } else {
    cappedEntry = entry[0].toUpperCase() + entry.substring(1);
  }
  return cappedEntry;
}
//^^^ Capitalizes "HP" when rendering stat names with loop

const Pokemon = ({ foundPokemon }) => {
  let { sprites, id, order, types, species, height, weight, forms } =
    foundPokemon;
  // NOTE: moves, stats, types, abilities are arrays of objects;
  // generate html tags with the selected data

  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ delay: 0.5 }),
      gsap.from("dataContainer", { opacity: 0, ease: "rough" })
    );
  }, []);

  let originalArtworkSource = sprites.other["official-artwork"].front_default;

  return (
    <div id="dataContainer">
      <div id="spriteDisplay">
        <img id="mainArt" src={originalArtworkSource} />
        {/* <img id="mainArt" src={sprites.other.home.front_default} /> */}
        {/* <hr /> */}
        {/* Gender/Sex component goes here. Get your head out of the gutter. */}
        <div id="spriteArt">
          <img id="Default" src={sprites.front_default} />

          <img id="Shiny" src={sprites.front_shiny} />
        </div>
      </div>

      <div id="nameHeader">
        <h1 id="Species">
          {species.name === "farfetchd"
            ? "Farfetch'd"
            : species.name === "mr-mime"
            ? "Mr. Mime"
            : species.name === "mime-jr"
            ? "Mime Jr."
            : species.name === "nidoran-m"
            ? "Nidoran ♂"
            : species.name == "nidoran-f"
            ? "Nidoran ♀"
            : species.name === "ho-oh"
            ? "Ho-Oh"
            : species.name === "porygon-z"
            ? "Porygon-Z"
            : capFirst(species.name)}
        </h1>
      </div>
      {forms.length !== 1 ? <p id="formNotify">Multiple Formes</p> : null}
      <div id="dexNumDisplay">
        <h2 className="DexNumber">
          <div>Kanto: # {id}</div>

          {order === -1 ? null : <div>National: #{order}</div>}
        </h2>
      </div>
      <div id="typeDisplay">
        <h2 className="Type">
          {capFirst(types[0].type.name)}
          {types[1] ? "/" + capFirst(types[1].type.name) : null}
        </h2>
      </div>
      <div id="heightWeight">
        {height >= 10 ? (
          <div id="height">
            <p>H: {height / 10}m</p>
          </div>
        ) : (
          <div id="height">
            <p>H: {height * 10}cm</p>
          </div>
        )}
        <div id="weight">
          <p>W: {weight / 10}kg</p>
        </div>
        {/* base values for height/weight are given in decimeters/hectograms... for SOME reason. */}
      </div>
      <div id="dataDisplay">
        <Abilities foundAbilities={foundPokemon} />
        <Stats foundStats={foundPokemon} />
        {/* <Evos foundEvos={foundPokemon} /> */}
        <Moves foundMoves={foundPokemon} />
        {/* {stats.map((stat, i) => {
          return (
            <p key={i} id={"Stat" + i}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          );
        })} */}
      </div>
    </div>
  );
};
export default Pokemon;
