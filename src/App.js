import React from 'react';
import './App.css';
import Intro from './components/Intro'
import Question from './components/Question';
import { shuffle } from 'lodash'

function App() {
  const [hasStarted, setHasStarted] = React.useState(false)
  //defining the state for 5 questions
  const [quest, setQuest] = React.useState([])
  const [setUp, setSetUp] = React.useState({})
  function start(data){
    setHasStarted(!hasStarted)
    setSetUp(data)
  }
  // for fetch calls to an API purposes
  React.useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=5&difficulty=${setUp.difficulty}&type=${setUp.typeOfQuestion}&category=${setUp.category}`)
      .then(res => res.json())
      .then(data => {
        const questions=[]
        data.results.forEach((ele) => {
        questions.push(
            {question: ele.question, 
            answers: shuffle([ele.correct_answer,...ele.incorrect_answers]), 
            coAnswer: ele.correct_answer})
        })
      setQuest(questions)
    })
  },[setUp.difficulty,setUp.typeOfQuestion,setUp.category])
  return (
    <div className="App">
        {hasStarted ? 
          <Question quest={quest}/> : 
          <Intro start={start}
          />}
    </div>
  );
}

export default App;
