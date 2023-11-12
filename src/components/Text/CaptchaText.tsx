import React from "react"

type CaptchaTextProps = {
  generatedCaptcha: string
}

export const CaptchaText: React.FC<CaptchaTextProps> = ({
  generatedCaptcha,
}) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#ffffffde",
      borderRadius: 20,
      display: "flex",
      height: 64,
      justifyContent: "center",
      marginBottom: 20,
    }}
  >
    <h3
      style={{
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        msUserSelect: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {generatedCaptcha}
    </h3>
  </div>
)
