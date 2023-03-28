// Write your code here
import {Component} from 'react'

import './index.css'

import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {title: '', date: '', isFav: false, list: []}

  onTitleClick = e => {
    console.log(e.target.value)
    this.setState({title: e.target.value})
  }

  onDateClick = e => {
    console.log(e.target.value)
    this.setState({date: e.target.value})
  }

  onformSubmit = e => {
    e.preventDefault()
    const {title, date, isFav, list} = this.state

    const newObj = {title, date: new Date(), isFav}

    if (list.length === 0) {
      this.setState({list: [...newObj]})
    } else {
      this.setState(pi => ({list: [...pi.list, newObj]}))
    }
  }

  render() {
    const {isFav} = this.state
    return (
      //   <div className="mc1">
      //     <div className="c1">
      //       <h1 className="main-heading">Add Appointment</h1>
      //       <div className="r1">
      //         <div className="form-sep">
      //           <form className="form" onSubmit={this.onformSubmit}>
      //             <label htmlFor="title" className="row">
      //               TITLE
      //             </label>
      //             <input
      //               type="text"
      //               placeholder="Title"
      //               id="title"
      //               onChange={this.onTitleClick}
      //             />
      //             <label htmlFor="calendar">DATE</label>
      //             <input type="date" id="calendar" onChange={this.onDateClick} />
      //             <br />
      //             <button
      //               type="submit"
      //               className="button-1"
      //               onClick={this.onBtnClick}
      //             >
      //               Add
      //             </button>
      //           </form>
      //         </div>
      //         <img
      //           src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
      //           alt="appointments"
      //           className="image-1"
      //         />
      //       </div>
      //       <hr className="h-rule" />
      //       <div className="r2">
      //         <h1 className="Appointments-heading">Appointments</h1>
      //         <p className="para-1">starred</p>
      //       </div>
      <div className="Appointments-container">
        <AppointmentItem isN={isFav} />
      </div>
      //     </div>
      //   </div>
    )
  }
}
export default Appointments
