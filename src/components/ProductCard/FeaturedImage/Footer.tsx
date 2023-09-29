import styled from "styled-components";

interface TProps{
    color: string,
    children: string
}
export default function Footer({color, children}: TProps) {
    return(
        <SpecialImageFooterApp>
            <LeftBlock color={color}/>
            <RightBlock color={color}/>
            <CenterBlock color={color}>
                <Text>{children}</Text>
            </CenterBlock>
        </SpecialImageFooterApp>
    );
}


const SpecialImageFooterApp = styled.div`
    position: relative;
    text-align: center;
`

const LeftBlock = styled.div<{color:string}>`
    position: absolute;
    left: 10px;
    top: -20px;
    width: 30%;
    height: 48px;
    background: ${({color})=>color};
    border: 1px solid #000000;
`

const RightBlock = styled.div<{color:string}>`
    position: absolute;
    right: 10px;
    top: -20px;
    width: 30%;
    height: 48px;
    background: ${({color})=>color};
    border: 1px solid #000000;
`

const CenterBlock = styled.div<{color:string}>`
    top: -10px;
    position: relative;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 70%;
    height: 48px;
    background: ${({color})=>color};
    border: 1px solid #000000;
    margin: auto;
`

const Text = styled.p`
    margin: 0px;
    font-family: 'Alatsi';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
`