import React, { useState } from "react";

export default function AddCandidate(props) {

    const defaultCandid = { id: "", name: "", age: "", manager: "", start_date: "" }
    const [candid, setCandid] = useState({ ...defaultCandid })

    const handleChange = (e) => {
        setCandid({...candid,[e.target.name]: e.target.value})
    }
    const submitForm = (e) => {
      props.onAddCandidate(candid);
      setCandid({ ...defaultCandid });
    }

    return (
        <form>
            <label htmlFor="id">ID</label>
            <input
                type="text"
                name="id"
                value={candid.id}
                onChange={handleChange} />

            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={candid.name}
                onChange={handleChange} />
            <label htmlFor="age">Age</label>
            <input
                type="text"
                name="age"
                value={candid.age}
                onChange={handleChange} />
            <label htmlFor="manager">Is Manager</label>
            <input
                type="text"
                name="manager"
                value={candid.manager}
                onChange={handleChange} />
            <label htmlFor="start_date">Start Date</label>
            <input
                type="text"
                name="start_date"
                value={candid.start_date}
                onChange={handleChange} />

            <input type="button" className="btn-submit" value="Add to the list" onClick={submitForm} />
        </form>
    );
}