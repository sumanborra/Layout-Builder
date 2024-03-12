// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const changeContent = () => {
        onToggleShowContent()
      }
      const changeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const changeRightNavbara = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="background-container-ConfigurationController">
          <h1 className="heading-layout-text">Layout</h1>
          
            <div className="list-item">
              <input
                type="checkbox"
                defaultChecked={showContent}
                id="content"
                className="check-box"
                onChange={changeContent}
              />
              <label className="label-text" htmlFor="content">
                Content
              </label>
            </div>
            <div className="list-item">
              <input
                type="checkbox"
                defaultChecked={showLeftNavbar}
                id="leftNavbar"
                className="check-box"
                onChange={changeLeftNavbar}
              />
              <label className="label-text" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </div>
            <div className="list-item">
              <input
                type="checkbox"
                defaultChecked={showRightNavbar}
                id="rightNavbar"
                className="check-box"
                onChange={changeRightNavbara}
              />
              <label className="label-text" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </div>
         
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
