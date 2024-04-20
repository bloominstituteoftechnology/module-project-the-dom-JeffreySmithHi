function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
      let addWidget = document.querySelectorAll('section>div')
      addWidget.forEach(widget => {
        widget.className = 'widget'
      })
      
  // 👉 TASK 2 - Build a "Quote of the Day" widget
      let resultNum = 0
      resultNum += Math.random() * quotes.length
      let result = parseInt(resultNum)
      
      let quoteText = quotes[result]
      const quote = document.createElement('div')
      quote.textContent = quoteText.quote 

      let authorText = quoteText[result]
      let dateText = quoteText[result]
      const author = document.createElement('div')
      let dateSaid = quoteText.date
      if(dateSaid === null){
        dateSaid = 'an unknown date'
      } else if(dateSaid !== null){
        dateSaid = quoteText.date
      }
      author.textContent = `${quoteText.author} in ${dateSaid}`

      let quoteWidget = document.querySelector('.widget')
      quoteWidget.appendChild(quote)
      quoteWidget.appendChild(author)
      
  // 👉 TASK 3 - Build a "Corporate Speak" widget
    let randomAdverbs = 0
    let randomNouns = 0
    let randomVerbs = 0
    randomAdverbs += Math.random() * adverbs.length
    let adverbNum = parseInt(randomAdverbs)
    randomNouns += Math.random() * nouns.length
    let nounNum = parseInt(randomNouns)
    randomVerbs += Math.random() * verbs.length
    let verbNum = parseInt(randomVerbs)

    let resultAdverb = adverbs[adverbNum]
    let resultNoun = nouns[nounNum]
    let resultVerb = verbs[verbNum] 
    
    let otherRandomAdverbs = 0
    let otherRandomNouns = 0
    let otherRandomVerbs = 0
    otherRandomAdverbs += Math.random() * adverbs.length - 1
    let otherAdverbNum = parseInt(otherRandomAdverbs)
    otherRandomNouns += Math.random() * nouns.length - 1
    let otherNounNum = parseInt(otherRandomNouns)
    otherRandomVerbs += Math.random() * verbs.length - 1
    let otherVerbNum = parseInt(otherRandomVerbs)

    let otherResultAdverb = adverbs[otherAdverbNum]
    let otherResultNoun = nouns[otherNounNum]
    let otherResultVerb = verbs[otherVerbNum]

    let string = `We need to ${resultVerb} our ${resultNoun} ${resultAdverb}\nin order to ${resultVerb} our ${resultNoun} ${resultAdverb}.`

    let speak = document.createElement('p')
    speak.textContent = string

    let corporateSpeak = document.getElementsByClassName('widget')[1]
    corporateSpeak.appendChild(speak)
    
  // 👉 TASK 4 - Build a "Countdown" widget
    let numArr = ['4', '3', '2', '1']
    let resultText = 'T-minus'
    let countText = ''
    let countdownP = document.createElement('p')
    countdownP.textContent = 'T-minus 5...'
    let countWidget = document.getElementsByClassName('widget')[2]
    countWidget.appendChild(countdownP)

    function Countdown() {
      numArr.forEach((num, i) => {
        setTimeout(() => {
          if (num === '1') {
            countText = `${resultText} ${num}...`;
            countdownP.textContent = countText;
            setTimeout(() => {
              countText = 'Liftoff! 🚀';
              countdownP.textContent = countText;
            }, 1000);
          } else {
            countText = `${resultText} ${num}...`;
            countdownP.textContent = countText;
          }
        }, (i + 1) * 1000);
      });
    }
    
    Countdown()

      

  // 👉 TASK 5 - Build a "Friends" widget
    let person = people[Math.floor(Math.random() * people.length)]
    let friendsP = document.createElement('p')
    let friendsWidget = document.getElementsByClassName('widget')[3]
    friendsWidget.appendChild(friendsP)
    let yOB = person.dateOfBirth.split('-')[0]
    let friendSentence = `${person.fname} ${person.lname} was born in ${yOB} and `
  
    if(!person.friends.length) {
      friendSentence += 'has no friends.'
    } else {
      friendSentence += 'is friends with '
      for (let i = 0; i < person.friends.length; i++) {
        let friendNum = person.friends[i]
        let friend = people.find(p => p.id === friendNum)
        let lastFriend = i === person.friends.length - 1
        let secondToLast = i === person.friends.length - 2
        if (lastFriend) {
          friendSentence += `${friend.fname} ${friend.lname}.`
        } else if (secondToLast) {
          friendSentence += `${friend.fname} ${friend.lname} and `
        } else {
          friendSentence += `${friend.fname} ${friend.lname}, `
        }
      }
    }
    
    friendsP.textContent = friendSentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
      
      let addIndexQOTD = quoteWidget.tabIndex = '1'
      let addIndexCS = corporateSpeak.tabIndex = '2'
      let addIndexCD = countWidget.tabIndex = '3'
      let addIndexF = friendsWidget.tabIndex = '4'
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
