applayforVisa = documents => {
  console.log('Обработка заявлений')
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > .5 ? resolve(documents) : reject('В визе отказано')
    }, 2000)
  })
  return promise
}

getVisa = visa => {
  console.info('Виза получена')
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(visa), 2000)
  })
}

bookHotel = visa => {
  console.log(visa, 'visa')
  console.log('Бронируем отель')
  return { 'hotel': 'sunny' }
}

buyTicket = booking => {
  console.log(booking, 'booking')
  console.log('Покупка билета')
}

applayforVisa({ "name": "Alex" })
  .then(getVisa)
  .then(bookHotel)
  .then(buyTicket)
  .catch(error => console.error(error))

// // console.log('Hello Sorax!')

// const willGift = new Promise((resolve, reject) => {
//   let win = Math.random().toFixed(1)
//   if (win >= 0.5)
//     resolve(`You win ${win}`)
//   else
//     reject(`You lose ${win}`)
// })

// // const writeOnFb = gift => Promise.resolve('heeeeH')

// const buyTicket = () => {
//   console.log('Покупаю билет')
//   willGift
//     // .then(writeOnFb)
//     .then(result => console.log('result', result))
//     .catch(error => console.log('error', error))
//   console.log('Купил билет')
// }

// buyTicket()
// // console.log('Goodbye')