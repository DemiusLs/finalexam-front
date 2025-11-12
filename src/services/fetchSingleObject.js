import api from "./api";

const fetchSingleObject = async (id ,objString , setPlant, setIsLoading, setError  ) => {
  setIsLoading(true);
  setError(null);

  try {
    const res = await api.get(`/${objString}/${id}`);
    console.log(res);
    setPlant(res.data);
  } catch (err) {
    console.error(err);
    setError(`Errore nel caricamento di ${objString}`);
  } finally {
    setIsLoading(false);
  }
};

export default fetchSingleObject;