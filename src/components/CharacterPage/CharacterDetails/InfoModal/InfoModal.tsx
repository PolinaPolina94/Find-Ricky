import { FC } from "react";
import {
  TelegramSvg,
  LinkedinSvg,
  CVSvg,
  CloseSvg,
} from "../../../../servises/icons";
import { CV, LND, TLG } from "../../../../servises/links";
import styles from "./InfoModal.module.css";

type Props = {
  setShow: (item: boolean) => void;
};
const InfoModal: FC<Props> = ({ setShow }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <p>
          Привет! 🌷 <br /> Знаю, что тут не должно быть этой страницы, но я
          хочу, чтобы Вы обратили на меня внимание 🌷 <br /> Меня зовут Полина.
          Я являюсь Frontend разработчиком со стажем коммерческой разработки
          более 1 года. Последний год разрабатываю на Next.js + Tailwind. Владею
          React, HTML, CSS, JavaScript, TypeScript, Redux, Material UI и др.{" "}
          <br />
          Ищу команду, где ценен обмен знаниями и взаимная поддержка. Уверена,
          что смогу внести вклад в создание качественных продуктов и развиваться
          профессионально.
        </p>
        <div className={styles.social}>
          <ul>
            <li>
              <a href={LND}>
                <LinkedinSvg />
              </a>
            </li>
            <li>
              <a href={CV}>
                <CVSvg />
              </a>
            </li>
            <li>
              <a href={TLG}>
                <TelegramSvg />
              </a>
            </li>
          </ul>
          <div className={styles.close} onClick={() => setShow(false)}>
            <CloseSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
