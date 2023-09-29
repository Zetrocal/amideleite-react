import LinesEllipsis from 'react-lines-ellipsis';
import styled from "styled-components";

interface TProps {
    title: string,
    description: string,
    image: string
    readMoreHandler: Function
}
export default function ItemCard({ title, description, image, readMoreHandler }: TProps) {
    return (
        <ItemCardApp>
            <ImagenSection>
                <Image src={image} />
            </ImagenSection>
            <TextBoxSection>
                <Title>{title}</Title>
                <Line />
                <DescriptionContainer>
                    <LinesEllipsis
                        text={description}
                        maxLine="3"
                        ellipsis="..."
                        trimRight
                        basedOn="words"
                    />
                </DescriptionContainer>

                <MoreButton onClick={() => readMoreHandler()}>Leer Mas</MoreButton>
            </TextBoxSection>
        </ItemCardApp>
    );
}


const ItemCardApp = styled.div`
    height: 580px;
    width: 500px;
    position: relative;

    @media(max-width:680px){
        width: 350px;
        height: 400px;
    }

    @media(max-width:380px){
        width: 90vw;
        //height: 200px;
        height: 400px;
    }

    @media(max-width:300px){
        height: 350px;
    }
`

const ImagenSection = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 0;
    z-index: 1;
`

const Image = styled.img`
    width: 435px;
    height: 364px;
    object-fit: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media(max-width:680px){
        width: 280px;
        height: 220px;
    }    
`

const TextBoxSection = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 320px;
    padding-top: 115px;
    background: #ebdcb299;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media(max-width:680px){
        height: 240px;
        padding-top: 70px;
    }

    @media(max-width:300px){
        height: 150px;
        padding-top: 40px;
    }

    
`

const Title = styled.h2`
    width: 80%;
    margin: auto;
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media(max-width:680px){
        font-size: 18px;
    }

    @media(max-width:300px){
        font-size: 14px;
        line-height: 22px;
    }
`

const Line = styled.div`
    width: 70%;
    margin: auto;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media(max-width:680px){
        border: 1px solid #363636;
        width: 60%;
    }
`

const DescriptionContainer = styled.div`
    height: 120px;
    width: 500px;
    overflow: hidden;
    padding: 18px 35px;
    font-family: 'Cabin';
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;

    @media(max-width:680px){
        font-size: 12px;
        width: 100%;
        padding: 12px 32px;
    }

    @media(max-width:300px){
        display: none;
    }
`

const MoreButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 35px;
    background-color: #eed699;
    padding: 4px 12px;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #b8b6b4;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover{
        background-color: #eec47b;;
    }

    @media(max-width:300px){
        font-size: 12px;
    }
`
