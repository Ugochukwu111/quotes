let myArray = [
    '" Don\'t dream about success get up and work for it "', 
    '" To dream by night is to escape your life to dream by day is to make it happen "', 
    '" If you don\'t like something, change it, if you can\'t change it, change your attitude "', 
    '" Once you make a decision the universe conspires to make it happen "',
    '" The curious paradox is that when i accept myself just as i am then i can change "',
    '" There is only one corner of the universe you can be certain of improve, and that\'s your own self "',
    '" By shifting certain habbits in your life, you will allow abundance and prosperity to flow to you in ways that might seem impossible at the moment "',
    '" Failing is a crucial part of success. Every time you fail and get back up, you practice perseverance, which is the key to life, Your strenght comes in your ability to recover "',
    '" The space in which we live should be for the person we are becoming now, not for the person we were in the past. "',
    '" The power you have is to be the best version you can be, so you can create a better world. "',
    '" Get all the advice you can and you will succeed without it you will fail. "',
    '" Ask the lord to bless your plans and you will be successful in carrying them out "',
    '" So i realise that all we can do is to be happy, and do our best while we are still alive"'

]
let myArrays = [
    '--Dean Graziosi',
 '--Stephen Richards',
  '--Maya Angelou ', 
  '--Ralph Waldo Emerson',
'--Carl R. Rogers',
'--Aldous Huxley',
'--Dean Graziosi',
'--Michelle Obama',
'--Marie Kondo',
'--Ashley Richards',
'--Proverbs 15:22',
'--Proverbs 16:3',
'--Ecclesiastes 3:12'

]


let quoteEl = document.querySelector('.quote')
let authorEl = document.querySelector('.author')



function generate() {
    let rand = Math.floor ( Math.random() * myArray.length )
    console.log(rand)
    quoteEl.textContent = myArray[rand]
    authorEl.textContent = myArrays[rand]
}

