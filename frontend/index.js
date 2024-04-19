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

    let string = `We need to ${resultVerb} our ${resultNoun} ${resultAdverb}\nin order to ${otherResultVerb} our ${otherResultNoun} ${otherResultAdverb}.`

    let speak = document.createElement('p')
    speak.textContent = string

    let corporateSpeak = document.getElementsByClassName('widget')[1]
    corporateSpeak.appendChild(speak)
    
  // 👉 TASK 4 - Build a "Countdown" widget
    let numArr = ['5', '4', '3', '2', '1']
    let resultText = 'T-minus'
    let countText = ''
    let countdownP = document.createElement('p')
    let countWidget = document.getElementsByClassName('widget')[2]
    countWidget.appendChild(countdownP)

      function Countdown(){
      numArr.forEach((num, i) => {
        setTimeout(() => {
          countText = `${resultText} ${num}`
          countdownP.textContent = countText
        }, i * 1000)
      });
      
      setTimeout(() => {
        countText = 'Liftoff! 🚀'
        countdownP.textContent = countText
      }, numArr.length * 1000)
      } 

      Countdown()

  // 👉 TASK 5 - Build a "Friends" widget
      let randomPerson1 = 0
      randomPerson1 += Math.random() * people.length
      let intrandPer = parseInt(randomPerson1)
      let person1 = people[intrandPer]
      let person1fname = person1.fname
      let person1lname = person1.lname
      let person1dob = person1.dateOfBirth

      let randomPerson2 = 0
      randomPerson2 += Math.random() * people.length
      let intrandPer2 = parseInt(randomPerson2)
      let person2 = people[intrandPer2]
      let person2fname = person2.fname
      let person2lname = person2.lname

      let randomPerson3 = 0
      randomPerson3 += Math.random() * people.length 
      let intrandPer3 = parseInt(randomPerson3)
      let person3 = people[intrandPer3]
      let person3fname = person3.fname
      let person3lname = person3.lname

      let randomPerson4 = 0
      randomPerson4 += Math.random() * people.length 
      let intrandPer4 = parseInt(randomPerson4)
      let person4 = people[intrandPer4]
      let person4fname = person4.fname
      let person4lname = person4.lname

      let peopleString = `${person1fname} ${person1lname} was born in ${person1dob} and is friends with ${person2fname} ${person2lname}, ${person3fname} ${person3lname} and ${person4fname} ${person4lname}`
      
      let friendsString = document.createElement('p')
      friendsString.textContent = peopleString
      let friendsWidget = document.getElementsByClassName('widget')[3]
      friendsWidget.appendChild(friendsString)

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
