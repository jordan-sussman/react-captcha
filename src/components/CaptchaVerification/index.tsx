import { useState } from "react"
import { StatusText } from "../Text/StatusText"
import { CaptchaText } from "../Text/CaptchaText"
import { CaptchaInput } from "../Input/CaptchaInput"
import { Button } from "../Button/Button"

export const CaptchaVerification: React.FC = () => {
  const generatedValue = Math.random().toString(36).substring(2, 8)
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generatedValue)
  const [enteredCaptcha, setEnteredCaptcha] = useState("")
  const [status, setStatus] = useState("")

  const generate = () => {
    if (status === "Verified") {
      setStatus("")
    }
    setGeneratedCaptcha(generatedValue)
    setEnteredCaptcha("")
  }

  const verify = () => {
    if (enteredCaptcha === generatedCaptcha) {
      setStatus("Verified")
    } else {
      setStatus("Incorrect")
      generate()
    }
  }

  console.log(status)

  return (
    <div className='wrapper'>
      <StatusText status={status} />
      <CaptchaText generatedCaptcha={generatedCaptcha} />
      <CaptchaInput
        onChange={(e) => setEnteredCaptcha(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            verify()
          }
        }}
        value={enteredCaptcha}
      />
      <Button
        buttonText={"Verify"}
        disabled={!enteredCaptcha.length}
        onClick={verify}
      />
      <div>
        <Button buttonText='Generate New Code' onClick={generate} />
      </div>
    </div>
  )
}
