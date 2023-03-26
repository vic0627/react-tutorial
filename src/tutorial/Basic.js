const styleH1 = {
  fontSize: "32px",
  color: "#fa0",
};

let show = true;

const showChange = () => {
  show ? (show = false) : (show = true);
  console.log(show);
};

const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];

const RainbowDOM = () => {
  let output = [];
  for (const i of rainbow) {
    output.push(
      <p
        style={{ color: i }}
        key={i}>
        {i}
      </p>
    );
  }
  return output;
};

const TestA = () => {
  return (
    <div>
      <h1 style={styleH1}>{show ? `Hello World!` : `See You`}</h1>
      {<RainbowDOM />}
      <button onClick={showChange}>早上好!</button>
    </div>
  );
};
