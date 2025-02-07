import { FC } from "react";
import styles from "../CharactersSection.module.css";
import { Character } from "../type";
import { convertDate } from "../../../servises/convertDate";

type Props = {
  character: Character;
};

const CharacterCard: FC<Props> = ({ character }) => {
  const date = convertDate(character.created);
  return (
    <div className={styles.card}>
      <span className={styles.name}>
        {`${character.name} - ${character.species}`}
      </span>
      <div className={styles.details}>
        <span>
          Status: <b>{character.status}</b>
        </span>
        <span>Created: {date}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
