/* eslint-disable eqeqeq */
import { useState } from "react";
import { Buttons } from "../components/Buttons";
import { Output } from "../components/Output";

 const CalculatorPage = ()=>{
    const[f,countState] = useState(0);
    const ival = (opp)=>{
        if(f=='0'&& opp!='AC'){
            countState(opp);
           }
           else 
            if(opp =='='){
                
                countState(eval(f)); // Trigger Entire Function (Then Re-rendering)
                
                
            }
            else if(opp=="AC"){
                countState('0')
            }
            else{
                countState(f+opp)
            }
        }   
        

    
return (
    <div>
        <Output print={f}/>
<table className="table">
<tbody>
  <tr>
     <td><Buttons fn={ival} val="+"/></td>
     <td><Buttons fn={ival} val="-"/></td>     
     <td><Buttons fn={ival} val="/"/></td>     
     <td><Buttons fn={ival} val="*"/></td>
     <td><Buttons fn={ival} val="AC"/></td>     


  </tr>
    <tr>
    <td><Buttons fn={ival} val="1"/></td>
    <td><Buttons fn={ival} val="2"/></td>     
    <td><Buttons fn={ival} val="3"/></td>     
    <td><Buttons fn={ival} val="4"/></td>   
    <td><Buttons fn={ival} val="%"/></td>     


    </tr>
    <tr>
     <td><Buttons fn={ival} val="5"/></td>
     <td><Buttons fn={ival} val="6"/></td>     
     <td><Buttons fn={ival} val="7"/></td>     
     <td><Buttons fn={ival} val="8"/></td>   
    <td><Buttons fn={ival} val="="/></td>     


    </tr>
    <tr>
     <td><Buttons fn={ival} val="9"/></td>
     <td><Buttons fn={ival} val=")"/></td>     
     <td><Buttons fn={ival} val="("/></td>     
     <td><Buttons fn={ival} val="0"/></td>  
    <td><Buttons fn={ival} val="."/></td>     


    </tr>
  
  </tbody>
</table>
    
</div>
)



}
export default CalculatorPage;

