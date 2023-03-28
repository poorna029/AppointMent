// Write your code here
import './index.css'

const AppointmentItem = isFav => {
  const {isN} = isFav
  return (
    <div className="col1">
      <div className="row1">
        <h1>heading</h1>
        <img
          src={
            isN
              ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
          }
          alt=""
        />
      </div>
      <p>{new Date()}</p>
    </div>
  )
}

export default AppointmentItem
