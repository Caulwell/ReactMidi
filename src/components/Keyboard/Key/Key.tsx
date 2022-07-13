import { INote } from "../../../constants/types";
import {BlackKey, Note, StyledKey, WhiteKey } from "./Key.styles";


interface props{
    note: INote
}


const Key = ({note} : props) => {

    return (
        <>
        {note.Colour === "w" ? 

        <WhiteKey 
        shift={
            note.Key !== "F"
        } 
        
        >
        <Note colour="w">{note.Key}</Note>
        </WhiteKey>
        :
        <BlackKey>
        <Note colour="b">{note.Key}</Note>
        </BlackKey>
        }   
    </>
    )

}

export default Key;