import React from 'react'
import styled from "styled-components"
export default function StyledComponent() {
    const Heading = styled.h1`
    color: red;
    border:5px solid red;
    padding: 20px;
    margin: 10px auto;
    text-align:center;
    background: White;
    `
    //Styled Function having Object
    const MainHeading = styled.h2({
        color: "Green",
        background: "White",
        border: "5px solid Green",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center"
    })
  return (
    <div>
        <hr />
        <Heading>This is Styled Component</Heading>
        <MainHeading>This is Styled Componet by using object in Function</MainHeading>
    </div>
  )
}
