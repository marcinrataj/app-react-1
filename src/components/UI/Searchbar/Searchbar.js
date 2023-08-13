import { useEffect, useState } from "react";
import {PropTypes} from "prop-types";
import ThemeContext from "../../../context/themeContext";
import { useContext } from "react";

const propTypes = {
  onSearch: PropTypes.func.isRequired
}


function Searchbar(props) {
  const [term, setTerm] = useState("");
  const theme = useContext(ThemeContext);
  

  const search = () => {
    props.onSearch(term)
  };

  const onKeyDownHandler = e => {
    if(e.key === 'Enter'){
      search()
    }
  }

  const focusInput = () => {
    const input = document.querySelector('.search');
    input.focus()
  }

  useEffect(() => {
    //...
    focusInput()
  }, []);

//componentDidMount()
//componentDidUpdate()

  return (
    <div className="d-flex">
      <input
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={(e) => setTerm(e.target.value)}
        className="form-control search"
        type="text"
        placeholder="Szukaj..."
      />
        <button 
        onClick={search} 
        className={`ml-1 btn btn-${theme.color}`}>
          Szukaj
        </button>
    </div>
  );
}

Searchbar.propTypes = propTypes;

export default Searchbar;
