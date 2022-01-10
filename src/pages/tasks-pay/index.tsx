import type { NextPage } from "next";
import Image from "next/image";
import { FaCreditCard } from "react-icons/fa";
import { HeaderBoard } from "../../components/HeaderBoard";
import { ButtonDefault } from "../../components/ButtonDefault";

import styles from "./styles.module.scss";

import bgcolorImg from "../../assets/images/board/bgcolor-pay.svg";
import apoidaroImg from "../../assets/images/board/apoiador-01.svg";
import paypalImg from "../../assets/images/board/button-paypal.svg";

const TasksPay: NextPage = () => {
  return (
    <div className="">
      <HeaderBoard title="Tasks Pay" />
      <main className={`container`}>
        <section
          className={`content dflex dflex__center dflex__dcolumn ${styles.home__container}`}
        >
          <Image width={541} height={360} src={bgcolorImg} alt="Imagem fundo" />
          <h2>Seja um apoiador deste projeto! 🏆</h2>
          <h3>
            Contribua com apenas <span>R$ 1,00</span>
          </h3>
          <p>Apareça na nossa home, tenha funcionalidades exclusivas.</p>

          {/* <ButtonDefault
            size="large"
            type="button"
            bgcolor="bgcolor__yellow_800"
            title="PayPal"
          />

          <ButtonDefault
            size="large"
            type="button"
            bgcolor="bgcolor__black_100"
          >
            <FaCreditCard />
          </ButtonDefault> */}
          <Image width={541} height={360} src={paypalImg} alt="Imagem fundo" />
        </section>
      </main>
    </div>
  );
};

export default TasksPay;
