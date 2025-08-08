import React from "react"
import AtSquareUp from "../../component/At_square_up/asu"
import "./process.css"
import Thanks from "../../component/Thanks/thanks"

export default function Process({title ,Text}){
    return(
        <>
        <AtSquareUp/>
        <Thanks title="Thank you for your Interest in SquareUp." Text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>
        </>
    )
}
