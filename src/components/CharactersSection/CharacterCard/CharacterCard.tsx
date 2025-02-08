import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "../CharactersSection.module.css";
import { Character } from "../type";
import { convertDate } from "../../../servises/convertDate";

type Props = {
  character: Character;
};

const CharacterCard: FC<Props> = ({ character }) => {
  const date = convertDate(character.created);
  const status = character.status;
  const characterUrl = `/${character.id}`;

  const getStatusColor = (status: string) => {
    if (status === "Dead") {
      return styles.red;
    } else if (status === "Alive") {
      return styles.green;
    }
    return styles.violet;
  };

  return (
    <NavLink className={styles.card} to={characterUrl}>
      <span className={styles.name}>
        {`${character.name} - ${character.species}`}
      </span>
      <div className={`${styles.details} ${getStatusColor(status)}`}>
        <span>
          Status: <b>{status}</b>
        </span>
        <span>Created: {date}</span>
      </div>
    </NavLink>
  );
};

export default CharacterCard;
