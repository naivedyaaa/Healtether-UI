import React, { useState } from "react";

const PatientsRecord = () => {
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    mobile: "",
  });

  const [personalDetails, setPersonalDetails] = useState({
    birthday: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [contactDetails, setContactDetails] = useState({
    mobile: "",
    email: "",
    address: "",
  });

  const [medicalRecords, setMedicalRecords] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  const [documentDetails, setDocumentDetails] = useState({
    idType: "",
    idNumber: "",
    otherDocuments: [],
  });

  const [bankDetails, setBankDetails] = useState({
    upiId: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    accountHolder: "",
  });

  const [procedureRecords, setProcedureRecords] = useState([]);
  const [appointmentsHistory, setAppointmentsHistory] = useState([]);

  const handleBasicDetailsChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails({
      ...basicDetails,
      [name]: value,
    });
  };

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  const handleMedicalRecordUpload = (e) => {
    const files = e.target.files;
    setMedicalRecords([...medicalRecords, ...files]);
  };

  const handlePaymentHistoryUpload = (e) => {
    const files = e.target.files;
    setPaymentHistory([...paymentHistory, ...files]);
  };

  const handleDocumentDetailsChange = (e) => {
    const { name, value } = e.target;
    setDocumentDetails({
      ...documentDetails,
      [name]: value,
    });
  };

  const handleOtherDocumentUpload = (e) => {
    const files = e.target.files;
    setDocumentDetails({
      ...documentDetails,
      otherDocuments: [...documentDetails.otherDocuments, ...files],
    });
  };

  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({
      ...bankDetails,
      [name]: value,
    });
  };

  const handleProcedureRecordUpload = (e) => {
    const files = e.target.files;
    setProcedureRecords([...procedureRecords, ...files]);
  };

  const handleAppointmentsHistoryUpload = (e) => {
    const files = e.target.files;
    setAppointmentsHistory([...appointmentsHistory, ...files]);
  };

  const handleSubmitPersonalDetails = (e) => {
    e.preventDefault();
    console.log("Submitting Personal Details:", personalDetails);
  };

  const handleSubmitBasicDetails = (e) => {
    e.preventDefault();
    console.log("Submitting Basic Details:", basicDetails);
  };

  const handleSubmitContactDetails = (e) => {
    e.preventDefault();
    console.log("Submitting Contact Details:", contactDetails);
  };

  const handleSubmitMedicalRecords = (e) => {
    e.preventDefault();
    console.log("Submitting Medical Records:", medicalRecords);
  };

  const handleSubmitPaymentHistory = (e) => {
    e.preventDefault();
    console.log("Submitting Payment History:", paymentHistory);
  };

  const handleSubmitDocumentDetails = (e) => {
    e.preventDefault();
    console.log("Submitting Document Details:", documentDetails);
  };

  const handleSubmitBankDetails = (e) => {
    e.preventDefault();
    console.log("Submitting Bank Details:", bankDetails);
  };

  const handleSubmitProcedureRecords = (e) => {
    e.preventDefault();
    console.log("Submitting Procedure Records:", procedureRecords);
  };

  const handleSubmitAppointmentsHistory = (e) => {
    e.preventDefault();
    console.log("Submitting Appointments History:", appointmentsHistory);
  };

  return (
    <div className="flex  ">
      <div className="w-1/2  px-8  ">
        <form onSubmit={handleSubmitBasicDetails}>
          <div className="flex w-full gap-4 ">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold mt-6">
                PR
              </div>
            </div>

            <div className=" w-4/5 gap-10 mt-2 mb-2">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full  border rounded-md  border-current  mt-2 mb-2"
                value={basicDetails.name}
                onChange={handleBasicDetailsChange}
                placeholder="Name"
              />

              <input
                type="number"
                id="mobile"
                name="mobile"
                className="w-full  border rounded-md  border-current  mt-2 mb-2"
                value={basicDetails.mobile}
                onChange={handleBasicDetailsChange}
                placeholder="Mobile Number"
              />

              <button
                type="submit"
                className=" w-auto p-2 mt-8 mx-4 text-sm bg-green-700 text-white rounded hover:bg-green-600"
              >
                Save Changes
              </button>

              <button
                type=""
                className=" w-auto p-2 mt-8 mx-4 text-sm bg-slate-400 text-white rounded hover:bg-green-600"
              >
                Start Consultations
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center w-full mt-8 ">
            <div className="border border-solid 	w-full "></div>
          </div>
        </form>

        <form onSubmit={handleSubmitPersonalDetails}>
          <div className="flex gap-10   pt-12 ">
            <h2 className=" text-base font-semibold ">Personal Details</h2>
            <button
              type="submit"
              className=" w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600"
            >
              Done
            </button>
          </div>

          <div className="w-80 gap-4 ">
            <div className="flex justify-between gap-20 mt-2 mb-2">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-green-900"
              >
                Birthday:
              </label>

              <input
                type="date"
                id="birthday"
                name="birthday"
                className="w-full  border rounded-md  border-current"
                value={personalDetails.birthday}
                onChange={handlePersonalDetailsChange}
              />
            </div>

            <div className="flex justify-between gap-10 mt-2 mb-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-green-900"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="  border rounded-md border-current "
                value={personalDetails.age}
                onChange={handlePersonalDetailsChange}
              />
            </div>

            <div className="flex justify-between gap-20 mt-2 mb-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-green-900"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={personalDetails.gender}
                onChange={handlePersonalDetailsChange}
                className="  w-full border rounded-md border-current"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex justify-between gap-10 mt-2 mb-2">
              <label
                htmlFor="height"
                className="block text-sm font-medium text-green-900"
              >
                Height:
              </label>
              <input
                type="number"
                id="height"
                name="height"
                className="  border rounded-md border-current "
                value={personalDetails.height}
                onChange={handlePersonalDetailsChange}
              />
            </div>

            <div className="flex justify-between gap-10 mt-2 mb-2">
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-green-900"
              >
                Weight:
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                className=" border rounded-md border-current "
                value={personalDetails.weight}
                onChange={handlePersonalDetailsChange}
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-full mt-8 ">
            <div className="border border-solid 	w-full "></div>
          </div>
        </form>

        <form onSubmit={handleSubmitContactDetails}>
          <div className="flex gap-10  pt-12">
            <h2 className="text-base font-semibold ">Contact Details</h2>

            <button
              type="submit"
              className="w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600"
            >
              Done
            </button>
          </div>

          <div className="w-80 gap-4">
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-green-900"
              >
                Mobile:
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                className=" border rounded-md border-current"
                value={contactDetails.mobile}
                onChange={handleContactDetailsChange}
              />
            </div>

            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-900"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="  border rounded-md border-current"
                value={contactDetails.email}
                onChange={handleContactDetailsChange}
              />
            </div>
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-green-900"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className=" border rounded-md border-current"
                value={contactDetails.address}
                onChange={handleContactDetailsChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-8">
            <div className="border border-solid   w-full "></div>
          </div>
        </form>

        <form onSubmit={handleSubmitMedicalRecords}>
          <div className="flex gap-10 pt-12">
            <h2 className="text-base font-semibold ">Medical Records</h2>

            <button
              type="submit"
              className=" w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600  "
            >
              Done{" "}
            </button>
          </div>

          <div>
            <input
              type="file"
              multiple
              onChange={handleMedicalRecordUpload}
              className="bg-slate-600"
            />
          </div>

          <div className="flex justify-center items-center w-full mt-8 ">
            <div className="border border-solid   w-full "></div>
          </div>
        </form>

        <form onSubmit={handleSubmitPaymentHistory}>
          <div className="flex gap-10 pt-12">
            <h2 className="text-base font-semibold ">Payment History</h2>
            <button
              type="submit"
              className=" w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600 "
            >
              Done{" "}
            </button>
          </div>

          <div>
            <input type="file" multiple onChange={handlePaymentHistoryUpload} />
          </div>
          <div className="flex justify-center items-center w-full mt-8">
            <div className="border border-solid   w-full "></div>
          </div>
        </form>
      </div>

      <div className="border"></div>

      <div className="w-1/2  px-8">
        <form onSubmit={handleSubmitDocumentDetails}>
          <div className="flex gap-10 pt-12 ">
            <h2 className="text-base font-semibold">Document Details</h2>
            <button
              type="submit"
              className=" w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600"
            >
              Done
            </button>
          </div>

          <div className=" w-80 gap-4">
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="idType"
                className="block text-sm font-medium text-green-900"
              >
                ID Type:
              </label>

              <select
                id="idType"
                type="text"
                name="idType"
                className="  border rounded-md border-current  "
                value={documentDetails.idType}
                onChange={handleDocumentDetailsChange}
              >
                <option value="">Select an ID type</option>
                <option value="aadhar">Aadhar Card</option>
                <option value="pan">Pan Card</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="idNumber"
                className="block text-sm font-medium text-green-900"
              >
                ID Number:
              </label>
              <input
                id="idNumber"
                name="idNumber"
                type="text"
                className="  border rounded-md border-current "
                value={documentDetails.idNumber}
                onChange={handleDocumentDetailsChange}
              />
            </div>
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="otherDocuments"
                className="block text-sm font-medium text-green-900"
              >
                Other Documents:
              </label>
              <input
                type="file"
                multiple
                onChange={handleOtherDocumentUpload}
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-8">
            <div className="border border-solid   w-full "></div>
          </div>
        </form>

        <form onSubmit={handleSubmitBankDetails}>
          <div className="flex gap-10 pt-12">
            <h2 className="text-base font-semibold ">Bank Details</h2>

            <button
              type="submit"
              className=" w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600"
            >
              Done
            </button>
          </div>
          <div className="w-80  gap-4">
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="upiId"
                className="block text-sm font-medium text-green-900"
              >
                UPI ID:
              </label>
              <input
                id="upiId"
                name="upiId"
                type="text"
                className="  border rounded-md border-current "
                value={bankDetails.upiId}
                onChange={handleBankDetailsChange}
              />
            </div>
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="bankName"
                className="block text-sm font-medium text-green-900"
              >
                Bank Name:
              </label>
              <input
                type="text"
                className=" border rounded-md  border-current"
                value={bankDetails.bankName}
                onChange={handleBankDetailsChange}
              />
            </div>
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium text-green-900"
              >
                Account Number:
              </label>
              <input
                type="text"
                className="  border rounded-md border-current "
                value={bankDetails.accountNumber}
                onChange={handleBankDetailsChange}
              />
            </div>
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="ifscCode"
                className="block text-sm font-medium text-green-900"
              >
                IFSC Code:
              </label>
              <input
                type="text"
                className="  border rounded-md border-current "
                value={bankDetails.ifscCode}
                onChange={handleBankDetailsChange}
              />
            </div>
            <div className="flex justify-between  gap-10  mt-2 mb-2">
              <label
                htmlFor="accountHolder"
                className="block text-sm font-medium text-green-900"
              >
                Account Holder:
              </label>
              <input
                type="text"
                className="border rounded-md border-current "
                value={bankDetails.accountHolder}
                onChange={handleBankDetailsChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-8">
            <div className="border border-solid   w-full "></div>
          </div>
        </form>

        <form onSubmit={handleSubmitProcedureRecords}>
          <div className="flex gap-10 pt-12">
            <h2 className="text-base font-semibold  ">Procedure Records</h2>
            <button
              type="submit"
              className=" w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600  "
            >
              Done{" "}
            </button>
          </div>
          <div>
            <input
              type="file"
              multiple
              onChange={handleProcedureRecordUpload}
            />
          </div>
          <div className="flex justify-center items-center w-full ">
            <div className="border border-solid   w-full "></div>
          </div>
        </form>

        <form onSubmit={handleSubmitAppointmentsHistory}>
          <div className="flex gap-10 pt-12">
            <h2 className="text-base font-semibold "> Appointments History</h2>
            <button
              type="submit"
              className=" w-10 text-xs bg-green-700 text-white rounded hover:bg-green-600 "
            >
              Done
            </button>
          </div>

          <div>
            <input
              type="file"
              multiple
              onChange={handleAppointmentsHistoryUpload}
            />
          </div>
          <div className="flex justify-center items-center w-full mt-8">
            <div className="border border-solid   w-full "></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientsRecord;