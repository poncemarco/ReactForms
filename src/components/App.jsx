import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange() {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }
  return (
    <div class="container">
      <h1> Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

// const [name, setName] = useState("");

//   function handleChange(event) {
//     setName(event.target.value);
//   }
//   return (
//     <div className="container">
//       <h1>Hello {name}</h1>
//       <input
//       onChange={handleChange}
//       type="text"
//       placeholder="What's your name?"
//       value={name} />
//       <button>Submit</button>
//     </div>
//   );
