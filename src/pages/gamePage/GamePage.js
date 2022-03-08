import React, { useState, useEffect } from "react";
import "./GamePage.css";
import { Markup } from "interweave";
import InputField from "../../components/inputField/InputField";
import AnimatedPage from "../../components/AnimatedPage";
import InfoIcon from "../../svg/infoIcon/InfoIcon";
import HintIcon from "../../svg/hintIcon/HintIcon";

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
  const [isHintShowed, setIsHintShowed] = useState(false);
  // const [isFinished, setIsFinished] = useState(false);
  // const [isCorrect, setIsCorrect] = useState("");

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
    if (isInfoShowed === true) {
      setCurrText(props.text);
      setIsInfoShowed(true);
    }
    // if (isFinished === true) {
    //   setCurrText(props.finishText);
    // }
  }, [isInfoShowed, props.text, props.finishText]);

  useEffect(() => {
    props.setIsPreMissionPages(false);
  }, []);

  // useEffect(() => {
  //   if (isInfoShowed === true) {
  //     setCurrText(props.text);
  //     setIsInfoShowed(true);
  //   }
  // }, [isHintShowed]);

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
      <div className="game-page-container mission1-background">
        <h1 className="game-title">
          {" "}
          <Markup content={props.title} />
        </h1>
        <div className="text-container">
          {!isInfoShowed && (
            <InfoIcon
              isInfoShowed={isInfoShowed}
              setIsInfoShowed={setIsInfoShowed}
            />
          )}

          {/* <div
            className={`info-icon ${
              !isInfoShowed ? "display-btn" : "hint-icon-hidden "
            }`}
            onClick={() => setIsInfoShowed(true)}
          ></div> */}
          <p className="text-paragrapgh">
            <Markup content={currText} />
          </p>
          {!isInfoShowed && <HintIcon handleShowHint={handleShowHint} />}
        </div>
        <div
          className={`hint-container-wrapper ${
            isHintShowed ? "hint-container-showed " : "hint-container-hidden"
          }`}
        >
          <div className="hint-container">
            <h1 className="game-title hint-title">רמז</h1>
            <div className="close-hint-btn" onClick={handleShowHint}></div>
            <p className="hint-text">{currLetter.hint}</p>
          </div>
        </div>
        <div className="white-answers-wrapper">
          <div className="letter-container">
            <div className="letters-row top-row-letters">
              <InputField
                className="letter-input letter0"
                maxLength={1}
                value={ans0}
                id={0}
                setanswer={setAns0}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-0"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              <InputField
                className="letter-input letter1"
                maxLength={1}
                value={ans1}
                id={1}
                setanswer={setAns1}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-1"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              <InputField
                className="letter-input letter2"
                maxLength={1}
                value={ans2}
                id={2}
                setanswer={setAns2}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-2"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
            </div>
            <div className="letters-row low-row-letters">
              <InputField
                className="letter-input lette3"
                maxLength={1}
                value={ans3}
                id={3}
                setanswer={setAns3}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-3"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              <InputField
                className="letter-input letter4"
                maxLength={1}
                value={ans4}
                id={4}
                setanswer={setAns4}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-4"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              <InputField
                className="letter-input letter5"
                maxLength={1}
                value={ans5}
                id={5}
                setanswer={setAns5}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-5"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              <InputField
                className="letter-input letter6"
                maxLength={1}
                value={ans6}
                id={6}
                setanswer={setAns6}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-6"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              <InputField
                className="letter-input letter7"
                maxLength={1}
                value={ans7}
                id={7}
                setanswer={setAns7}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-7"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              <InputField
                className="letter-input letter8"
                maxLength={1}
                value={ans8}
                id={8}
                setanswer={setAns8}
                handleShowQuestion={handleShowQuestion}
                setIsInfoShowed={setIsInfoShowed}
                arrLetters={arrLetters}
                name="ssn-8"
                // isCorrect={isCorrect}
                // setIsCorrect={setIsCorrect}
              />
              {/* <input
            // className={`letter-input letter0 ${
            //   isCorrect ? "correct" : "wrong"
            // }`}
            className="letter-input letter0"
            maxLength={1}
            value={ans0}
            id={0}
            setAnswer={setAns0}
            // onChange={(event) => {
            //   setAns0(event.target.value);
            //   // if(ans0 === )
            // }}
            handleShowQuestion={handleShowQuestion}
            setIsInfoShowed={setIsInfoShowed}
            // onClick={() => {
            //   handleShowQuestion(0);
            //   setIsInfoShowed(false);
            // }}
          /> */}
              {/* <input
            className="letter-input letter1"
            maxLength={1}
            value={ans1}
            id={1}
            onChange={(event) => setAns1(event.target.value)}
            onClick={() => {
              handleShowQuestion(1);
              setIsInfoShowed(false);
            }}
          />
          <input
            className="letter-input letter2"
            maxLength={1}
            value={ans2}
            id={2}
            onChange={(event) => setAns2(event.target.value)}
            onClick={() => {
              handleShowQuestion(2);
              setIsInfoShowed(false);
            }}
          />
        </div>
        <div className="letters-row low-row-letters">
          <input
            className="letter-input letter3"
            maxLength={1}
            value={ans3}
            id={3}
            onClick={() => {
              handleShowQuestion(3);
              setIsInfoShowed(false);
            }}
            onChange={(event) => setAns3(event.target.value)}
          />
          <input
            className="letter-input letter4"
            maxLength={1}
            value={ans4}
            id={4}
            onClick={() => {
              handleShowQuestion(4);
              setIsInfoShowed(false);
            }}
            onChange={(event) => setAns4(event.target.value)}
          />
          <input
            className="letter-input letter5"
            maxLength={1}
            value={ans5}
            id={5}
            onClick={() => {
              handleShowQuestion(5);
              setIsInfoShowed(false);
            }}
            onChange={(event) => setAns5(event.target.value)}
          />
          <input
            className="letter-input letter6"
            maxLength={1}
            onClick={() => {
              handleShowQuestion(6);
              setIsInfoShowed(false);
            }}
            value={ans6}
            id={6}
            onChange={(event) => {
              setAns6(event.target.value);
            }}
          />
          <input
            className="letter-input letter7"
            maxLength={1}
            value={ans7}
            id={7}
            onChange={(event) => setAns7(event.target.value)}
            onClick={() => {
              handleShowQuestion(7);
              setIsInfoShowed(false);
            }}
          />
          <input
            className="letter-input letter8"
            maxLength={1}
            value={ans8}
            id={8}
            onChange={(event) => setAns8(event.target.value)}
            onClick={() => {
              handleShowQuestion(8);
              setIsInfoShowed(false);
            }}
          /> */}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default GamePage;
