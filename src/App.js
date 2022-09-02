import React from "react";
import Values from "./values.js";
import TekColor from "./TekColor.js";

function App() {
  const [renk, renkGuncelle] = React.useState("");
  const [error, setError] = React.useState(false);
  const [liste, listeguncelle] = React.useState(new Values("#15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let renkler = new Values(renk).all(10);
      listeguncelle(renkler);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="kapsayici">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={renk}
            onChange={(e) => renkGuncelle(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="renkler">
        {liste.map((renk, index) =>{
          return(
            <TekColor key={index}
            {...renk} index={index} hexColor={renk.hex}/>
          );
        })}

      </section>
    </>
  );
}

export default App;
