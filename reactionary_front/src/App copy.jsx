import './App.css';
import React from 'react';
import { io } from 'socket.io-client';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      room: '',
      pseudo: '',
      message: '',
      listMessage: [],
      logged: false,
    };
  }

  componentDidMount() {
    const socket = io('ws://localhost:3000');
    socket.on('message', (data) => {
      this.setState((state) => {
        console.log(data);
        const listMessage = [...state.listMessage, data];
        return { listMessage };
      });
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  connectRoom() {
    const { room, pseudo, socket } = this.state;
    socket.emit('join', { room, pseudo, id: '1234' });
    socket.once('joined', (data) => {
      socket.emit('message', `Salle ${data.room} rejoint`);
      this.setState(() => {
        const logged = true;
        return { logged };
      });
    });
  }

  sendMessage() {
    const {
      room, pseudo, message, socket,
    } = this.state;
    socket.emit('message', { room, pseudo, message });
  }

  render() {
    const {
      room, pseudo, message, listMessage, logged,
    } = this.state;
    return (
      <div>
        <input type="text" name="pseudo" value={pseudo} placeholder="pseudo" onChange={(e) => this.handleChange(e)} />
        <input type="text" name="room" value={room} placeholder="room" onChange={(e) => this.handleChange(e)} />
        <input type="button" value="Connecter" onClick={() => this.connectRoom()} />
        <br />
        {logged && (
          <div>
            <input type="text" name="message" value={message} placeholder="message" onChange={(e) => this.handleChange(e)} />
            <input type="button" value="Envoyer" onClick={() => this.sendMessage()} />
          </div>
        )}
        {listMessage.map((element, index) => (
          <p key={`${element.room}-${element.pseudo}-${element.message}-${index.toFixed()}`}>
            {element.pseudo}
            {' '}
            :
            {' '}
            {element.message}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
