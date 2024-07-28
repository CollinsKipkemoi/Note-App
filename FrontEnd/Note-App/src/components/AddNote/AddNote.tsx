import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../components/ui/popover"
import { Button } from "../../components/ui/button"
import "./AddNote.css"
import AddTag from "./AddTag";
import { useState } from "react";
import { useEffect } from "react";

function AddNote() {
    const [tags, setTags] = useState<string[]>([])
    const [tag, setTag] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTag(e.target.value)
    }

    const addTag = () => { 
        if(tag.trim() !== "") {
            setTags([...tags, tag])
            setTag("")
            console.log(tags)
        }
    } 

    useEffect(() => {
        console.log(tags)
    }, [tags])
    return (
        <div className="add-Note" >
            <Popover >
                <PopoverTrigger>
                    <Button variant="outline">+Add</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <br />
                            <input type="text" placeholder="Title" name="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <br />
                            <textarea placeholder="Content" name="content" />
                        </div>
                        <AddTag tags={tags}
                            tag={tag}
                            handleChange={handleChange}
                            addTag = {addTag}
                        />
                        <button type="button" className="btn btn-warning">Add note</button>
                    </form>
                </PopoverContent>
            </Popover>

        </div>
    )
}

export default AddNote