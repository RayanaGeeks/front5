import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUserRegistered } from "./userSlice";

const MainPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPas, setConfirmPas] = useState("")
    const userRegistered = useSelector(selectUserRegistered)
    const dispatch = useDispatch()

    const handleRegister = () => {
        if (!username || !password || !confirmPas) {
            alert("Пожалуйста, заполните все поля")
            return
        }

        if (password !== confirmPas) {
            alert("Пароли не совподают")
            return
        }

        const existUser = localStorage.getItem("registeredUser")
        if (existUser && existUser === username) {
            alert("Пользователь уже зарегистрирован")
            return
        }

        localStorage.setItem("registeredUser", username)
        dispatch(registerUser())
        alert("Успешная регистрация")
    };
    const handleClear = () => {
        setUsername("")
        setPassword("")
        setConfirmPas("")
    };



    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPas}
                onChange={(event) => setConfirmPas(event.target.value)}
            />
            <br />
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
};

export default MainPage;

