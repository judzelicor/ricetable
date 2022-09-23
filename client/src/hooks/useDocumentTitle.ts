import { 
    useState, 
    useEffect 
} from "react";

function useDocumentTitle(pageTitle: string): null {

    useEffect(() => {
        if (typeof(pageTitle) === "string") {
            document.title = pageTitle
        }
    }, [])

    return null;
}

export default useDocumentTitle;