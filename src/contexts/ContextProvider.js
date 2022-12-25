import React, {createContext, useContext, useState} from 'react'


export const StateContext= createContext(0);

const initialState={
    chat:false,
    notification:false,
    cart:false,
    userProfile:false,
}


export const ContextProvider=({children})=>{
    const [activeMenu, setActiveMenu]=useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor]=useState('#03C9D7');
    const [currentMode, setCurrentMode]=useState('Light');

    const changeMode=(e)=>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }
    const changeColor=(color)=>{
        setCurrentColor(color);
        localStorage.setItem('colorMode',color);
        setThemeSettings(false);
    }

    const [themeSettings, setThemeSettings] = useState(false);

    const handleClick=(clicked)=>{
        setIsClicked({...initialState, [clicked]:true})
    }

    const [screenSize, setScreenSize] = useState(undefined);


return (
    <StateContext.Provider value={{activeMenu, setActiveMenu,isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor,  currentMode, changeColor, changeMode, themeSettings, setThemeSettings }}>
        {children}
    </StateContext.Provider>
)
}

export const useStateContext=()=>useContext(StateContext);