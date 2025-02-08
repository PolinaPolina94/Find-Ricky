import { useEffect, useState } from "react";
import { getCharacterDetails } from "../../servises/requests/getCharacterDetails";
import CharacterDetails from "./CharacterDetails/CharacterDetails";
import { Character } from "../CharactersSection/type";
import { useParams } from "react-router-dom";

const CaracterPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      setLoading(true);
      try {
        const response = await getCharacterDetails(id);
        setDetails(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchCharacterDetails();
    }
  }, [id]);

  return (
    <>
      <CharacterDetails details={details} loading={loading}/>
    </>
  );
};

export default CaracterPage;
