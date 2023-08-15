import React from "react";
interface CustomComponentProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input :React.FC<CustomComponentProps> = ({onChangeHandler})=> {
    return (
        <input type={"search"} onChange={onChangeHandler}/>
    )
}

export default Input