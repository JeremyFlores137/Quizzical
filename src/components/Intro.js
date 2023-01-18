import React from 'react'
export default function Intro(props){
    /*const [chooseDifficulty, setChooseDifficulty] = React.useState("")
    const [selectCategory, setSelectCategory] = React.useState("")
    const [selectType, setSelectType] = React.useState("")*/
    /*function handleDifficulty(e){
        setChooseDifficulty(e.target.value)
        props.setDifficulty(e.target.value)
     }
  
     function handleCategory(e){
        setSelectCategory(e.target.value)
        props.setCategory(e.target.value)
     }
  
     function handleType(e){
        setSelectType(e.target.value)
        props.setType(e.target.value)
     } */ 
     const [formData, setFormData] = React.useState(
        {
            difficulty: "easy",
            typeOfQuestion: "multiple",
            category: ""
        }
    )
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    /*function handleSubmit(event) {
        event.preventDefault()
        // event.preventDefault()
        // submitToApi(formData)
        props.setSetUp(formData)
    }*/
    return(
        <main>
            <div className="intro-page">
                <h1 className="title">Quizzical</h1>
                <h3 className="intro">Welcome to Quizzical, the tester of your expertise</h3>
                <div className="set-up">
                    <label htmlFor="difficulty">Select difficulty:</label>
                    <select className="select-difficulty" 
                            value={formData.difficulty} 
                            onChange={handleChange}
                            name="difficulty"
                            id="difficulty">
                        <option value="easy">Easy</option>
                        <option value="medium" >Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <label htmlFor="typeOfQuestion">Select the type of questions:</label>
                    <select className="select-questions" 
                            value={formData.typeOfQuestion}
                            onChange={handleChange}
                            name="typeOfQuestion"
                            id="typeOfQuestion">
                        <option value="multiple">Multiple choice</option>
                        {/*<option value="boolean" >True and False</option>*/}
                    </select>
                    <label htmlFor="category">Select the category:</label>
                    <select className="select-category" 
                            value={formData.category} 
                            onChange={handleChange}
                            name="category"
                            id="category">
                        <option value="">Any category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals & Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime & Manga</option>
                        <option value="32">Entertainment: Cartoon & Animations</option>
                    </select>
                    <button className="start-btn" onClick={()=>props.start(formData)}>Start Quizz</button>
                </div>
            </div>
        </main>
    )
}