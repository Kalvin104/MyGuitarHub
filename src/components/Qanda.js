import React from 'react'

export default function Qanda(props) {

  const [question, setQuestion] = React.useState(false)
  function openQuestion(){
      setQuestion(toggleState => !toggleState)
  }
  return (
    <div>
        <div className="qanda-container">
          <div className="qanda-question" onClick={openQuestion}>
            <p>{props.id}: {props.question} {question ? "-" : "+"}</p>
          </div>
          <div className="qanda-answer">
            {question && <p>{props.answer}</p>}
          </div>
        </div>
    </div>
  )
}
