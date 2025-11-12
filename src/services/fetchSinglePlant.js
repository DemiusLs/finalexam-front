import axios from "axios";

const fetchSinglePlant = async (id, setPlant, setIsLoading, setError) => {
  setIsLoading(true);
  setError(null);

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/plants/${id}`);
    setPlant(res.data);
  } catch (err) {
    console.error(err);
    setError("Errore nel caricamento della pianta");
  } finally {
    setIsLoading(false);
  }
};

export default fetchSinglePlant;