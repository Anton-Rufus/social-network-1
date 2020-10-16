const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
        {id: 2, name: 'Bro', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
        {id: 3, name: 'Natali', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
        {id: 4, name: 'Martin', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'},
        {id: 5, name: 'Alex', src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'}
    ],
    messages: {
        income: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: 'I don\'t know'},
            {id: 3, message: 'Ok bro'},
            {id: 4, message: 'U2'}
        ],
        outgoing: [
            {id: 1, message: 'Yep'},
            {id: 2, message: 'Last night'},
            {id: 3, message: 'Ok bro'},
            {id: 4, message: '5 minute'}
        ]
    },
    newMessageText: 'Message text'
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.outgoing.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreate = () => ({type: SEND_MESSAGE})

export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    newMessageText: text
})

export default dialogsReducer;