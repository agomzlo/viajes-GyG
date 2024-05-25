import type { User } from "@/lib/types";
import { useEffect, useRef } from "react";

function UserLoginModal({user, openModal, closeModal}: {user: User, openModal: boolean, closeModal: () => void}){
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(openModal){
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [openModal]);

    return (
        <dialog ref={modalRef} className="rounded-md backdrop:bg-black/75" onCancel={closeModal}>
            <div className="flex flex-col gap-2 bg-white p-2 md:p-4 rounded-lg">
                <h2 className="text-2xl text-center font-bold">Porfavor introduce la contraseña</h2>
                <form className="flex flex-col justify-center gap-4" method="POST" action="/api/auth/verify">
                    <span className="flex flex-row justify-between gap-2">
                        <label className="text-lg" htmlFor="password">Usuario: </label>
                        <input className="w-52 md:w-60 border text-black/50 border-gray-300 rounded-md px-2" type="text" name="password" value={user.name} disabled />
                    </span>
                    <span className="flex flex-row justify-between gap-2">
                        <label className="text-lg" htmlFor="password">Contraseña: </label>
                        <input className="w-52 md:w-60 border border-gray-300 rounded-md px-2" type="text" name="password" />
                    </span>
                    <input type="hidden" name="id" value={user.id} />
                    <input type="hidden" name="name" value={user.name} />
                    <div className="flex flex-row justify-around font-bold">
                        <span onClick={closeModal} className="px-3 py-1 rounded-lg border border-red-500 text-red-500 cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg transition-all">Cerrar</span>
                        <button type="submit" className="px-3 py-1 rounded-lg border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:shadow-lg transition-all">Verificar</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default UserLoginModal;