import { useEffect, useState } from "react";
const SearchBar = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [itemShow, setItemShow] = useState("");
  const [list, setList] = useState([
    "apple",
    "banana",
    "cake",
    "ball",
    "arrow",
    "buttons",
    "fish",
    "baby",
    "king",
    "fly",
    "sky",
    "diamond",
    "ok",
    "no",
  ]);

  const handleCheckSearch = (val) => {
    return list.filter((item) => {
      return item.includes(val);
    });
  };
  const handleInput = (val) => {
    setFilteredList(() => handleCheckSearch(val));
    setInputVal(val);
  };
  const handleList = (items) => {
    setItemShow(items);
    setInputVal(items);
  };
  return (
    <>
      <div className="header">
        <div className="input-box">
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => handleInput(e.target.value)}
            value={inputVal}
          />
          <button className="close-list" onClick={() => setFilteredList("")}>
            X
          </button>
        </div>

        {filteredList != "" && (
          <div className="list-div">
            <ul>
              {filteredList &&
                filteredList.map((items, index) => {
                  return (
                    <li key={index} onClick={() => handleList(items)}>
                      {items}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}

        {inputVal != "" && <h2>{itemShow}</h2>}
      </div>
    </>
  );
};
export default SearchBar;
