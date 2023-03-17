import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
   
class FontAwe extends Component {  
 
    render(){
        return(
            <div>
                <h4><FontAwesomeIcon icon={faCoffee} color="orange" /> This is Font Awesome Icon.</h4>
            </div>
        )
    }
     
}  
   
export default FontAwe; 