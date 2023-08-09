import { useContext } from "react";
import ThemeContext from "../../../context/themeContext";

export default function LoadingIcon(props) {
  const theme = useContext(ThemeContext)
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="d-flex justify-content-center">
        <div className={`spinner-border m-5 text-${theme.color}`} role="status"></div>
      </div>
      <span className={`sr-only text-${theme.color}`}>Ładowanie...</span>
    </div>
  );
}
