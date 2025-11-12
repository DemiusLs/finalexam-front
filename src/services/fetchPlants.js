import axios from "axios";

const fetchPlants = async(setPlants, setIsLoading ,setError) =>{

    setIsLoading = true; 
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/plants`);

        if (Array.isArray(res.data)) {
            console.log(res.data)
            setPlants(res.data);
            }else{
                setError("Dati non validi");
            }
    }catch(err) {
        console.error(err);
        setError("Errore nel caricamento");
    }finally{

        setIsLoading = false;
    }
}



export default fetchPlants;