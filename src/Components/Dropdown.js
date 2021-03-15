import React, { useContext } from 'react'
import { NewsContext } from '../NewsContext'

function Dropdown() {
    const { category }  = useContext(NewsContext)

    const handleChange = (e)=> {
        category(e.target.value)
      }

    return (
        <>
            <div>
                <select className="browser-default custom-select" onChange = {handleChange}>
                    <option value = "story">Filter by category</option>
                    <option name="job" value="job">Job</option>
                    <option name="story" value = "story">Story</option>
                    <option name="comment"  value = "comment">Comment</option>
                    <option name="poll"  value = "poll">Poll</option>
                    <option name="pollopt"  value = "pollopt">Pollopt</option>
                </select>
      </div>
        </>
    )
}

export default Dropdown
