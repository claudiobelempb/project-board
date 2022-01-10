import type { NextPage } from "next";
import Image from "next/image";
import { HeaderBoard } from "../components/HeaderBoard";

import styles from "./styles.module.scss";

import bgcolorImg from "../assets/images/board/bgcolor-default.svg";
import apoidaroImg from "../assets/images/board/apoiador-01.svg";

const Home: NextPage = () => {
  return (
    <div className="">
      <HeaderBoard title="Home" />
      <main className={`container`}>
        <section
          className={`content dflex dflex__center dflex__dcolumn ${styles.home__container}`}
        >
          <Image width={541} height={360} src={bgcolorImg} alt="Imagem fundo" />
          <h2>
            Uma ferramenta para seu dia a dia Escreva, planeje e organize-se..
          </h2>
          <p>
            <span>100% Gratuita</span> e online
          </p>
          <strong>Apoiadores:</strong>
          <ul>
            <li>
              <a href="">
                <Image src={apoidaroImg} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={apoidaroImg} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={apoidaroImg} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={apoidaroImg} alt="" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
