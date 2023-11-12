import React from "react"

type CaptchaInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value: string
}

export const CaptchaInput: React.FC<CaptchaInputProps> = ({
  onChange,
  onKeyDown,
  value,
}) => (
  <input
    autoFocus
    onChange={onChange}
    onKeyDown={onKeyDown}
    style={{
      backgroundColor: "white",
      borderRadius: 6,
      color: "black",
      fontSize: 16,
      height: 32,
      marginBottom: 20,
      marginRight: 10,
      paddingInline: 4,
      width: 150,
    }}
    type='text'
    value={value}
  />
)
