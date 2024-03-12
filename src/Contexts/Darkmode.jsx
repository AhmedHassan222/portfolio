import { createContext, useState } from "react"
export let Darkmode = createContext(0)
function DarkmodeProvide(props) {
    const [darkMode , setDarkMode] = useState(false)



    return <Darkmode.Provider value={{ setDarkMode , darkMode }}>
        {props.children}
    </Darkmode.Provider>
}
export default DarkmodeProvide;