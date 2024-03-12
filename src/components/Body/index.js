// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-nav-bar-container">
              <h1 className="heading-left-nav-bar-text">Left Navbar Menu</h1>
              <ul className="list-container-left-nav-bar">
                <li className="list-items-left-nav-bar">Item 1</li>
                <li className="list-items-left-nav-bar">Item 2</li>
                <li className="list-items-left-nav-bar">Item 3</li>
                <li className="list-items-left-nav-bar">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-display-container">
              <h1 className="heading-left-nav-bar-text">Content</h1>
              <p className="list-items-left-nav-bar">
                Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-nav-bar-container">
              <h1 className="heading-left-nav-bar-text">Right Navbar</h1>
              
                <p className="list-items-left-nav-bar para-right-nav-bar">
                  Ad 1
                </p>
                <p className="list-items-left-nav-bar para-right-nav-bar">
                  Ad 2
                </p>
              
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
