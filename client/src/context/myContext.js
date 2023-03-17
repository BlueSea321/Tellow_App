import React from "react";

const MyContext = React.createContext();

export function useMyContext() {
    return React.useContext(MyContext)
}

export function MyProvider({ children }) {
    const [isUserVisible, setIsUserVisible] = React.useState(false)
    const [isAdminVisible, setIsAdminVisible] = React.useState(false)
    const [commentData, setCommentData] = React.useState([])
    const [phoneData, setPhoneData] = React.useState({})
    const [unwantedNumbers, setUnwantedNumbers] = React.useState([])
    const [recentNumbers, setRecentNumbers] = React.useState([])

    const value = {
        isUserVisible,
        setIsUserVisible,
        isAdminVisible,
        setIsAdminVisible,
        commentData,
        setCommentData,
        phoneData,
        setPhoneData,
        unwantedNumbers,
        setUnwantedNumbers,
        recentNumbers,
        setRecentNumbers
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}