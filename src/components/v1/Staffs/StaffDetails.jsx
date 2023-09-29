import React from "react";
import imgSrc from "../../../assets/staff-profile.png";

export default function StaffDetails() {
        return (
        <div className="md:flex flex-wrap font-['arimo'] mt-5 lg:divide-x">
            <div className="lg:w-1/2 sm:w-full lg:px-5">
            <div className="flex flex-row ">
                <div>
                    <img className="h-[212px] w-[212px] rounded-[50%] object-cover" src={imgSrc} alt="Set Image" />
                </div>
                <div className="flex flex-col justify-between pl-4 w-[50%]">
                    <p className="bg-gray-300 p-1 w-fit text-xs rounded-md px-2 mb-5 mt-5">Admin</p>
                    <p className="text-3xl mb-4">Dr. Kim Jones</p>
                    <p className="rounded-md h-8">MBBS,DLO,MS(ENT)</p>
                    <p className="rounded-md h-8 text-[#740AC7] text-sm">ENT specialist</p>
                    <button className="text-xs w-fit bg-teal-500 text-white rounded-md py-1 px-2 mt-2">Save</button>
                </div>
            </div>
            <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>
            <div className="text-base font-semibold tracking-wider mt-4 "> DOCUMENTS
            <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                    </div>

                    <div className="flex flex-row mt-2 lg:mb-2 xs:mb-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">ID type</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center ">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-3/4 xs:w-full text-[#6D6D6D] pt-2">Aadhar</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2 lg:mb-2 xs:mb-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">ID no.</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p  className="ml-3 text-[#484d63 ] text-md lg:w-3/4 xs:w-full text-[#6D6D6D] pt-2">9658 4521 6563 8954</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="pt-2 flex flex-row">
                            <p className="font-semibold text-base text-[#006270]">Other Documents :</p>
                        </div>
                        <div className="w-3/4 justify-start flex flex-col">
                            <div className="flex justify-between pt-2 items-center border-b-2">
                                <p className="text-[#6D6D6D]">1. Aadhar card.png</p>
                                <i className="icon-[mdi--file-find] text-md "></i>
                            </div>
                        </div>
                    </div>
                    <hr className="h-px block bg-gray-300 px-4 mt-8 mb-8"></hr>

                    <div className="text-base font-semibold tracking-wider"> BANK DETAILS
                      <div className="w-20 h-1 bg-[#009394]"></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">UPI ID</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#6D6D6D] text-md lg:w-3/4 xs:w-full pt-2">ram214@ybl</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Bank</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#6D6D6D] text-md lg:w-3/4 xs:w-full pt-2">Indian Bank</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Acc No.</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p  className="ml-3 text-[#6D6D6D] text-md lg:w-3/4 xs:w-full pt-2">5213 5123 6554 5894</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">IFSC code</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#6D6D6D] text-md lg:w-3/4 xs:w-full pt-2">IDBI000H013</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Account Holder</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#6D6D6D] text-md lg:w-3/4 xs:w-full pt-2">Ram Menon</p>
                        </div>
                    </div>

                    <hr className="h-px bg-gray-300 px-4 mb-8 mt-8"></hr>
            </div>

            <div className="lg:w-1/2 sm:w-full lg:px-5 text-[#009394] ">
                    <div className="text-base font-semibold tracking-wider text-black">PERSONAL DETAILS
                      <div className="lg:w-20 xs:w-12 h-1 bg-[#009394]"></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Birthday</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">4/12/1993</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Age</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">30</p>

                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Gender</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">male</p>
                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Weight</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">NA</p>
                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Height</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">NA</p>
                        </div>
                    </div>
                    
                    <hr className="h-px block bg-gray-300 mt-8 mb-8"></hr>

                    <div className="text-base font-semibold tracking-wider text-black">CONTACT DETAILS
                      <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Mobile</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">+91 986 563214</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Whatsapp</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">+91 896 452167</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Email</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">rameshpatel@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <p className="font-semibold text-base  text-[#006270]">Address</p>
                        </div>
                        <div className="w-3/4 justify-start flex items-center">
                            <div className="font-semibold text-base  text-[#006270] pt-2">:</div>
                            <p className="ml-3 text-[#484d63 ] text-md lg:w-2/4 xs:w-full pt-2">Plot No. 4-75/1, Madhavi Nagar, Opposite BHEL R(&)D Gate, BalaNagar Hyderabad, Telangana, 500037.</p>
                        </div>
                    </div>

                    <hr className="h-px block bg-gray-300 mt-8 mb-8"></hr>

                    <div className="text-base font-semibold tracking-wider flex flex-col text-black">PAYMENT HISTORY
                        <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] mb-2 "></div>
                        <table className="leading-[30px]">
                            <thead className="text-left text-[#6D6D6D] text-sm leading-9">
                                <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Day</th>
                                    <th>Mode</th>
                                    <th>Amount</th>
                                    <th>Receipt</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#009394] text-md">
                                <tr>
                                    <td>1</td>
                                    <td>01/07/23</td>
                                    <td>Sat.</td>
                                    <td>UPI</td>
                                    <td>₹ 1000</td>
                                    <td>High_fev...<i className="icon-[mdi--file-find] text-md text-black "></i></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>26/05/23</td>
                                    <td>Mon.</td>
                                    <td>Bank</td>
                                    <td>₹ 200</td>
                                    <td>Saline C...<i className="icon-[mdi--file-find] text-md text-black "></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr className="h-px block bg-gray-300 mt-8 mb-8"></hr>

            </div>
        </div>

    )
};