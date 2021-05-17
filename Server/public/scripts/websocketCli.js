// создать подключение
const socket = new WebSocket('ws://localhost:8081')

// отправить сообщение из формы publish
document.forms.publish.onsubmit = function () {
  const outgoingMessage = this.message.value

  socket.send(outgoingMessage)
  return false
}

// обработчик входящих сообщений
socket.onmessage = function (event) {
  const incomingMessage = event.data
  showMessage(incomingMessage)
}

// показать сообщение в div#subscribe
function showMessage (message) {
  const messageElem = document.createElement('div')
  messageElem.className = 'dialog-message dialog-message_outgoing'
  const textMessage = document.createElement('p')
  textMessage.className = 'dialog-message__text'
  textMessage.innerText = message
  messageElem.appendChild(textMessage)
  document.getElementsByClassName('dialog__messages-wrapper').appendChild(messageElem)
}
