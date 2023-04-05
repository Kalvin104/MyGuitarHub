import React from 'react'
import people from './people'

export default function Review(props) {
    const checkNumber = (number) => {
        if(number > people.length - 1){
        return 0
        }
        if(number < 0){
            return people.length - 1
        }
        return number
    }

    const personSub2 = people[checkNumber(props.index - 2)]
    const personSub1 = people[checkNumber(props.index - 1)]
    const person = people[(props.index)]
    const person2 = people[checkNumber(props.index + 1)]
    const person3 = people[checkNumber(props.index + 2)]
    const {id, firstName, secondName, age, profession, hobby} = person

  return (
    <article className="review">
        <div className="review-container review-container-sub2">
            <p className="name">{personSub2.firstName + " "}{personSub2.secondName}</p>
            <p className="age">{personSub2.age}</p>
            <p className="profession">{personSub2.profession}</p>
            <p className="hobby">{personSub2.hobby}</p>
            <p>{personSub2.id}</p>
        </div>

        <div className="review-container review-container-sub1">
            <p className="name">{personSub1.firstName + " "}{personSub1.secondName}</p>
            <p className="age">{personSub1.age}</p>
            <p className="profession">{personSub1.profession}</p>
            <p className="hobby">{personSub1.hobby}</p>
            <p>{personSub1.id}</p>
        </div>

        <div className="review-container">
            <p className="name">{firstName + " "}{secondName}</p>
            <p className="age">{age}</p>
            <p className="profession">{profession}</p>
            <p className="hobby">{hobby}</p>
            <div className="expand">Expand</div>
        </div>

        <div className="review-container review-container-add1">
            <p className="name">{person2.firstName + " "}{person2.secondName}</p>
            <p className="age">{person2.age}</p>
            <p className="profession">{person2.profession}</p>
            <p className="hobby">{person2.hobby}</p>
            <p>{person2.id}</p>
        </div>

        <div className="review-container review-container-add2">
            <p className="name">{person3.firstName + " "}{person3.secondName}</p>
            <p className="age">{person3.age}</p>
            <p className="profession">{person3.profession}</p>
            <p className="hobby">{person3.hobby}</p>
            <p>{person3.id}</p>
        </div>
    </article>
  )
}
