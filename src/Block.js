import Circle from './Cicle';
import './App.css'
export default function Block(){
    return(
        <div className='block'>
            <p className='main-p bold'>Your Result</p>
            <Circle points="76" of="100" />
            <h1 className='main-heading'>Great</h1>
            <p className='main-p text-center'>You scored higher than 65% of the
                people who have taken these tests.
            </p>
        </div>
    )
} 