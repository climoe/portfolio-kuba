import React from "react";
import { CircleWavy } from "phosphor-react";

import Colors from "../common/Colors";

export const DotsRating = ({range}) => {
    
    const pinkColor = `${Colors.PINK}`;
    const greyColor = `${Colors.GREY}`;
    return (
        <div>
            {[...Array(range)].map((item, index) => {
                return <CircleWavy size={"1rem"} color={pinkColor} weight="duotone" key= {index}/>}
            )}
            {[...Array(5 - range)].map((item, index) => {
                return <CircleWavy size={"1rem"} color={greyColor} weight="duotone" key= {5-index}/>}
            )}
        </div>
    )
}