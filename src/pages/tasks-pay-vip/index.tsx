import type { NextPage } from "next";
import Image from "next/image";
import { HeaderBoard } from "../../components/HeaderBoard";

import styles from "./styles.module.scss";

import bgcolorImg from "../../assets/images/board/bgcolor-pay.svg";
import apoidaroImg from "../../assets/images/board/apoiador-01.svg";
import paypalImg from "../../assets/images/board/button-paypal.svg";

const TasksPayVip: NextPage = () => {
  return (
    <div className="">
      <HeaderBoard title="Tasks Pay Vip" />
      <main className={`container`}>
        <section
          className={`content dflex dflex__center dflex__dcolumn ${styles.tasks__container}`}
        >
          <Image width={541} height={360} src={bgcolorImg} alt="Imagem fundo" />
          <div
            className={`dflex dflex__center bgcolor__green_500 ${styles.tasks__container_apoiador}`}
          >
            <Image src={apoidaroImg} alt="Apoiador" />
            <span>Parabéns agora você é um colaborador!</span>
          </div>
          <h2>Seja um apoiador deste projeto! 🏆</h2>
          <h3>
            Contribua com apenas{" "}
            <span className="color__green_500">R$ 1,00</span>
          </h3>
          <p>Apareça na nossa home, tenha funcionalidades exclusivas.</p>

          <Image width={541} height={360} src={paypalImg} alt="Imagem fundo" />
        </section>
      </main>
    </div>
  );
};

export default TasksPayVip;
