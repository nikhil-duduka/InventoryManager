import { Quote } from "../components/Quote"

import {Authin} from "../components/Authin"

export const Signin = ()=>{
    return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
            <Authin type="signin"/>
            </div>
            <div  className="hidden lg:block">
                <Quote/>
            </div>
        </div>
    </div>
    ) 
}