'use client'
import styled from "styled-components";


export const Hone = styled.h1`
font-size: 36px;
line-height: 52px;
font-weight: 900;
color: #18242e;
font-family: inter, sans-serif;
`
export const Hfive = styled.h5`
font-size: 20px;
line-height: 52px;
font-weight: 900;
color: #18242e;
font-family: inter, sans-serif;
margin-right:15px;
`
export const PokemonContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
export const FlexColumn = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const PokemonGrid = styled.a`
    padding:50px;
    border:1px solid #E3350D;
    background:white;
    border-radius:15px;
    transition: background-color 0.3s ease;
    color:#E3350D;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    margin:5px;
    width:20%;
    &:hover {
        background-color: #E3350D;
        color:white;
      }
`
export const SearchInput = styled.input`
      border:none;
      margin-left:10px;
      margin-right:10px;
      padding:5px;
`