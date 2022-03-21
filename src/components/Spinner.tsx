import React from "react"
import styled from "styled-components"

const IconSpinner = styled.svg`
  -moz-animation: spin 500ms infinite linear;
  -o-animation: spin 500ms infinite linear;
  -webkit-animation: spin 500ms infinite linear;
  animation: spin 500ms infinite linear;
`

const Spinner = () => (
  <IconSpinner
    aria-hidden="true"
    focusable="false"
    role="presentation"
    className="icon icon-spinner"
    viewBox="0 0 20 20"
  >
    <path
      d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"
      fill="#919EAB"
    />
  </IconSpinner>
)

export default Spinner