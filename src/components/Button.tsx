import React, { useState } from "react"
import Spinner from "./Spinner"

interface Props {
  color: string
  handleClick: () => Promise<boolean>
  label: string
}

const Button = (props: Props) => {
  const { color, handleClick, label } = props

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handler = async () => {
    setLoading(true)
    setError(false)
    const error = await handleClick()
    setLoading(false)
    if (error) {
      setError(true)
    }
  }

  return (
    <>
      <button
        type="button"
        className={`btn ${color}`}
        onClick={() => handler()}
        disabled={loading}
      >
        {loading ? <Spinner /> : label}
      </button>
      {error && (
        <p className="text-center">There was a problem, please try again</p>
      )}
    </>
  )
}

export default Button
