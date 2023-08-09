
import ThemeContext from "../../context/themeContext"

function Footer(props){
return(
  <div>
  <ThemeContext.Consumer>
  {({theme}) => 
  <div className={`text-center m3 text-${theme}`}>stopka 2021</div>
  }</ThemeContext.Consumer>
  </div>
)
}

export default Footer