import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    width: 38rem;
    color:  #ffffff;
`

export const TitleCreate = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 1rem;
`

export const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 1rem;
`

export const Wrapper = styled.main`
    max-width: 38rem;
    margin-top: -2rem;
`

export const Column = styled.div`
    flex: 1;

    &:last-child{
        display: flex;
        justify-content: end;
    }
`

export const TextWrapper = styled.div`
    margin-top: 1rem;
`
export const HaveAccount = styled.p`
    font-size: 16px;
    font-weight: 700;

    & a {
        color: #23DD7A;
        cursor: pointer;
    }

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }

`