import React from "react"

type ButtonProps = {
  buttonText: string
  disabled?: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  disabled = false,
  onClick,
}) => (
  <button
    aria-label={buttonText}
    disabled={disabled}
    onClick={onClick}
    type='button'
  >
    {buttonText}
  </button>
)
