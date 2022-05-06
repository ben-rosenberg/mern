//import { useState } from "react";
import '../Style.css'

const Boxes = (props) => {
   //const [ colorArray, setColorArray ] = useState([]);
    const styles = [ ...props.stylesArray ];

    return (
        <div className="flex_row wrap gap_2 pt_2">
        {
            styles.map((style, i) => {
                return <div key={i} className='box' style={ style }></div>
            })
        }
        </div>
    );
}

export default Boxes;