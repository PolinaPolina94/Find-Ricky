import { FC } from "react";
import { Character } from "./type";
import styles from "./CharactersSection.module.css";
import { Loader } from "../../loader";
import CharacterCard from "./CharacterCard/CharacterCard";

type Props = {
  loading: boolean;
  characters: Character[];
};

const CharactersSection: FC<Props> = ({ loading, characters }) => {
  return (
    <div className={styles.wrapper}>
      {loading ? (
        // add style
        <div style={{ width: 100, height: 100 }}>
          <Loader />
        </div>
      ) : (
        <>
          {characters?.length ? (
            characters?.map((item: Character) => (
              <CharacterCard character={item} />
            ))
          ) : (
            <div className={styles.nofound}> No characters </div>
          )}
        </>
      )}
    </div>
  );
};

export default CharactersSection;
