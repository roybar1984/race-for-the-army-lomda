import React, { useState, useEffect } from "react";
import "./GamePage.css";
import { Markup } from "interweave";
import InputField from "../../components/inputField/InputField";
import AnimatedPage from "../../components/AnimatedPage";
import InfoIcon from "../../svg/infoIcon/InfoIcon";
import HintIcon from "../../svg/hintIcon/HintIcon";
import CloseBtn from "../../svg/closeBtn/CloseBtn";
import Confetti from "react-confetti";

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
  // const arrAnswers = ["ב", "י", "ת", "ג", "ו", "ל", "ו", "מ", "ב"];

  const [answers, setAnswers] = useState([
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
    {
      inputText: "",
      correct: false,
    },
  ]);

  const [currLetter, setCurrLetter] = useState({
    question: "",
    hint: "",
    answer: "",
  });

  const [currText, setCurrText] = useState(props.text);
  const [isInfoShowed, setIsInfoShowed] = useState(true);
  const [isHintShowed, setIsHintShowed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    props.setIsPreMissionPages(false);
    setIsFinished(false);
    setShowConfetti(false);
  }, []);

  useEffect(() => {
    setCurrText(currLetter.question);
    setIsInfoShowed(false);
  }, [currLetter]);

  useEffect(() => {
    setCurrText(props.text);
    setIsInfoShowed(true);
    setIsHintShowed(false);
  }, [props.text]);

  useEffect(() => {
    if (isFinished) {
      setCurrText(props.finishText);
      setShowConfetti(true);
      setTimeout(function () {
        setShowConfetti(false);
      }, 5000);
    }
  }, [isFinished, props.finishText]);

  useEffect(() => {
    if (isInfoShowed === true) {
      setCurrText(props.text);
      setIsInfoShowed(true);
    }
  }, [isInfoShowed, props.text, props.finishText]);

  const handleShowQuestion = (id) => {
    setCurrLetter({
      ...currLetter,
      question: arrLetters[id].question,
      hint: arrLetters[id].hint,
      answer: arrLetters[id].answer,
    });
    setCurrText(currLetter.question);
  };

  const handleShowHint = (event) => {
    if (!isHintShowed) {
      setIsHintShowed(true);
    } else {
      setIsHintShowed(false);
    }
  };

  return (
    <AnimatedPage>
      {isFinished && showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="game-page-container">
        <h1 className="game-title">
          {" "}
          <Markup content={props.title} />
        </h1>
        <div className="text-container">
          {!isInfoShowed && !isFinished && (
            <InfoIcon
              isInfoShowed={isInfoShowed}
              setIsInfoShowed={setIsInfoShowed}
            />
          )}
          <p
            className={`text-paragrapgh ${
              currText !== props.text && "question-text"
            }`}
          >
            <Markup content={currText} />
          </p>
          {!isInfoShowed && !isFinished && (
            <HintIcon handleShowHint={handleShowHint} />
          )}
        </div>
        <div
          className={`hint-container-wrapper ${
            isHintShowed || isFinished
              ? "hint-container-showed "
              : "hint-container-hidden"
          }`}
        >
          {isFinished ? (
            <div className="congratulations-container">
              <p className="hint-text congratulation-text">
                {" "}
                <Markup content={props.finishText} />
              </p>
            </div>
          ) : (
            <div className="hint-container">
              <h1 className="game-title hint-title">רמז</h1>
              <CloseBtn
                className="close-hint-btn"
                handleShowHint={handleShowHint}
              />
              <p className="hint-text">{currLetter.hint}</p>
            </div>
          )}
        </div>
        <div className="white-answers-wrapper">
          <div className="letter-container">
            <div className="letters-row top-row-letters">
              <InputField
                autoComplete="off"
                className="letter-input letter0"
                maxLength={1}
                value={answers[0]}
                id={0}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-0"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
              <InputField
                autoComplete="off"
                className="letter-input letter1"
                maxLength={1}
                value={answers[1]}
                id={1}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-1"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
              <InputField
                autoComplete="off"
                className="letter-input letter2"
                maxLength={1}
                value={answers[2]}
                id={2}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-2"
                isFinished={isFinished}
              />
            </div>
            <div className="letters-row low-row-letters">
              <InputField
                autoComplete="off"
                className="letter-input lette3"
                maxLength={1}
                id={3}
                value={answers[3]}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-3"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
              <InputField
                className="letter-input letter4"
                maxLength={1}
                id={4}
                value={answers[4]}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-4"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
              <InputField
                autoComplete="off"
                className="letter-input letter5"
                maxLength={1}
                id={5}
                value={answers[5]}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-5"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
              <InputField
                autoComplete="off"
                className="letter-input letter6"
                maxLength={1}
                id={6}
                value={answers[6]}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-6"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
              <InputField
                autoComplete="off"
                className="letter-input letter7"
                maxLength={1}
                id={7}
                value={answers[7]}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-7"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
              <InputField
                autoComplete="off"
                className="letter-input letter8"
                maxLength={1}
                id={8}
                value={answers[8]}
                answers={answers}
                setanswer={setAnswers}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-8"
                isFinished={isFinished}
                setIsFinished={setIsFinished}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default GamePage;
