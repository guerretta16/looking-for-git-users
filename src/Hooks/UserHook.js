import { useState } from "react";
import { searchUserService } from "../Services/UserService";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const searchUser = (username) => {
        setIsLoading(true);
        searchUserService(username)
        .then(data => {
            setUser(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        })
    }

    return {
        user,
        isLoading,
        searchUser
    }
}

export default useUser