import "./App.css";
import Header from "./components/Header";
import Typewriter from "typewriter-effect";
import myPhoto from "./assets/photo.png";
import emojiGif from "./assets/emojiWork.gif";
import todoGif from "./assets/Todo.gif";

import { Suspense } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const translationsEn = {
  welcome: "HELLO! I M ",
  MyWorks: "My works",
};

const translationsRu = {
  welcome: "ПРИВЕТ Я",
  MyWorks: "Мои работы",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      ru: { translation: translationsRu },
    },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
  });

function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={"Loading..."}>
      <Header />
      <section className="section_header">
        <div className="container">
          <div className="header_wrapper">
            <div className="about">
              <img
                src={myPhoto}
                alt="myPhoto"
                className="img_wrapper"
                width="400"
                height="400"
              />
              <button className="aboutBtn">
                <img
                  alt="profile"
                  src="data:image/png;base64,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"
                />
              </button>
            </div>
            <h2>
              {t("welcome")}
              <Typewriter
                options={{
                  strings: ["FRONT-END РАЗРАБОТЧИК", "ДАНИИЛ СЕМЕНОВ"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
        </div>
      </section>
      <section id="My_work" className="my_work">
        <div className="container">
          <h2>{t("MyWorks")}</h2>
        </div>
        <div className="list">
          <a
            href="https://dorki-coder.github.io/emojiReact/"
            className="myWork_wrapper"
          >
            <div className="work_description">
              <h3>Emoji emojiFinder</h3>
              <p>Стэк: React,TypeScript,CSS,HTML </p>
              <h3>Задания:</h3>
              <p>✓ сверстать </p>
              <p>✓ выводить карточки со всеми emoji</p>
              <p>
                ✓ на карточке выводить название и ключевые слова без повторений
              </p>
              <p>✓ фильтрацию по ключевым словам</p>
              <p>
                ✓ сделать чтобы можно было вводить несколько ключевых слов в
                поле для текста
              </p>
            </div>
            <img className="myWork" src={emojiGif} alt="emojiFinder" />
          </a>
          <a
            href="https://dorki-coder.github.io/weather/"
            className="myWork_wrapper"
          >
            <div className="work_description">
              <h3>Weather app</h3>
              <p>
                ✓ Приложение должно запрашивать у пользователя его координаты
                через html5 geolocation api браузера. Если все получилось, то
                запрашивать погоду по этим координатам.
              </p>
              <p>
                ✓ Если пользователь запретил автоопределение или что-то пошло не
                так, тогда нужно попытаться самим определить его местоположение
                по косвенным признакам.
              </p>
              <p>
                ✓ Если что-то пошло не так или пользователь нажимает на «Change
                city», тогда нужно показать текстовое поле, в которое можно
                ввести название города. И по этому городу запросить погоду
              </p>
            </div>
            <img
              className="myWork"
              src="https://i.imgur.com/MJFdQMH.png"
              alt="weather"
            />
          </a>
          <a
            href="https://dorki-coder.github.io/weather/"
            className="myWork_wrapper"
          >
            <div className="work_description">
              <h3>Weather app</h3>
            </div>
            <img
              className="myWork"
              src="https://i.imgur.com/vGFbgYQ.png"
              alt="weather"
            />
          </a>
          <a
            href="https://dorki-coder.github.io/weather/"
            className="myWork_wrapper"
          >
            <div className="work_description">
              <h3>Todo list </h3>
            </div>
            <img className="myWork" src={todoGif} alt="weather" />
          </a>
        </div>
      </section>
    </Suspense>
  );
}

export default App;
