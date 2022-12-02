
import './Navbar.css'
import {NavLink} from 'react-router-dom'
    
    
    const navbar = () => {
      return (<>
      
          <header id="navbar">
            <div className="h-child">
              <li><NavLink className="link" to="/">live casino</NavLink></li>
              <NavLink className="link" to="/"><img  alt='spades' src="https://img.icons8.com/ios-filled/50/null/ace-of-spades.png" className="icon" /></NavLink>
              <li><NavLink className="link" to="/games">Games</NavLink></li>
              <NavLink className="link" to="/"> <img  alt='dice' src="https://img.icons8.com/metro/26/null/dice.png" className="icon" /></NavLink>
              <li><NavLink className="link" to="/">Casinos</NavLink></li>
              <NavLink className="link" to="/"> <img alt='coin' src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/null/external-casino-chip-casino-icongeek26-glyph-icongeek26-3.png" className="icon" /></NavLink>
              <li><NavLink className="link" to="/">help</NavLink></li>
              <NavLink className="link" to="/"><img alt='help' src="https://img.icons8.com/ios-filled/50/null/ask-question.png" className="icon" /></NavLink>
              <div className="registration">
                <div className="resReg">
                  <li><NavLink  className="link" id="bg-color" to="/login">LOGIN</NavLink></li>
                  <li><NavLink className="link" to="/">signup</NavLink></li>
                </div>
              </div>
            </div>
          </header>
      
      </>
      )
    }
    
    export default navbar