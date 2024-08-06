import Navbar from "./Navbar"
import NoteCard from "./NoteCard/NoteCard"
import './Dashboard.css'
import AddNote from "./AddNote/AddNote"
import AxiosInstance from "../utils/AxiosInstance"
import { useEffect, useState } from "react"

type Note = {
  _id: string,
  title: string,
  date: string,
  content: string,
  tags: string[],
  isPinned: boolean
}

function Dashboard() {
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
    <div className="dashboard">
      <Navbar />
      <AddNote />

      <div className="notes container ">
        {/* <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /> */}
        {notes.map((note: Note) => {
          return <NoteCard
            key={note._id}
            title={note.title}
            date={note.date}
            content={note.content}
            tags={note.tags.map((tag: string) => `#${tag}`)}
            isPinned={note.isPinned}
            onEdit={() => console.log("Edit")}
            onDelete={() => console.log("Delete")}
            onPin={() => console.log("Pin")}
          />
        })}

      </div>
    </div>
  )
}

export default Dashboard