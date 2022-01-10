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

const Trasks: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <HeaderBoard title="Tasks" />
      <div className="container">
        <section className={`content ${styles.tasks__container}`}>
          <div className="dflex">
            <ButtonDefault
              className="dflex dflex__reverse_row color__yellow_800"
              size="medium"
              type={"button"}
              title="Você está editando uma tarefa."
            >
              <FaTimes width={32} height={32} />
            </ButtonDefault>
          </div>
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
              {isLogin ? (
                <>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaEye width={15} height={15} /> <span>Visualizar</span>
                  </ButtonDefault>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaPen width={15} height={15} /> <span>Editar</span>
                  </ButtonDefault>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaRegTrashAlt width={15} height={15} />
                    <span>Excluir</span>
                  </ButtonDefault>
                </>
              ) : (
                <>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaRegTrashAlt width={15} height={15} />
                    <span>Excluir</span>
                  </ButtonDefault>
                </>
              )}
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
              {isLogin ? (
                <>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaEye width={15} height={15} /> <span>Visualizar</span>
                  </ButtonDefault>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaPen width={15} height={15} /> <span>Editar</span>
                  </ButtonDefault>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaRegTrashAlt width={15} height={15} />
                    <span>Excluir</span>
                  </ButtonDefault>
                </>
              ) : (
                <>
                  <ButtonDefault type={"button"} size={"icon"}>
                    <FaRegTrashAlt width={15} height={15} />
                    <span>Excluir</span>
                  </ButtonDefault>
                </>
              )}
            </div>
          </article>
        </section>
      </div>

      <div className="container">
        {isLogin ? (
          <>
            <section className={`content ${styles.tasks__container}`}>
              <article className="">
                <h3>Obrigado por apoiar esse projeto.</h3>
                <div>
                  <FaRegClock />
                  <span>Última doação cerca de 2 horas</span>
                </div>
              </article>
            </section>
          </>
        ) : (
          <>
            <div className={`content ${styles.tasks__container_apoiar}`}>
              <ButtonDefault size="large" type={"button"} title="Apoiar" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Trasks;
