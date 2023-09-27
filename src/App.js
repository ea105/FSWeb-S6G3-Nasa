import React,{useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import DatePicker from "./component/DatePicker"
import ImageViewer from "./component/ImageViewer"

const API_KEY = "09XwLlHXTsUY95YCg104KBqIkGaj0tfkgLLfxbUP";

function App() {
  const [render, setRender] = useState(0); // [state, setState
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("2020-07-22");

  const [error, setError] = useState(null);

  useEffect(() => {
    setRender(render + 1);
    setData(null);
    // Make a request for a user with a given ID
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
        setError(null);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(error.response.data.msg);
      })
      .finally(function () {
        // always executed
      });
  }, [selectedDate]);

  return (
    <div className="App">
      <h1>{render} kere sayfa render oldu</h1>
      <DatePicker val={selectedDate} dateChange={setSelectedDate} />

      {error && <h3>Error: {error}</h3>}
      {!error && <ImageViewer viewData={data} />}
    </div>
  );
}

  

export default App;
