import { useEffect, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { getCharacter } from "../../servises/requests/getCharacter";
import CharactersSection from "../CharactersSection/CharactersSection";
import styles from "./SearchSection.module.css";

const SearchSection = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const response = await getCharacter(value);
        setCharacters(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (value.length >= 3) {
      fetchCharacter();
    }
  }, [value]);

   
  return (
    <div className={styles.wrapper}>
      <SearchInput setValue={setValue} count={characters?.length}/>
      <CharactersSection loading={loading} characters={characters} />
    </div>
  );
};

export default SearchSection;
