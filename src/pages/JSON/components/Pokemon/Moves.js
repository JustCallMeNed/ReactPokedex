import { capFirst } from "./Pokemon";
const Moves = ({ foundMoves }) => {
  let { order, moves, abilities } = foundMoves;
  // Sorting = processing data twice - once to sort, once to return
  moves.sort(function (a, b) {
    return (
      a.level_learned_at - b.level_learned_at ||
      a.move_learn_method.localeCompare(b.move_learn_method)
    );
  });
  return (
    <div id="moveScreen">
      <div>
        <h3 class="Moves">Moves</h3>
        {moves.map((moves, i) => {
          return (
            //dropdown menu to subdivide/organize moves by type (damaging/status, etc)
            <>
              <p key={i} class="Moves" id={"Move" + i}>
                {capFirst(moves.move.name)}
                {" - "}
                {moves.version_group_details[0].level_learned_at === 0
                  ? capFirst(
                      moves.version_group_details[0].move_learn_method.name
                    )
                  : moves.version_group_details[0].level_learned_at}
                {/* lorem ipsum */}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Moves;
