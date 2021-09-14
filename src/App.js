import { useEffect, useState } from "react"
import useApi from "./components/API/useApi"

export default function App() {
    const Language = useApi();
    const [langs, setLangs] = useState([]);
    useEffect(() => {
        Language
            .then((data) => {
                setLangs((prevState) => {
                    return [...prevState, data.data.data.languages]
                })
            })
            .catch((err) => {

            })
    },[])

    return (
        <>
        {console.log(langs)}
            <h1>Bisnu kundu</h1>
        </>
    )
}