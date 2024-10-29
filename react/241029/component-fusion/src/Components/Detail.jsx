
import styled from 'styled-components';
import { ContentH2, ContentSection } from "./Common";


const ContentH2Border = styled(ContentH2)`
    border: 1px solid black;
    background-color: teal;
    color: white;
`;


export default function Detail() {
    return (
        <>
            <ContentH2Border>Detail 페이지</ContentH2Border>
            <ContentSection>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero natus modi neque non illum. Rem vitae velit esse consectetur corrupti blanditiis vel voluptatibus. Incidunt iure magni numquam repudiandae quibusdam!</p>
            </ContentSection>
        </>
    );
}