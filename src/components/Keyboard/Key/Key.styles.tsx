import styled from "styled-components";

interface WhiteKeyProps{
    shift: boolean,
}

interface NoteProps{
    colour: string
}


export const StyledKey = styled.li`
    margin: 0;
    padding:0;
    list-style:none;
    position:relative;
    float:left;


`;

export const WhiteKey = styled(StyledKey)<WhiteKeyProps>`
    height:16em;
    width:4em;
    z-index:1;
    border-left:1px solid #bbb;
    border-bottom:1px solid #bbb;
    border-radius:0 0 5px 5px;
    box-shadow:-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2);
    background:linear-gradient(to bottom,#eee 0%,#fff 100%);

    margin: ${p => p.shift ? "0 0 0 -1em" : "0"};

`;

export const BlackKey = styled(StyledKey)`
    height:8em;
    width:2em;
    margin:0 0 0 -1em;
    z-index:2;
    border:1px solid #000;
    border-radius:0 0 3px 3px;
    box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);
    background:linear-gradient(45deg,#222 0%,#555 100%);
`;


export const Note = styled.h3<NoteProps>`
    position: relative;
    top: ${p => p.colour == "w" ? "6em" : "2em"};
    left: ${p => p.colour == "w" ? "1.2em" : "0.2em"};
    color: ${p => p.colour == "w" ? "black" : "white"};
`;