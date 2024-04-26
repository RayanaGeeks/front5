import React, {useState} from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {addUserAction} from "../../store/PostsSlice";

function UsersRegisterPage () {
    const dispatch = useDispatch
    const [error, setError] = useState({})

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const validateUserInfo= () => {
        const newError = {}

        if (!user.name) newError.name = "Ваше имя"
        if (user.name && !/^[a-zA-Z\s]*$/.test(user.name)) newError.name = "Заполните поле буквами"

        if (!user.username) newError.username = "Ваша фамилия"
        if (user.username &&  !/^[a-zA-Z\s]*$/.test(user.username)) newError.username = "Заполните поле буквами"

        if (!user.email) newError.email = "Ваш gmail"
        if (user.email && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(user.email)) newError.email = "Неправильный gmail"

        setError(newError)

        return Object.keys(newError).length === 0
    };
    const addUser = (event) => {
        event.preventDefault();

        if (validateUserInfo()) {
            dispatch(addUserAction(user));
            setUser({ name: "", username: "", email: "" });
        }
    }


    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={user.name}
                                onChange={formValue}
                                isInvalid={!!error.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={user.username}
                                onChange={formValue}
                                isInvalid={!!error.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={user.email}
                                onChange={formValue}
                                isInvalid={!!error.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {error.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button type="submit" variant="success" className="w-100">
                            Register User
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default UsersRegisterPage;