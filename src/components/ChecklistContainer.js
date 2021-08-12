import React from "react";
import Checklist from "./Checklist";

const ChecklistContainer = ({data}) => {
    console.log(data)
    return(
        <div>
            {data.map((info)=><Checklist text={info.text} title={info.title} id={info.id}/>)}
        </div>
    )
}

export default ChecklistContainer;