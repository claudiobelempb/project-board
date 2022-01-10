import {
  FaPlus,
  FaCalendarAlt,
  FaRegTrashAlt,
  FaPen,
  FaEye,
  FaRegClock,
  FaTimes,
} from "react-icons/fa";
import { HeaderBoard } from "../../components/HeaderBoard";
import styles from "./styles.module.scss";

import { InputDefault } from "../../components/InputDefault";
import { ButtonDefault } from "../../components/ButtonDefault";
import { useState } from "react";

const TrasksVip: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [id, isId] = useState(false);
  return (
    <>
      <HeaderBoard title="Tasks" />
      <div className="container">
        <section className={`content ${styles.tasks__container}`}>
          <div className="dflex dflex__center">
            <InputDefault label="" type="text" placeholder="Qual sua tarefa?" />
            <ButtonDefault
              onClick={() => console.log("CLick")}
              type="button"
              size="icon"
              bgcolor="bgcolor__yellow_800"
            >
              <FaPlus />
            </ButtonDefault>
          </div>
          <article className="grid grid__2">
            <div>
              <h2>Estudar react js com o sujeito programador</h2>
              <div>
                <FaCalendarAlt />
                <span>17 de julho 2021</span>
              </div>
            </div>
            <div className="dflex dflex__end">
              <>
                <ButtonDefault
                  type={"button"}
                  size={"link"}
                  href={"/tasks-details"}
                >
                  <FaEye width={15} height={15} /> <span>Visualizar</span>
                </ButtonDefault>
                <ButtonDefault
                  type={"button"}
                  size={"link"}
                  href={"/tasks-edit"}
                >
                  <FaPen width={15} height={15} /> <span>Editar</span>
                </ButtonDefault>
                <ButtonDefault type={"button"} size={"icon"}>
                  <FaRegTrashAlt width={15} height={15} />
                  <span>Excluir</span>
                </ButtonDefault>
              </>
            </div>
          </article>

          <article className="grid grid__2">
            <div>
              <h2>Estudar react js com o sujeito programador</h2>
              <div>
                <FaCalendarAlt />
                <span>17 de julho 2021</span>
              </div>
            </div>
            <div className="dflex dflex__end">
              <>
                <ButtonDefault
                  type={"button"}
                  size={"link"}
                  href={"/tasks-details"}
                >
                  <FaEye width={15} height={15} /> <span>Visualizar</span>
                </ButtonDefault>
                <ButtonDefault
                  type={"button"}
                  size={"link"}
                  href={"/tasks-edit"}
                >
                  <FaPen width={15} height={15} /> <span>Editar</span>
                </ButtonDefault>
                <ButtonDefault type={"button"} size={"icon"}>
                  <FaRegTrashAlt width={15} height={15} />
                  <span>Excluir</span>
                </ButtonDefault>
              </>
            </div>
          </article>
        </section>
      </div>

      <div className="container">
        <section className={`content ${styles.tasks__container}`}>
          <article className="">
            <h3>Obrigado por apoiar esse projeto.</h3>
            <div>
              <FaRegClock />
              <span>Última doação cerca de 2 horas</span>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default TrasksVip;
