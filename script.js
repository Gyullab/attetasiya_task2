class Message {
    constructor(authorName, time, text) {
        this.authorName = authorName
        this.time = time;
        this.text = text;
    }
    toString() {
        return this.time + ' ' + this.authorName + ': ' + this.text;
    }
}
let messageHistory = []
class Messenger {
    send(name, mes) {
        const time = new Date()
        const current = time.getHours() + ":" + time.getMinutes();
        const mesaj = new Message(name, current, mes)
        const text = mesaj.toString()
    
        messageHistory.push(text);
        console.log(text);
    }
    show_histroy() {
    messageHistory.forEach((item) => {
            console.log(item);
        })
    }
}

let messenger = new Messenger();
messenger.send('Test', 'Salam aleykum');
messenger.send('Adam', 'Salam =)');

// messenger.show_histroy();
