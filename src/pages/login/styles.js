import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 4.8rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    width: 32rem;
    margin-bottom: 2rem;
    color:  #ffffff;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 2rem;
    line-height: 4.4rem;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 3.5rem;
    line-height: 2.5rem;
`

export const ForgetText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.9rem;

    color: #e5e044;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`

export const CreateText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.9rem;

    color: #23dd7a;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`

export const Wrapper = styled.main`
    max-width: 30rem;
`

export const Column = styled.div`
    flex: 1;

    &:last-child{
        display: flex;
        justify-content: end;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`