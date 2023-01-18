import React from 'react'
import { nanoid } from 'nanoid'
import parse from "html-react-parser"
import Confetti from 'react-confetti'

export default function Question(props){
    //const id= [nanoid(),nanoid(),nanoid(),nanoid()]
    const [selectAnswer, setselectAnswer]= React.useState([
        {id: 0, ans: ""},{id: 1, ans: ""},{id: 2, ans: ""},{id: 3, ans: ""},{id: 4, ans: ""}
    ])
    const [showAnswers, setShowAnsers] = React.useState(false)
    const [score, setScore] = React.useState(0)
    /*function select(id){
    }*/
    function select(index, value){
        setselectAnswer(prevSelect => {
            return prevSelect.map(ele => (ele.id===index ? {...ele, ans: value}: ele))})
    }
    function show(){
        let sco = 0
        props.quest.forEach(ele =>{
            selectAnswer.forEach(res => {
                if(ele.coAnswer===res.ans){
                    sco=sco+1
                }
            })
        }
        )
        setScore(sco)
        if(!showAnswers){
            setShowAnsers(prevState => !prevState)}
        else{
            setScore(0)
            window.location.reload() 
        }
    }
    
    const list = props.quest.map((ele, index) => {
        //array of alternatives
        //const base= [ele.answers[0], ele.answers[1], ele.answers[2], ele.answers[3]]
        //shuffle the alternatives
        //const shuffle= base.sort(() => Math.random() - 0.5)
        //I use .replace() in order to converting html entities into string, the database doesn't provide the data in such format
        /*const styles ={
            backgroundColor: isSelected.forEach(ele => {
                return ele.mark ? "#D6DBF5" : "#F5F7FB"
            })
        }*/
        const styles ={backgroundColor: "#D6DBF5", border: 0}
        const correctAnswers = {backgroundColor: "#94D7A2", border: 0, pointerEvents: "none"} 
        const incoAnswer = {backgroundColor: "#F8BCBC", opacity: 0.5, border:0, pointerEvents: "none"}
        const disabled= {pointerEvents: "none"}
        return (<div key={nanoid()} className="questions-box" >
                    <h2 className = "questions">{parse(ele.question)}
                    </h2>
                    <ul className = "answers">
                        <li onClick={()=>select(index,ele.answers[0])} style={showAnswers ? (ele.answers[0]===ele.coAnswer ? correctAnswers: (selectAnswer[index].ans===ele.answers[0] ? incoAnswer: disabled)) :(selectAnswer[index].ans===ele.answers[0] ? styles: {})} >
                            {parse(ele.answers[0])}</li>
                        <li onClick={()=>select(index,ele.answers[1])} style={showAnswers ? (ele.answers[1]===ele.coAnswer ? correctAnswers: (selectAnswer[index].ans===ele.answers[1] ? incoAnswer: disabled)) :(selectAnswer[index].ans===ele.answers[1] ? styles: {})} >
                            {parse(ele.answers[1])}</li>
                        <li onClick={()=>select(index,ele.answers[2])} style={showAnswers ? (ele.answers[2]===ele.coAnswer ? correctAnswers: (selectAnswer[index].ans===ele.answers[2] ? incoAnswer: disabled)) :(selectAnswer[index].ans===ele.answers[2] ? styles: {})} >
                            {parse(ele.answers[2])}</li>
                        <li onClick={()=>select(index,ele.answers[3])} style={showAnswers ? (ele.answers[3]===ele.coAnswer ? correctAnswers: (selectAnswer[index].ans===ele.answers[3] ? incoAnswer: disabled)) :(selectAnswer[index].ans===ele.answers[3] ? styles: {})} >
                            {parse(ele.answers[3])}</li>
                    </ul>
                </div>)})
    return(
        <main>
            {list}
            <div className="check">
                {showAnswers ? <p>You scored {score}/5 correct answers {score<5 ? "☹": "🥳"}</p> : ""}
                <button className="check-btn" onClick={show}>{showAnswers ? "Play again": "Check answers" }</button>
            </div>
            {score===5 ? <Confetti /> :""}
        </main>)
}