import {useState} from 'react'
import {Link} from 'react-router-dom'
import success10 from '../../../assets/appointmentsuccess10.png'

const AppointmentSuccess=()=>{

    return(
        <div className='flex flex-col justify-center items-center pt-1'>
            <i className="icon-[charm--circle-tick] text-[50px] text-[#03BF9C] "></i>
            <p className='text-l w-[200px]'>The appointment has been scheduled successfully</p>
            <img className='w-24 pt-1 pb-2' src={success10} alt="SUCCESS" />
            <div className='text-md flex flex-col border border-[#A342EF] shadow-[#E2C2FA] bg-[#F9F4FE] pt-4 pb-2 px-4 rounded-lg shadow-md'>
                <h1 className='text-xl text-[#006270] self-start pb-2'>Appointment details</h1>
                <p className='self-start'>Patient name : <span className='text-[#006270]'>Ramesh Patel</span></p>
                <div className='flex justify-between'>
                    <p>Mode : <span className='text-[#006270] mr-5'>Physical</span></p>
                    <p>Date : <span className='text-[#006270]'>1 July, 2023</span></p>
                </div>
                <div className='flex justify-between'>
                    <p>Slot no. : <span className='text-[#006270]'>2</span></p>
                    <p>Time : <span className='text-[#006270]'>14:20-14:40</span></p>
                </div>
                <span className='text-[#6C6C6C] pt-2 text-sm'>Appointment Booked on {new Date().toUTCString().slice(5, 16)}</span>
            </div>
            <div className='flex mt-4 w-[372px] justify-between'>
                <button className='bg-[#03BF9C] w-[175px] h-[40px] text-white'>Send Whatsapp Link</button>
                <Link to='/dashboard'><button className='border w-[175px] h-[40px] text-center border-black'>Exit</button></Link>
            </div>
        </div>
    )
}
export default AppointmentSuccess