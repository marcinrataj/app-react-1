import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Footer() {
  const theme = useContext(ThemeContext);
  return ( 
      <div className={`text-center m3 text-${theme.color}`}>stopka 2021</div>
  );
}

export default Footer;
