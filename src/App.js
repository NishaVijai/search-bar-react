import "./styles.css";
import { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

export default function App() {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchTextResult = JSONDATA.filter((val) => {
    if (searchText === "") return val;
    return val.first_name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Search Filter</h1>
      <input type="text" placeholder="Search..." onChange={onChangeHandler} />

      {searchTextResult.map((result) => {
        return (
          <section>
            <p>{result.first_name} </p>
          </section>
        );
      })}
    </div>
  );
}
