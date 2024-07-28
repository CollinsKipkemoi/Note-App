import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import "./AddNote.css";
import AddTag from "./AddTag";

function AddNote() {
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const addTag = () => {
    if (tag.trim() !== "") {
      setTags([...tags, tag]);
      setTag("");
      console.log(tags);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, content, tags });
  };

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <div className="add-Note">
      <Popover>
        <PopoverTrigger>
          <button type="button" className="btn btn-warning">Add note</button>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <br />
              <input 
                type="text" 
                placeholder="Title" 
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <br />
              <textarea 
                placeholder="Content" 
                name="content" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <AddTag 
              handleChange={handleChange}
              addTag={addTag}
              tag={tag}
            />
            <button type="submit" className="btn btn-warning">Add note</button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default AddNote;