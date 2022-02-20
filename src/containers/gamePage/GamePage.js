import React, { useState, useEffect, useRef } from "react";
import "./GamePage.css";
import { Markup } from "interweave";
import InputField from "../../components/inputField/InputField";

function GamePage(props) {
  const arrLetters = [
    {
      question: "בטור הראשון של השמות, השם הראשון שמופיע, האות השנייה",
      hint: "בביתנו הקודם בשכונת נווה צדק, בעלית הגג גר עולה חדש, סופר, שלימים זכה בפרס נובל לספרות",
      answer: "ב",
      id: 0,
    },
    {
      question: "בטור המרכזי של השמות, השם הרביעי, האות השנייה",
      hint: 'ב-1905 היה מנהל הוועד היפואי של "חובבי ציון", היה הרופא החביב של תל אביב, איש של שלום, רכוב על חמור אוחז בשמשייה לבנה מבחוץ וירוקה מבפנים (כך מתואר בציוריו של גוטמן).',
      answer: "י",
      id: 1,
    },
    {
      question: "בטור המרכזי, השם האחרון, האות התשיעית",
      hint: "היה אחד המורים במחזור הראשון של הגימנסיה הרצליה",
      answer: "ת",
      id: 2,
    },
    {
      question: "בטור הראשון השם ה-12, האות הראשונה",
      hint: "היה סופר, מורה, עורך ומוציא לאור. נודע בשם העט ש. בן ציון, ובנו היה הצייר המפורסם של העיר תל אביב",
      answer: "ג",
      id: 3,
    },
    {
      question: "בטור הראשון האות הראשונה בשם ה-20",
      hint: "ההוגה והיזם של הקמת העיר תל אביב",
      answer: "ו",
      id: 4,
    },
    {
      question: "בטור המרכזי בשם ה-21, האות ה-17",
      hint: "היה המנהל במחזור הראשון של הגימנסיה הרצליה",
      answer: "ל",
      id: 5,
    },
    {
      question: "בטור הראשון, השם ה-15 , האות השישית",
      hint: "היה ראש העיר הראשון של תל אביב בביתו הוכרז על הקמת מדינת ישראל",
      answer: "ו",
      id: 6,
    },
    {
      question: "בטור השלישי השם ה-20, אות שמינית",
      hint: 'היה ציר בקונגרס הציוני הרביעי, הקים ביפו לשכת מודיעין ל"חובבי ציון", נתן את השם לעיר "תל אביב" ועל שמו רחוב טרנדי ואופנתי במרכז העיר',
      answer: "מ",
      id: 7,
    },
    {
      question: "בטור המרכזי השם הראשון, אות רביעית",
      hint: 'הנכד שלו זמר מפורסם שרצה להיות "חבר של קבע בחברה להגנת הטבע" והוא גם קרוי על שמו',
      answer: "ב",
      id: 8,
    },
  ];
  const arrAnswers = ["ב", "י", "ת", "ג", "ו", "ל", "ו", "מ", "ב"];

  const [ans0, setAns0] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [ans5, setAns5] = useState("");
  const [ans6, setAns6] = useState("");
  const [ans7, setAns7] = useState("");
  const [ans8, setAns8] = useState("");

  const [currLetter, setCurrLetter] = useState({
    question: "",
    hint: "",
    answer: "",
  });

  const [currText, setCurrText] = useState(props.text);
  const [isInfoShowed, setIsInfoShowed] = useState(true);
  // const [isCorrect, setIsCorrect] = "";

  // const handleChange = (id, event) => {
  //   // setValue(event.target.value);
  //   setAns[id](event.target.value);
  // };

  useEffect(() => {
    setCurrText(currLetter.question);
    setIsInfoShowed(false);
  }, [currLetter]);

  useEffect(() => {
    setCurrText(props.text);
    setIsInfoShowed(true);
  }, []);

  const handleChange0 = (event) => {
    setAns0(event.target.value);
    if (ans0 === arrAnswers[0]) {
      event.target.addClass = "correct";
    }
  };

  const handleChange1 = (event) => {
    setAns1(event.target.value);
  };

  const handleChange2 = (event) => {
    setAns2(event.target.value);
  };

  const handleShowQuestion = (id) => {
    setCurrLetter({
      ...currLetter,
      question: arrLetters[id].question,
      hint: arrLetters[id].hint,
      answer: arrLetters[id].answer,
    });
    console.log(currLetter);
    setCurrText(currLetter.question);
  };

  const handleShowInfo = (event) => {
    console.log("show-info clicked");
  };

  return (
    <div className="game-page-container">
      <h1 className="game-title">
        {" "}
        <Markup content={props.title} />
      </h1>
      <div className="text-container">
        <div
          className={`info-icon ${
            !isInfoShowed ? "display-btn" : "hint-icon-hidden "
          }`}
          // className="info-icon"
          onClick={handleShowInfo}
        ></div>
        <p className="text-paragrapgh">
          {/* <Markup content={props.text} /> */}
          <Markup content={currText} />
        </p>
        <div
          className={`hint-icon ${
            !isInfoShowed ? "display-btn" : "hint-icon-hidden "
          }`}
        ></div>
      </div>
      {/* <div className="hint-container">
        <h1 className="game-title hint-title">רמז</h1>
        <div className="close-hint-btn"></div>
        <p className="text-paragrapgh hint-text">{currLetter.hint}</p>
      </div> */}
      <div className="letter-container">
        <div className="letters-row top-row-letters">
          {/* <InputField /> */}
          <input
            // className={`letter-input letter0 ${
            //   isCorrect ? "correct" : "wrong"
            // }`}
            className="letter-input letter0"
            maxLength={1}
            value={ans0}
            id={0}
            onChange={handleChange0}
            onClick={() => handleShowQuestion(0)}
            // onChange={() => handleChange(0)}
          />
          <input
            className="letter-input letter1"
            maxLength={1}
            value={ans1}
            id={1}
            onChange={handleChange1}
            onClick={() => handleShowQuestion(1)}
            // onChange={() => handleChange(1)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter2"
            maxLength={1}
            value={ans2}
            id={2}
            // onChange={() => handleChange(2)}
            onChange={handleChange2}
            onClick={() => handleShowQuestion(2)}
            // onChange={handelChange}
          />
        </div>
        <div className="letters-row low-row-letters">
          <input
            className="letter-input letter3"
            maxLength={1}
            // value={ans3}
            id={3}
            onClick={() => handleShowQuestion(3)}
            // onChange={() => handleChange(3)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter4"
            maxLength={1}
            // value={ans4}
            id={4}
            onClick={() => handleShowQuestion(4)}
            // onChange={() => handleChange(4)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter5"
            maxLength={1}
            // value={ans5}
            id={5}
            onClick={() => handleShowQuestion(5)}
            // onChange={() => handleChange(5)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter6"
            maxLength={1}
            onClick={() => handleShowQuestion(6)}
            // value={ans6}
            // id={6}
            // onChange={() => handleChange(6)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter7"
            maxLength={1}
            // value={ans7}
            id={7}
            onClick={() => handleShowQuestion(7)}
            // onChange={() => handleChange(7)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter8"
            maxLength={1}
            // value={ans8}
            id={8}
            onClick={() => handleShowQuestion(8)}
            // onChange={() => handleChange(8)}
            // onChange={handelChange}
          />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
