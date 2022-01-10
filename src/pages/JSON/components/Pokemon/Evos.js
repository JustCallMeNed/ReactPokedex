const Evos = ({ foundEvos }) => {
  let { id, species } = foundEvos;

  useEffect(() => {
    const getJSON = async () => {
      const jsonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${species[0]}`
      );
      console.log(jsonData.data);
      setApiJson(jsonData.data);
    };
    if (id === NaN) {
      return null;
    } else {
      getJSON();
    }
  }, [submit]);
  return (
    <div id="EvoScreen">
      <div>TESTING.</div>
    </div>
  );
};

export default Evos;
