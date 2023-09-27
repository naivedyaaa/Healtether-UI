import React from 'react';
import {Link} from 'react-router-dom';
import { ActionPropType } from '../../../../Models/ActionPropType';
import PropTypes from 'prop-types';
export default function Breadcrumb(props) {
    return (
        <div >
            <div className='flex flex-nowrap'>
                <nav className="bg-grey-light w-1/2 rounded-md py-2 ">
                    <ol className="list-reset flex py-4">
                        <li>
                            <a
                                href="#"
                                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                                {">"}
                            </span>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                                Library
                            </a>
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                                {">"}
                            </span>
                        </li>
                        <li className="text-neutral-500 dark:text-neutral-400">Data</li>

                    </ol>

                </nav>
                <div className='w-1/2 flex justify-end py-4'>
                    <Link
                        to={props.actionButton.route}
                        className="bg-white border  inline-block rounded-lg px-2.5 py-2.5 leading-normal text-teal-500 ">
                        <span className='flex'>
                            <i className="icon-[fluent--add-16-filled] text-[1.5rem] mr-2"></i>
                            {props.actionButton.title}</span>
                    </Link>
                    <div className='mr-3'></div>
                    <Link
                        to={'scheduleappointment'}
                        className="bg-teal-500 inline-block rounded-lg px-2.5 py-2.5 leading-normal text-white ">
                        <span className='flex'>
                            <i className="icon-[mdi--people-add] text-[1.5rem] mr-2"></i>
                            Schedule Appointment</span>
                    </Link>
                </div>

            </div>
            <hr className="h-px block bg-gray-300"></hr>
        </div>
    );
}

Breadcrumb.propTypes = {
    actionButton: PropTypes.object,
    showAppointment: PropTypes.bool,
    breadcrumb:PropTypes.array
}

Breadcrumb.defaultProps = {
    actionButton: new ActionPropType('addstaff','Add New Patient',()=>{}),
    showAppointment: true,
    breadcrumb:[]
}