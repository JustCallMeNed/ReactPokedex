import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon/Pokemon";
// import { Howl, Howler } from "howler";
import gsap from "gsap";

// gsap.registerPlugin(TextPlugin);

// const dexLoad = new Howl({
//   src: ["./src/assets/sounds/SFX_DEX_PAGE_ADDED.wav"],
//   volume: 0.8,
// });

// const typeSound = new Howl({
//   srs: ["./src/assets/sounds/SFX_PRESS_AB.wav"],
//   volume: 0.8,
// });

// function searchDefaults(dexEntry) {
//   let detail = dexEntry;
//   if (Object.keys(apiJson).name.split("-")[0] === detail.trim().toLowerCase()) {
//     return true;
//   }
// console.log(detail.split("-")[0].toLowerCase());
// console.log(Object.keys(apiJson).name.split("-")[0]);
// }
//^ Return first word of string separated by hyphens in search bar
// create array of returns whose first word matches search bar
// search "aegislash", receive both "aegislash-shield" and "aegislash-blade"
// use return with lowest 'id' key value/ 'is_default' key of 'true' for display

// function searchFirst(foundPokemon) {
//   foundPokemon.findKey(obj, function (key) {
//     return _.startsWith(key, { $dexEntry });
//   });
//
// let entries = foundPokemon.split("-");
// let splitEntries = [];
// for (let entry of entries) {
//   let splitEntry = entry;
//   splitEntries.push(entry);
// }
// return splitEntries[0];
// }

const JSON = () => {
  const [apiJson, setApiJson] = useState({});
  const [flavorJson, setFlavorJson] = useState({});
  const [dexEntry, setDexEntry] = useState("");
  const [submit, setSubmit] = useState(false);
  const [randomSubmit, setRandomSubmit] = useState(false);
  // const [gender, setGender] = useState("male");
  // const [forme, setForme] = useState();
  // const [region, setRegion] = useState();
  // const [mega, setMega] = useState(false);
  // const [dyna, setDyna] = useState(false);

  if (typeof Storage === "undefined") {
    console.log(window.localStorage);
  }

  // VVV API CALL "SEARCH" BAR
  useEffect(() => {
    const getJSON = async () => {
      const jsonData = await axios.get(
        // `https://pokeapi.co/api/v2/pokemon/${dexEntry.trim().toLowerCase()}`
        `https://pokeapi.co/api/v2/pokemon/${dexEntry.trim().toLowerCase()}`
      );

      console.log(jsonData.data);
      setApiJson(jsonData.data);
    };
    if (dexEntry.trim() === "") {
      return null;
    } else {
      getJSON();
      dexLoad.play();
    }
  }, [submit]);
  // console.log(apiJson.data);

  // const jsonFlavor = await axios.get(
  //   `https://pokeapi.co/api/v2/pokemon-species/${searchDefaults(dexEntry)}`
  // );
  // // consider multiple API calls

  // VVV RANDOM BUTTON CODE
  function getRandom() {
    return Math.floor(Math.random() * 898);
    // JSON contains 1118 entries - 898 are unique pokemon - the rest are for regionals/formes/megas/gigamax, etc.
    // no ID numbers between 898 and 10001, list continues on to 10220
  }
  useEffect(() => {
    const getJSON = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${getRandom()}`)
        .then(async (firstRes) => {
          await axios
            .get(
              `https://pokeapi.co/api/v2/pokemon-species/${firstRes.data.name
                .trim()
                .toLowerCase()}`
            )
            .then((secondRes) => {
              setApiJson(firstRes.data);
              setFlavorJson(secondRes.data);
              localStorage.setItem("name", apiJson.stringify(species.name));
              localStorage.setItem("name", flavorJson.stringify(name));
            });

          console.log(apiJson);
          console.log(flavorJson);
        });
    };

    if (randomSubmit === false) {
      return null;
    } else if (dexEntry !== "" && randomSubmit === true) {
      setApiJson(getJSON());
    } else {
      getJSON();
    }
  }, [randomSubmit]);
  // brings up random entry on startup, hard-refresh - might also be slowing my internet down. Not sure yet.

  useEffect(() => {
    gsap.from("#mainHeader", { opacity: 0, y: 10, text: " ", delimiter: " " });
  }, [dexEntry]);

  useEffect(() => {
    gsap.timeline(
      gsap.from("#mainScreen", {
        delay: 1,
        duration: 1,
        opacity: 0,
        ease: "rough",
      })
    );
  }, [apiJson]);

  return (
    // onClick, useState, YES
    // useEffect, NO
    // for useState, 2 separate calls (query text, result from server
    // VVV at top of component
    // let [queryText, setQueryText]=useState(''));
    // let apiJson, setApiJson = useState(null);
    // async function onSubmit(query) {
    // let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexEntry.toLowerCase()}`)
    // setApiJson(response)}
    // // ^^^ at Top of component
    // // inside component:

    // <>
    // <input onChange={(e) => setQueryText(e.target.value)} /><button onClick={() => onSubmit(queryText)}>Submit</button></>
    // function pokemonList(props){
    // return <></>;
    // }
    <div id="Border">
      <div id="App">
        <div id="dexSideBoard">
          <button
            id="searchBtn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSubmit(!submit);
            }}
          >
            SEARCH
          </button>
          <input
            type="button"
            className="checkBtn"
            id="FormeBtn"
            onClick={(e) => {
              dexLoad.play();
            }}
          />
          <input type="button" className="checkBtn" id="ArtBtn" />
          <input type="button" className="checkBtn" id="check03" />
          <input type="button" className="checkBtn" id="check04" />
          <div id="speaker">
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
        </div>
        {/* <hr /> */}
        <div id="dexBody">
          {Object.keys(apiJson).length && Object.keys(apiJson).length !== 0 ? (
            <h2 id="mainHeader"> Pokemon Found!</h2>
          ) : (
            <h1 id="mainHeader">
              Hello World. <br /> This is the API Pokedex Page.
            </h1>
          )}
          {/* <label id="searchLabel" for="search">
          Enter Pokemon Name.
        </label> */}
          <input
            id="inputBar"
            type="text"
            name="search"
            onChange={(e) => {
              console.log(e);
              setDexEntry(e.target.value);
            }}
          >
            {}
          </input>
          <div id="inputBtns">
            <button
              id="inputRandom"
              onClick={(e) => setRandomSubmit(!randomSubmit)}
              //sets dex Entry to empty obj like reset button
              // Random Number Generator is working! Now to hook it up to the "setDexEntry" function somehow
            >
              Random
            </button>
            <button id="inputReset" onClick={(e) => setApiJson({})}>
              Reset
            </button>
          </div>
          {/* <label for="search">Enter Pokemon Name.</label>
        <input
          type="text"
          name="search"
          onChange={(e) => setDexEntry(e.target.value)}
        >
          {}
        </input> */}
          {Object.keys(apiJson).length !== 0 ? null : (
            <div id="mainScreenEmpty" />
          )}
          {Object.keys(apiJson).length === 0 ? null : (
            <div id="mainScreen">
              <Pokemon foundPokemon={apiJson} />
            </div>
          )}
        </div>
        <div id="labLogo">
          <div>
            <h2>Pine Labs</h2>
            <hr />
            {/* <input type="button" className="checkBtn" id="check01" />
        <input type="button" className="checkBtn" id="check02" /> */}
          </div>
          <div id="dPad">
            <button className="dPadBtn" id="dPad01">
              ^
            </button>
            <button className="dPadBtn" id="dPad02">
              v
            </button>
            <button className="dPadBtn" id="dPad03">
              {"<"}
            </button>
            <button className="dPadBtn" id="dPad04">
              {">"}
            </button>
            <button className="dPadBtn" id="dPad05"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSON;
