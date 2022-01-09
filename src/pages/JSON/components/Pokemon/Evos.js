const Evos = ({ foundEvos }) => {
  let { id } = foundEvos;

  useEffect(() => {
    const getJSON = async () => {
      const jsonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
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
