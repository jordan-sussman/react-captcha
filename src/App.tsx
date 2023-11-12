import { Fragment } from "react"
import { CaptchaVerification } from "./components"
import "./App.css"

function App() {
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "lightgray",
          border: "2px solid gray",
          borderRadius: 24,
          padding: 20,
        }}
      >
        <p
          style={{
            color: "black",
            fontSize: 14,
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Simple React + TS CAPTCHA verification
          <br />
          built using unique components
        </p>
        <CaptchaVerification />
      </div>
    </Fragment>
  )
}

export default App
