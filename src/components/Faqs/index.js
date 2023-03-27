// Write your code here.
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="inner-container">
        <h1 className="heading">FAQs</h1>

        <ul className="items-container">
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} faqsDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
