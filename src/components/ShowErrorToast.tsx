import { toast } from "wc-toast";


function ShowErrorToast({message, duration = 2000, paramError}: {message: string, duration?: number, paramError: string}){
    const errorVerifying = new URLSearchParams(location.search).get(paramError);

    if (errorVerifying) {
        toast.error(message, { duration: duration, theme: { type: 'light'}});
    }

    return (
        <></>
    )
}

export default ShowErrorToast;