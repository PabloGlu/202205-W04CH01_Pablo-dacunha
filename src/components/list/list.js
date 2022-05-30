import {Card } from "../card/card";
import { PERSONS } from "../../models/persons";


export function List(){
    console.log(PERSONS)
    return(
        <ul className ="gentlemen">
            {
                PERSONS.map((element) =>( 
                <Card person= {element}></Card> 
                ))
             };

        </ul>
    )
}