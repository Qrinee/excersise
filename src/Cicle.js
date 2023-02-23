import './App.css'
export default function Circle(props){
    return(
        <div className="circle">
            <p className="points">{props.points}</p>
            <p className="of">of {props.of}</p>
        </div>
    )
}