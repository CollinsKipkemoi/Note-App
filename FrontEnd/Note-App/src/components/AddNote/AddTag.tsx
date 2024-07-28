import React from "react";

function AddTag({ handleChange, addTag, tag }: { handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, addTag: () => void, tag: string }) {
  return (
    <div className="addNote">
      <input 
        type="text" 
        placeholder="Enter tag" 
        value={tag}
        onChange={handleChange}
      />
      <button type="button" onClick={addTag}>
        +
      </button>
    </div>
  );
}

export default AddTag;