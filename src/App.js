const messages = [
  "Fill a watering can with water",
  "Water the plants",
  "Store the watering can",
];

export default function App() {
  let step = 1;

  function handlePrevious() { alert("Previous") };
  function handleNext() { alert("Next") };

  return <>
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">Step {step}: {messages[step - 1]}</p>
      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div >
    <VerisonWatermark />
  </>
}

function VerisonWatermark() {
  const version = require('../package.json').version;

  return (
    <div className="versionWatermark">{version}</div>
  );
}