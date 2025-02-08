import { FC } from "react";
import { Character } from "../../CharactersSection/type";
import styles from "./CharacterDetails.module.css";
import { convertDate } from "../../../servises/convertDate";
import { Loader } from "../../../loader";
import { useNavigate } from "react-router-dom";

type Props = {
  details?: Character | null;
  loading: boolean;
};

const CharacterDetails: FC<Props> = ({ details, loading }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={handleGoBack}>
        {" "}
        Go back{" "}
      </button>

      <div className={styles.card} style={{ opacity: loading ? "0.5" : "1" }}>
        {loading ? (
          <Loader />
        ) : (
          <img src={details?.image} alt={details?.name + "photo"} />
        )}
      </div>
      <div className={styles.info}>
        <h1>Personal info from agent #{details?.id}</h1>
        <ul>
          <li className={styles.name}>
            <span>NAME:</span> {details?.name}
          </li>
          <li className={styles.gender}>
            <span>GENDER:</span>
            {details?.gender}
          </li>
          <li className={styles.location}>
            <span>LOCATION:</span>
            {details?.location?.name}
          </li>
          <li className={styles.status}>
            <span>STATUS:</span>
            {details?.status}
          </li>
          <li className={styles.created}>
            <span>CREATED:</span> {convertDate(details?.created as string)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
