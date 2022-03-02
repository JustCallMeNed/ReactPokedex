import { capFirst } from "./Pokemon";
const Moves = ({ foundMoves }) => {
  let { order, moves, abilities } = foundMoves;
  // Sorting = processing data twice - once to sort, once to return

  const sortMoves = () => {
    moves.sort((a, b) =>
      a.move_learn_method > b.move_learn_method
        ? 1
        : a.move_learn_method === "level-up" &&
          b.move_learn_method === "level-up"
        ? a.level_learned_at > b.level_learned_at
          ? 1
          : -1
        : -1
    );
    return;
  };

  // function filterMoves() {
  //   moves.filter(() => {
  //     let levelMoves = [];
  //     let tutorMoves = [];
  //     let eggMoves = [];
  //     let machineMoves = [];
  //     moves.filter(function (move) {
  //       if (
  //         Object.keys(moves?.version_group_details?.move_learn_method.name) ===
  //         "level-up"
  //       ) {
  //         levelMoves.push(move);
  //       } else if (
  //         Object.keys(moves?.version_group_details?.move_learn_method.name) ===
  //         "tutor"
  //       ) {
  //         tutorMoves.push(move);
  //       } else if (
  //         Object.keys(moves?.version_group_details?.move_learn_method.name) ===
  //         "egg"
  //       ) {
  //         eggMoves.push(move);
  //       } else if (
  //         Object.keys(moves?.version_group_details?.move_learn_method.name) ===
  //         "machine"
  //       ) {
  //         machineMoves.push(move);
  //       }
  //       return levelMoves, tutorMoves, eggMoves, machineMoves;
  //     });
  //   });
  // }
  // function sortMoves() {
  //   moves.sort(function (a, b) {
  //     if (a.level_learned_at === b.level_learned_at) {
  //       a.moves.move.name - b.moves.move.name;
  //     } else {
  //       return a.level_learned_at - b.level_learned_at;
  //     }
  //   });
  // }

  // if (a?.move_learn_method && b?.move_learn_method) {
  //   return a?.move_learn_method.localeCompare(b?.move_learn_method);
  //   // if (a.level_learned_at === b. level_learned_at||a.move_learn_method == b.move_learn_method){
  //   //   a.moves.move.name - b.moves.move.name
  //   // }
  // } else {
  //   return a.level_learned_at - b.level_learned_at;
  // }

  // filterMoves();
  // console.log(moves);
  // sortMoves();
  // console.log(moves);

  return (
    <div id="moveScreen">
      <div>
        <h3 className="Moves">Moves</h3>
        {moves.length === 0 ? (
          <p id="errorMessage">
            Error: This Moves list is currently unavailable -- we apologize for
            the inconvenience.
          </p>
        ) : (
          // sortMoves(
          //appending sorting function to map results in moves list not rendering at all
          moves.map((moves, i) => {
            return (
              //dropdown menu to subdivide/organize moves by type (damaging/status, etc)
              <>
                <p key={i} className="Moves" id={"Move" + i}>
                  {capFirst(moves.move.name)}
                  {" - "}
                  {moves.version_group_details[0].level_learned_at === 0
                    ? capFirst(
                        moves.version_group_details[0].move_learn_method.name
                      )
                    : moves.version_group_details[0].level_learned_at}
                </p>
              </>
            );
          })
          // )
        )}
      </div>
    </div>
  );
};

export default Moves;
