import React, { useState } from "react";
import chiefs from "./chiefs.png";
import niners from "./49ers.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import { Table, Modal, Form, InputGroup } from "react-bootstrap";
import Button from "./components/Button/Button";
import Square from "./components/Square/Square";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const [chiefsNumbers, setChiefsNumbers] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);
  const [ninersNumbers, setNinersNumbers] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);
  const [currentInitials, setCurrentInitials] = useState("");

  const generateRandomNumbers = () => {
    let finalNumbers = [];

    for (var i = 0; i < 10; i++) {
      let newNumber = Math.floor(Math.random() * 10).toString();
      let newNumberTextIndex = finalNumbers.indexOf(newNumber);

      newNumberTextIndex === -1 ? finalNumbers.push(newNumber) : i--;
    }

    return finalNumbers;
  };

  const startGame = () => {
    setChiefsNumbers(generateRandomNumbers());
    setNinersNumbers(generateRandomNumbers());
    setGameMode(true);
  };

  const pauseGame = () => {
    setChiefsNumbers(["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setNinersNumbers(["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setGameMode(false);
  };

  const handleShowModal = () => {
    gameMode && setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  let challenges = [
    { challenge: "Choose someone to take a shot with you." },
    {
      challenge:
        "Drink for 5 seconds while doing a handstand against the wall OR chug a full beer.",
    },
    {
      challenge:
        "For the next five minutes, every time you speak, you must doing the Tomahawk chop and chant as you talk.",
    },
    {
      challenge:
        "Until the next score, you must raise your hand and be called upon before speaking.",
    },
    {
      challenge:
        "Tell two truths and a lie. If nobody guesses the lie, everyone else drinks for 5 seconds. If anybody guesses the lie, you drink for 5 seconds.",
    },
    { challenge: "Finish your drink!" },
    {
      challenge:
        "For the next 5 minutes, if you want to speak, you must whisper to your partner. They get to decide whether or not to pass the message to everyone.",
    },
    { challenge: "Take a shot, OR try to do the Soulja Boy dance." },
    {
      challenge:
        "Grab 2 ping pong balls and head to the beer pong cups. If you make both balls, everybody else drinks for 5 seconds. If you make one, you choose one person to take a shot. If you miss both, take a shot.",
    },
    {
      challenge: 'For the next 5 minutes, don\'t say the words "the" or "and"',
    },
    {
      challenge:
        "Chris Traeger Rule: Until the next score, you must say the first and last name of the person you are talking to before saying anything else.",
    },
    {
      challenge:
        'Until the next score, yell "Go Chiefs!" or "Go 49ers!" before and after every sentence.',
    },
    {
      challenge:
        "Truth or Dare! Pick one person to ask you a question or challenge you to a dare.",
    },
    { challenge: "Odds Are! Pick somebody and do an Odds Are challenge." },
    {
      challenge:
        'Until the next score, say "if you know what I mean" after every sentence.',
    },
    {
      challenge:
        "Jinx! Don't speak until somebody else says your first and last name, or until the next score.",
    },
    {
      challenge:
        "Pick somebody to sing the last two lines of the national anthem. You must be drinking for as long as they can hold the notes.",
    },
  ];

  return (
    <div>
      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Body>
          <h4>Challenge:</h4>
          <p>
            {
              challenges[Math.floor(Math.random() * challenges.length)]
                .challenge
            }
          </p>
          <br />
          <br />
          <Button onClick={() => handleHideModal()}>Close</Button>
        </Modal.Body>
      </Modal>

      <Table bordered>
        <thead>
          <tr>
            <th></th>
            {chiefsNumbers.map((n, i) => (
              <th style={{ textAlign: "center" }} key={`chiefs-${i}`}>
                {<span>{n}</span>}
                <br />
                <img
                  src={chiefs}
                  alt="Chiefs Logo"
                  style={{ height: "30px" }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ninersNumbers.map((n, i) => (
            <tr key={`niners-${i}`}>
              <th style={{ textAlign: "center" }}>
                {n}
                <br />
                <img src={niners} alt="49ers Logo" style={{ height: "30px" }} />
              </th>
              {chiefsNumbers.map((n, i) => (
                <Square key={`square-${i}`} initials={currentInitials} onSecondClick={() => handleShowModal()} hasGameStarted={gameMode} />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <div
        style={{ display: "flex", justifyContent: "space-around", padding: 12 }}
      >
        {gameMode ? (
          <Button onClick={pauseGame}>Pause Game</Button>
        ) : (
          <>
            <div>
              <label htmlFor="current-initials">
                Type initials, then click on square.
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="current-initials"
                onChange={(e) => setCurrentInitials(e.target.value)}
                value={currentInitials}
              />
              <span style={{color: '#666666', fontSize: 12}}>Click square again to clear.</span>
            </div>
            <Button onClick={startGame}>Start game!</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
