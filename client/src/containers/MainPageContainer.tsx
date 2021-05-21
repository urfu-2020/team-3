import App from "../App";
import React, {Component} from "react";
import MainPage from "../components/MainPage";
import LoginPage from "../components/LoginPage";

// const API = `http://localhost:${process.env.PORT || 80}/api/`
const API = `https://kilogram-team3.herokuapp.com/api/`

interface IMainPageProps {
    authorized?: boolean,
    activeChat?: any
}


class MainPageContainer extends Component<IMainPageProps, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            authorized: false,
            activeChat: null,
            user: null,
            dialogs: [] };
    }

    // componentDidMount() {
    //     fetch(API + 'user')
    //         .then(res => res.json())
    //         .then(res => this.setState({contactList: res}))
    // }

    render() {
        // TODO Авторизация
        // return this.state.authorized ? <MainPage /> : <LoginPage/>
        return <MainPage/>
    }
}

export default MainPageContainer;