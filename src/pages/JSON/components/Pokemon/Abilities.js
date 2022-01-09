import React from "react";
import { capFirst } from "./Pokemon";

const Abilities = ({ foundAbilities }) => {
  let { abilities } = foundAbilities;
  return (
    <div id="abilityScreen">
      <div>
        {abilities.length === 1 ? (
          <h3 className="Abilities">Ability</h3>
        ) : (
          <h3 className="Abilities">Abilities</h3>
        )}
        {abilities.map((abilities, i) => {
          return (
            //dropdown menu to subdivide/organize moves by type (damaging/status, etc)
            <>
              {abilities.is_hidden === true ? (
                <p key={i} className="Abilities" id={"hiddenAbility"}>
                  {"Hidden Ability:" + " " + capFirst(abilities.ability.name)}
                </p>
              ) : (
                <p key={i} className="Abilities" id={"Ability" + i}>
                  {capFirst(abilities.ability.name)}
                </p>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Abilities;
