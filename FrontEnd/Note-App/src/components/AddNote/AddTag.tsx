import { IoMdAdd } from "react-icons/io";
import "./AddNote.css";

function AddTag({ tag, handleChange, addTag }: { tags: string[], tag: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, addTag: () => void }) {
  return (
    <div className="addNote">
      <input type="text" name="tag" placeholder="Enter tag" value={tag} onChange={handleChange} />
      <div className="addButton" onClick={addTag}>
        <IoMdAdd />
      </div>
    </div>
  );
}

export default AddTag;