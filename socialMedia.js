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

// to create a new message
