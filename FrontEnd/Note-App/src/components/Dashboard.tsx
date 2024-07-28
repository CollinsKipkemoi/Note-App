import Navbar from "./Navbar"
import NoteCard from "./NoteCard/NoteCard"
import './Dashboard.css'
import AddNote from "./AddNote/AddNote"

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="notes container ">
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}
        
        />
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        />
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        />
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        /><NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        />
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}

        />
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}
        />
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}
        />
        <NoteCard title="Test"
          date="2021-05-01"
          content="This is a test note"
          tags={["#test"]}
          isPinned={false}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPin={() => console.log("Pin")}
        />
        <AddNote />
      </div>
    </div>
  )
}

export default Dashboard