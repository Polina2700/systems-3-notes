import { useUser } from "../context-provider/UserProvider"

export default function UserProfile() {
    const user = useUser();
    return (
        <div>
            {user.username}
        </div>
    )
}