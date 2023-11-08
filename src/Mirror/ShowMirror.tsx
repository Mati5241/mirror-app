import React from "react";
import {Clock} from "./Clock";
import {MirrorScript} from "./MirrorScript";

import './Mirror.css'


export const ShowMirror = (props: any) => {

   if (props.data.length === 0) {
       return <div className="mirror">
           <Clock/>
           <div className="skrypt">
               <MirrorScript/>
           </div>
       </div>
   } else {

    return <div className="mirror">
        <Clock/>
        <div className="skrypt">
            {props.data.map((item: any) => (
                <p key={item[0]} className={item[4]}>{item[1]} {item[3]}</p>
                ))}
        </div>
    </div>

}};
