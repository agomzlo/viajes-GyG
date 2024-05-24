import type { User } from "@/lib/types";
import UserLoginModal from "@/components/UserLoginModal.tsx";
import { useState } from "react";

function UserCard({ user }: { user: User }) {
    const [modal, setModal] = useState(false);

    return (
        <>
            <form className="w-full p-6">
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="username" value={user.name} />
                <span className="w-full h-full flex flex-row justify-center bg-white py-12 rounded-lg shadow-lg uppercase font-extrabold border border-blue-300 cursor-pointer hover:shadow-xl hover:scale-105" onClick={() => setModal(true)}>
                    {user.name}
                </span>
            </form>
            <UserLoginModal user={user} openModal={modal} closeModal={() => setModal(false)}/>
        </>
    );
}

export default UserCard;