// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {toggleAnswer: false}

  showAnswerText = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {toggleAnswer} = this.state

    if (toggleAnswer) {
      return (
        <div>
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  showAnswer = () => {
    const {toggleAnswer} = this.state
    this.setState({toggleAnswer: !toggleAnswer})
  }

  activeImage = () => {
    const {toggleAnswer} = this.state
    const imageUrl = toggleAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = toggleAnswer ? 'minus' : 'plus'

    return (
      <button onClick={this.showAnswer} className="button" type="button">
        <img className="logo" alt={altText} src={imageUrl} />
      </button>
    )
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails
    return (
      <li className="list-container">
        <div className="text-container">
          <h1 className="question-text">{questionText}</h1>
          {this.activeImage()}
        </div>
        {this.showAnswerText()}
      </li>
    )
  }
}
export default FaqItem
