import { useState } from 'react';
import Messages from "./Messages.json";

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const messages = new Array(Messages.messages.length);
  Messages.messages.forEach(element => {
      messages[element.id] = ([element.text]);
  });

  function handlePrevious() {
    if (step > 1)
      setStep((s) => s - 1);
  };

  function handleNext() {
    if (step < 3)
      setStep((s) => s + 1);
  };

  return (
    <>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">Step {step}: {messages[step - 1][0]}</p>
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div >
      )}
      <VerisonWatermark />
    </>
  )
}

function VerisonWatermark() {
  const version = require('../package.json').version;

  return (
    <div className="versionWatermark">{version}</div>
  );
}