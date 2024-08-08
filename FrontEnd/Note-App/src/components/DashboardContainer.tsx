import { useEffect, useState } from "react";
import AxiosInstance from "../utils/AxiosInstance";
import Dashboard from "./Dashboard";

function DashboardContainer() {
    const [notes, setNotes] = useState([]);
    const fetchData = async () => {
        const token = localStorage.getItem("accessToken");
        // console.log(token);
        try {
            const response = await AxiosInstance.get("/all-notes", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.data.error) {
                setNotes(response.data.notes);
            } else {
                console.log("Error: ", response.data.message);
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchData();
    }, [])
  return (
    <>
        <Dashboard notes={notes} fetchData = {fetchData}/>
    </>
  )
}

export default DashboardContainer