import { useEffect, useState } from "react";
import notes from "../../constants/notes";
import { INote } from "../../constants/types";
import Key from "./Key/Key";
import {StyledKeyboard } from "./Keyboard.styles";


const Keyboard = () => {

    const [noteArray, setNoteArray] = useState<INote[]>();

    useEffect(() => {
        setNoteArray([...notes, ...notes, ...notes]);
    })

    return (
            <StyledKeyboard>
                {noteArray && noteArray.map(note => 
                    <Key 
                    note={note}
                    />)
                }
            </StyledKeyboard>
    )
}


export default Keyboard;