import'./Search.scss';
const Search = () => {
  return (
    <div className="Search">
      <div className="logo">
        <div className="FirstText">Fashi</div>
        <div className="YellowText">.</div>
      </div>
      <div className="Searchbar">
        <select>
          <option className="option" value="All category">
            All category
          </option>
          <option className="option" value="Men">
            Men
          </option>
          <option className="option" value="Women">
            Women
          </option>
        </select>
        <input
          type="text"
          name="Search"
          id="Search"
          placeholder="What do you Need ?"
        />

        <button type="submit">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="icons">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-sharp fa-regular fa-clipboard"></i>
        <div className="cost">$150.00</div>
      </div>
    </div>
  );
}

export default Search