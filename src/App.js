import React, { useState } from "react";
import chiefs from './chiefs.png';
import niners from './49ers.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Table, Modal, Button, Form, InputGroup } from "react-bootstrap";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [challengeNumber, setChallengeNumber] = useState(0);
  const [gameMode, setGameMode] = useState(false);
  const [userInitialsNumber, setUserInitialsNumber] = useState(0);

  const handleShow = () => {
    gameMode && setShowModal(true);
  };
  const handleHide = () => {
    setShowModal(false);
  };
  const handleTyping = (val, targetId) => {
    document.getElementById(targetId).innerHTML(val);
  }

  let challenges = [
    { challenge: "Choose someone to take a shot with you." },
    { challenge: "Drink for 5 seconds while doing a handstand against the wall OR chug a full beer." },
    { challenge: "For the next five minutes, every time you speak, you must doing the Tomahawk chop and chant as you talk." },
    { challenge: "Until the next score, you must raise your hand and be called upon before speaking." },
    { challenge: "Tell two truths and a lie. If nobody guesses the lie, everyone else drinks for 5 seconds. If anybody guesses the lie, you drink for 5 seconds." },
    { challenge: "Finish your drink!" },
    { challenge: "For the next 5 minutes, if you want to speak, you must whisper to your partner. They get to decide whether or not to pass the message to everyone." },
    { challenge: "Take a shot, OR try to do the Soulja Boy dance." },
    { challenge: "Grab 2 ping pong balls and head to the beer pong cups. If you make both balls, everybody else drinks for 5 seconds. If you make one, you choose one person to take a shot. If you miss both, take a shot." },
    { challenge: "For the next 5 minutes, don't say the words \"the\" or \"and\"" },
    { challenge: "Chris Traeger Rule: Until the next score, you must say the first and last name of the person you are talking to before saying anything else." },
    { challenge: "Until the next score, yell \"Go Chiefs!\" or \"Go 49ers!\" before and after every sentence." },
    { challenge: "Truth or Dare! Pick one person to ask you a question or challenge you to a dare." },
    { challenge: "Odds Are! Pick somebody and do an Odds Are challenge." },
    { challenge: "Until the next score, say \"if you know what I mean\" after every sentence." },
    { challenge: "Jinx! Don't speak until somebody else says your first and last name, or until the next score." },
    { challenge: "Pick somebody to sing the last two lines of the national anthem. You must be drinking for as long as they can hold the notes." }
  ];

  return (
    <div className="App">
      <Modal show={showModal} onHide={handleHide}>
        <Modal.Body>
          <h4>Challenge:</h4>
          <p>
            {challenges[Math.floor(Math.random() * challenges.length)].challenge}
          </p>
          <br />
          <br />
          <Button onClick={() => handleHide()}>Close</Button>
        </Modal.Body>
      </Modal>

      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>{gameMode && '2'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '1'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '4'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '8'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '3'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '0'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '7'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '9'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '6'} <img src={chiefs} style={{height: '30px'}} /></th>
            <th>{gameMode && '5'} <img src={chiefs} style={{height: '30px'}} /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{gameMode && '3'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '7'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '9'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '1'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '4'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '2'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '6'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '0'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '8'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
          <tr>
            <th>{gameMode && '5'} <img src={niners} style={{height: '30px'}} /></th>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
            <td onClick={() => handleShow()}><input type="text" /></td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Button onClick={() => setGameMode(true)}>Start game!</Button>
    </div>
  );
}

export default App;
