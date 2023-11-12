import React from "react"

type statusTextProps = {
  status: string
}

export const StatusText: React.FC<statusTextProps> = ({ status }) => (
  <h2
    id='status'
    style={{
      color: status !== "Verified" ? "#ee7e6a" : "#2fcc2f",
      height: 20,
      textTransform: "uppercase",
      fontSize: 40,
      paddingBottom: 20,
    }}
  >
    {status}
  </h2>
)
