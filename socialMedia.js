class User{
  constructor(email, password){
    this.email = email
    this.password = password
    this.inbox = []
  }

  sendMessage(rec){
    let msg = new Message()
    console.log('Messagge sent: ' + msg.content)
    rec.inbox.push(msg)
  }
}

class Message{
  constructor(content){
    this.content = prompt('Enter a message')
  }
}

user1 = new User ('michael@fish.com', 'yeeer')
user2 = new User ('roy@fish.com', 'yeeer2')

let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventListener('keydown', function(event){
  if(event.key == 'Shift' && event.which == 13)
  if(event.which == 13){
    sendMessage()
  }
})

function sendMessage(){
  let text = document.getElementById('msg-content')
  let p = document.createElement('p')
  p.innerText = text.value
  user2inbox.appendChild(p)
  text.value = ''
  text.focus()
}

user1form.addEventListener('submit', function(event){
  event.preventDefault()
  sendMessage()
})
