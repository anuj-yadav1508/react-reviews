import React, {useState} from 'react'
import people from './data'
import './App.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0)
    const {id,image,name,job, text} = people[index]


    const checkNumber = (number) => {
        if(number > people.length - 1){
            return  0
        }
        if(number < 0){
            return people.length - 1
        }
        return number
    }

    
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex
            newIndex = index -1
            return checkNumber(newIndex)
        })
        console.log(index);
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex
            newIndex = index +1
            return checkNumber(newIndex) 
        })
        console.log(index);
    }

    const randomPerson = () => {
            let randomNumber 
            randomNumber = Math.floor( Math.random()* people.length)
            if(randomNumber === index){
                return randomNumber + 1
            }
            setIndex(checkNumber(randomNumber))
            console.log(index);
    }

    return (
        <section>
            <div className="person">
                <div className="img-container">
                    <img src={image} alt={name}/>
                    <FaQuoteRight className='quote' />
                </div>
                <h3>{name}</h3>
                <h3>{job}</h3>
                <p>{text}</p>

                <div className="btn-container">
                    <button onClick={prevPerson}><FaChevronLeft  /></button>
                    <button onClick={nextPerson}><FaChevronRight /></button>
                </div>
                <button onClick={randomPerson} >surprise me</button>
            </div>
        </section>
    )
}

export default Review
