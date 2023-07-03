const main = ()=> {

    const newQuoteBtn = document.querySelector('.icon')
    const API = 'https://api.adviceslip.com/advice'
    
    const getAdvice = ()=> {
        let advice = {};
        fetch(API)
        .then(res => res.json())
        .then(data => {
            advice = data.slip.advice
            const quote = document.querySelector('.quote'),
            dice = document.querySelector('.icon > img'),
            adviceNumber = document.querySelector('.advice-number > span')
            quote.classList.add('quoteTransition')
            dice.classList.add('diceAnimation')
            quote.textContent = `"${advice}"`
            adviceNumber.textContent = data.slip.id
            quote.addEventListener("animationend", ()=> {
                quote.classList.remove('quoteTransition')
                dice.classList.remove('diceAnimation')
            })
        })
    }
    
    newQuoteBtn.addEventListener('click', getAdvice)
}
main()