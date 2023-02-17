import { useState } from "react";

const SearchUser = (props) => {

    const [username, setUserName] = useState("");

    const handleSubmit = evt =>{
        evt.preventDefault();
        props.searchUser(username)
    }

    return (
        <div className="bg-yellow-500 text-black px-12 py-7 rounded-md">
            <h1 className="my-5 text-center text-3xl font-bold">Get GitHub Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <label htmlFor="username" className="block text-xs font-semibold mb-1">Username</label>
                    <input className="rounded-sm outline-none p-1 text-xs w-full bg-slate-300 text-slate-900" type="text" id="username" name="username" onChange={(evt) => setUserName(evt.target.value)} required/>
                </div>
                <input type="submit" name="search" value="Search" className="block mt-5 m-auto bg-black text-yellow-500 text-sm font-semibold px-5 py-1 rounded-sm cursor-pointer hover:bg-slate-900 transition-all"/>
            </form>
        </div>
    )
}

export default SearchUser;