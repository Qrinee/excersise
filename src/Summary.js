import './App.css'
import {FaBolt, FaQuestionCircle, FaRocketchat, FaEye} from "react-icons/fa"

export default function Summary(){
    return(
        <>
            <div className='summary-holder'>
            <h2 className='main-h2'>Summary</h2>
            
                <div className='summary-item reaction'>
                    <FaBolt className='icon'/>
                    <p>Reaction</p>
                    <p className='result'>80<span className='per'>/100</span></p>
                </div>
                <div className='summary-item memory'>
                    <FaQuestionCircle className='icon'/>
                    <p>Memory</p>
                    <p className='result'>80<span className='per'>/100</span></p>
               
                </div>
                <div className='summary-item verbal'>
                    <FaRocketchat className='icon' />
                    <p>Verbal</p>
                    <p className='result'>80<span className='per'>/100</span></p>
               
                </div>
                <div className='summary-item visual'>
                    <FaEye className='icon' />
                    <p>Visual</p>
                    <p className='result'>80<span className='per'>/100</span></p>
               
                </div>
            </div>
        </>
    )
}