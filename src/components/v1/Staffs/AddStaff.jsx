import React from "react";
import { useState , useRef} from "react";
import img from "../../../assets/profilePhoto.png";

export default function AddStaff() {
    const [imgSrc,setImgSrc]=useState(img);
    const [docUploadName,setDocUploadName]=useState([]);
    const imageRef=useRef("");
    const docUploadRef=useRef("");
    function profilePhotoClicked(){
        imageRef.current.click()
    }
    function profilePhotoUpdate(e){
        setImgSrc(URL.createObjectURL(e.target.files[0]))
    }
    function uploadDocumentClicked(){
        docUploadRef.current.click()
    }
    function docUploadUpdate(e){
        let docnames=[]
        for(var i=0;i<e.target.files.length;i++){
            docnames[i]=e.target.files[i]
        }
        setDocUploadName(docnames)
    }
        return (
        <div className="md:flex flex-wrap font-['arimo'] mt-5 lg:divide-x">
            <div className="lg:w-1/2 sm:w-full lg:px-5 pb-8">
            <div className="flex flex-row pb-7 border-b border-gray-300">
                <div>
                    <img className="h-[212px] w-[212px] rounded-[50%] object-cover" src={imgSrc} alt="Set Image" onClick={profilePhotoClicked} />
                    <input className="hidden" type="file" ref={imageRef} onChange={profilePhotoUpdate}/>
                </div>
                <div className="flex flex-col justify-between pl-8 w-[50%]">
                    <p className="bg-gray-300 p-1 w-fit text-xs rounded-md px-2 mb-2">Admin</p>
                    <input className="rounded-md h-16 text-3xl" type="text" placeholder="Name" />
                    <input className="rounded-md h-8" type="text" placeholder="Specialization" />
                    <input className="rounded-md h-8" type="text" placeholder="Role"/>
                    <button className="text-xs w-fit bg-teal-500 text-white rounded-md py-1 px-2 mt-2">Save</button>
                </div>
            </div>
            <div className="text-base font-semibold tracking-wider mt-4"> DOCUMENTS
            <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                    </div>

                    <div className="flex flex-row mt-2 lg:mb-2 xs:mb-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">ID type</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <select className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full">
                                <option>Select Id</option>
                                <option>Select Id</option>
                                <option>Select Id</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2 lg:mb-2 xs:mb-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">ID no.</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="number" className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 lg:mb-8 xs:mb-4">
                        <div className="pt-2 flex flex-row">
                            <label className="font-semibold text-base  text-[#009394]">Other Documents :</label>
                        </div>
                        <div className="w-3/4 justify-start flex flex-col">
                            <button className="bg-gray-800 text-white mt-2 flex justify-between items-center p-2 rounded-md"onClick={uploadDocumentClicked}>Browse to upload documents <i className="icon-[bytesize--upload] text-2xl "></i> </button>
                            <input className="hidden" type="file" multiple ref={docUploadRef} onChange={docUploadUpdate}/>
                            {docUploadName==false?<p className="text-gray-500 pt-2">No entries found.</p>:docUploadName.map((e,index)=>{
                                console.log(docUploadName)
                                return(
                                    <div className="flex justify-between pt-2 items-center border-b-2">
                                        <p className="text-gray-500">{(index+1)+". "+e.name}</p>
                                        <i className="icon-[mdi--file-find] text-md "></i>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <hr className="h-px block bg-gray-300 px-4"></hr>

                    <div className="text-base font-semibold tracking-wider md:mt-4"> BANK DETAILS
                      <div className="w-20 h-1 bg-[#009394]"></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">UPI ID</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="number" className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Bank</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <select className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full">
                                <option></option>
                                <option>Select Id</option>
                                <option>Select Id</option>
                                <option>Select Id</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Acc No.</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="number" className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">IFSC code</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="text" className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Account Holder</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="text" className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
            </div>
            <div className="lg:w-1/2 sm:w-full lg:px-5  ">
                    <div className="text-base font-semibold tracking-wider">PERSONAL DETAILS
                      <div className="lg:w-20 xs:w-12 h-1 bg-[#009394]"></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Birthday</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="date" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Age</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="number" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Gender</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <select className="rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Weight</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="number" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div>

                    <div className="flex flex-row mt-2 lg:mb-6 xs:mb-4">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Height</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="number" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-2/4 xs:w-full"/>
                        </div>
                    </div>

                    <hr className="h-px block bg-gray-300 px-4 "></hr>


                    <div className="text-base font-semibold tracking-wider lg:mt-4 xs:mt-2">CONTACT DETAILS
                      <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Mobile</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="tel" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full" />
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Whatsapp</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="tel" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Email</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <input type="email" className="rounded ml-3 text-[#484d63 ] text-sm lg:w-3/4 xs:w-full" placeholder="xyz@gmail.com"/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2 lg:mb-6 xs:mb-4">
                        <div className="w-1/4 pt-2">
                            <label className="font-semibold text-base  text-[#009394]">Address</label>
                        </div>
                        <div className="w-3/4 justify-start flex">
                            <div className="font-semibold text-base  text-[#009394] pt-2">:</div>
                            <textarea className="rounded ml-3 text-[#484d63 ] text-sm form-textarea lg:w-3/4 xs:w-full" rows="5"></textarea>
                        </div>
                    </div>

                    <hr className="h-px block bg-gray-300 px-4"></hr>

                    <div className="text-base font-semibold tracking-wider md:mt-4 flex flex-col">PAYMENT HISTORY
                        <div className="lg:w-20 xs:w-12 h-1 bg-[#009394] "></div>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm pt-5 pb-6 border-gray-300 border-b">No entities found</p>

                    </div>


            </div>
        </div>

    )
};