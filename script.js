class Messenger {
    constructor(author, text) {
        this.author=author;
        this.text=text;
    }
  show_history() {
    let zaman=new Date()
    return `${zaman.getHours()}:${zaman.getMinutes()}`
  }

  send(author,text) {
    console.log(this.show_history()+' '+author+': '+text)
  }

}

let messages=new Messenger()
messages.send('miss gg','i am ded')