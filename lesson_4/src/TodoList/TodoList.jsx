import { useState } from "react"
import Button from "../UserInfoForm/Button.jsx"

const TodoList = () => {
    const localJob = JSON.parse(localStorage.getItem("job"))
    const [job, setJob] = useState("")
    const [jobs, setJobs] = useState(localJob ?? [])
    const [editIndex, setEditIndex] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!job.trim()) return

        setJobs(prev => {
            let newJobs
            if(editIndex !== null) {
                newJobs = [...prev]
                newJobs[editIndex] = job  
                setEditIndex(null)
            } 
            else {
                // add
                newJobs = [...prev, job]
            }

            localStorage.setItem("job", JSON.stringify(newJobs))
            return newJobs
        })

        setJob("")
    }

    const handleDelete = (value) => {
        setJobs(prev => {
            const newJobs = prev.filter((_, i) => i !== value)
            localStorage.setItem("job", JSON.stringify(newJobs))
            return newJobs
        })
    }

    const handleEdit = (value) => {
        setJob(jobs[value])
        setEditIndex(value)
    }

    return (
        <div>
            <form className="form-input" onSubmit={handleSubmit}>
                <input
                    value={job}
                    onChange={e => setJob(e.target.value)}
                />
                <Button type="submit" label="Add" />
            </form>

            <ul>
                {jobs.map((job, value) => (
                    <li key={value}>
                        {job}
                        <button onClick={() => handleEdit(value)}>Sửa</button>
                        <button onClick={() => handleDelete(value)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
