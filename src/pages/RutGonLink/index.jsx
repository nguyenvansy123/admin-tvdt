import React from 'react'
import { useNavigate } from "react-router-dom";

export const RutGonLink = () => {
    const navigate = useNavigate();

    const chuyenTrang = () => {
        window.location.href = 'https://reactrouter.com/en/main/hooks/use-navigate'
    }

    return (
        <div>{chuyenTrang()}</div>
    )
}
