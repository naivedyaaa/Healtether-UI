import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import './index.css'
import {persistStore} from "redux-persist";
import store from "./store/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/Shared/error-page.jsx";
import Appointments from "./components/v1/Appointments/Appointments.jsx";
import ScheduleAppointment from "./components/v1/Appointments/ScheduleAppointment.jsx";
import Layout from "./components/v1/common/Layout.jsx";
import { Dashboard } from "./components/v1/Dashboard/Dashboard.jsx";
import PatientsRecord from "./components/v1/Patients/AddPatient.jsx";
import  StaffsOverview from "./components/v1/Staffs/StaffsOverview";
 import  AddStaff  from "./components/v1/Staffs/AddStaff";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
            path: "dashboard",
            element: <Dashboard/>
            },
            {
                path: "appointment",
                element: <Appointments/>
            },
            {
              path: "scheduleappointment",
              element: <ScheduleAppointment/>
            },
            {
              path: "chats",
              element: <PatientsRecord/>
            },
            {
              path: "managestaffs",
              element: <StaffsOverview/>
            },
            {
                path: "addstaff",
                element: <AddStaff/>
              },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

const persistor = persistStore(store);
// root.render(   <React.StrictMode>     <Provider store={store}>
// <PersistGate persistor={persistor}>         <App />       </PersistGate>
// </Provider>   </React.StrictMode> );