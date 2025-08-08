import React from "react"
import AtSquareUp from "../../component/At_square_up/asu"
import "./work.css"
import Thanks from "../../component/Thanks/thanks"

export default function Work({title ,Text}){
    return(
        <>
        <AtSquareUp />
        <Thanks title="Let us Bring your Ideas to Life in the Digital World." Text="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product." />

        </>
    )
}