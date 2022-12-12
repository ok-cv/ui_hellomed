const response = {
  "medications": [
    {
      "medication": "Aspirin",
      "dosages": [
        { "date": "2022-10-31", "time": "09:00", "amount": "1" },
        { "date": "2022-11-02", "time": "09:00", "amount": "1" },
        { "date": "2022-11-04", "time": "09:00", "amount": "1" },
        { "date": "2022-11-06", "time": "09:00", "amount": "1" }
      ]
    },
    {
      "medication": "Paracetamol",
      "dosages": [
        { "date": "2022-10-31", "time": "13:00", "amount": "2" },
        { "date": "2022-11-01", "time": "09:00", "amount": "1" },
        { "date": "2022-11-03", "time": "19:00", "amount": "1" },
        { "date": "2022-11-04", "time": "13:00", "amount": "2" },
        { "date": "2022-11-06", "time": "13:00", "amount": "1" }
      ]
    },
    {
      "medication": "Ibuprofen",
      "dosages": [
        { "date": "2022-10-31", "time": "19:00", "amount": "2" },
        { "date": "2022-11-02", "time": "19:00", "amount": "1" },
        { "date": "2022-11-04", "time": "19:00", "amount": "1" },
        { "date": "2022-11-06", "time": "09:00", "amount": "1" }
      ]
    },
    {
      "medication": "Vicodin",
      "dosages": [
        { "date": "2022-10-31", "time": "09:00", "amount": "2" },
        { "date": "2022-10-31", "time": "13:00", "amount": "1" },
        { "date": "2022-10-31", "time": "19:00", "amount": "1" },
        { "date": "2022-11-01", "time": "13:00", "amount": "1" },
        { "date": "2022-11-01", "time": "19:00", "amount": "2" },
        { "date": "2022-11-02", "time": "13:00", "amount": "1" },
        { "date": "2022-11-02", "time": "19:00", "amount": "1" },
        { "date": "2022-11-03", "time": "09:00", "amount": "1" },
        { "date": "2022-11-03", "time": "13:00", "amount": "2" },
        { "date": "2022-11-04", "time": "09:00", "amount": "1" },
        { "date": "2022-11-04", "time": "13:00", "amount": "1" },
        { "date": "2022-11-04", "time": "19:00", "amount": "1" },
        { "date": "2022-11-05", "time": "13:00", "amount": "2" },
        { "date": "2022-11-05", "time": "19:00", "amount": "1" },
        { "date": "2022-11-06", "time": "09:00", "amount": "1" },
        { "date": "2022-11-06", "time": "13:00", "amount": "1" },
        { "date": "2022-11-06", "time": "19:00", "amount": "1" }
      ]
    },
    {
      "medication": "Dolormin",
      "dosages": [
        { "date": "2022-10-31", "time": "13:00", "amount": "1" },
        { "date": "2022-11-01", "time": "13:00", "amount": "1" },
        { "date": "2022-11-02", "time": "13:00", "amount": "1" },
        { "date": "2022-11-03", "time": "13:00", "amount": "2" },
        { "date": "2022-11-04", "time": "13:00", "amount": "1" },
        { "date": "2022-11-05", "time": "13:00", "amount": "2" },
        { "date": "2022-11-06", "time": "13:00", "amount": "1" }
      ]
    }
    ,
    {
      "medication": "Oxycodon",
      "dosages": [
        { "date": "2022-10-31", "time": "13:00", "amount": "1" },
        { "date": "2022-11-01", "time": "13:00", "amount": "1" },
        { "date": "2022-11-02", "time": "13:00", "amount": "2" },
        { "date": "2022-11-03", "time": "13:00", "amount": "1" },
        { "date": "2022-11-04", "time": "13:00", "amount": "2" },
        { "date": "2022-11-05", "time": "09:00", "amount": "1" },
        { "date": "2022-11-06", "time": "13:00", "amount": "1" }
      ]
    }
  ]
}





/*******************************************************************************
* This is the data structure we recive from the API
*
* {
*   "medications": [
*     {
*       "medication": "Aspirin",
*       "dosages": [
*         { "date": "2022-10-31", "time": "09:00", amount: 1 },
*         { "date": "2022-10-17", "time": "19:00", amount: 1 },
*         { "date": "2022-11-01", "time": "09:00", amount: 1 },
*         { "date": "2022-11-01", "time": "19:00", amount: 1 }
*       ]
*     },
*     {
*       "medication": "Paracetamol",
*       "dosages": [
*         { "date": "2022-10-31", "time": "09:00", amount: 1 },
*         { "date": "2022-10-31", "time": "19:00", amount: 1 },
*         { "date": "2022-11-01", "time": "09:00", amount: 1 },
*         { "date": "2022-11-01", "time": "19:00", amount: 1 }
*       ]
*     }
*   ]
* }
*/





/*******************************************************************************
* This is the data structure we need for the UI
*
* [
*   {
*     day: '2022-10-31',
*     med: [
*       { time: '9:00', names: [{ name: 'Aspirin', amount: 1 }, { name: 'Paracetamol', amount: 1 }] },
*       { time: '19:00', names: [{ name: 'Aspirin', amount: 1 }, { name: 'Paracetamol', amount: 1 }] }
*     ]
*   },
*   {
*     day: '2022-11-01',
*     med: [
*       { time: '9:00', names: [{ name: 'Aspirin', amount: 1 }, { name: 'Paracetamol', amount: 1 }] },
*       { time: '19:00', names: [{ name: 'Aspirin', amount: 1 }, { name: 'Paracetamol', amount: 1 }] }
*     ]
*   }
* ]
*/





/*******************************************************************************
* First, we create a new object structure that is easier to merge
*/

const rewriteResponse = (object) => {
  const apiArray = object.medications
  const newArray = []

  apiArray.forEach((med) => {
    med.dosages.forEach((dosage) => newArray.push({
      newDate: dosage.date,
      newMeds: [{
        newTime: dosage.time,
        newName: [ { name: med.medication, amount: dosage.amount } ]
      }]
    }))
  })

  return newArray
}

const newResponse = rewriteResponse(response)

console.log(newResponse)





/*******************************************************************************
* Second, we use lodash to merge all matching dates and times together
* https://stackoverflow.com/questions/42081375/lodash-group-and-populate-arrays
*/

const desiredResponse = _(newResponse).groupBy('newDate').map((items, date) => {
  return {
    day: date,
    med: _(items).flatMap('newMeds').groupBy('newTime').map((items, time) => {
      return {
        time: time,
        names: _.flatMap(items, 'newName')
      }
    }).value().sort((t1, t2) => t1.time.substring(0, 2) - t2.time.substring(0, 2))
  }
}).value().sort((d1, d2) => new Date(d1.day) - new Date(d2.day))

console.log(desiredResponse)





/*******************************************************************************
* Third, we render the new object to the DOM
*/

desiredResponse.forEach((entry) => {
  const html = `
    <div class="hm-medplan-tab">
      <div class="hm-medplan-tab-day">
        ${new Intl.DateTimeFormat('de-DE', { weekday: 'short' }).format(new Date(entry.day))}
      </div>
      <div class="hm-medplan-tab-date">
        ${new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit' }).format(new Date(entry.day))}
      </div>
    </div>
  `

  document.querySelector('.hm-medplan-tabs').insertAdjacentHTML('beforeend', html)
})

desiredResponse.forEach((entry) => {
  let html = `<div class="hm-medplan-day">`

  html += `<h2><i class="bi bi-calendar-event"></i> ${new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit' }).format(new Date(entry.day))}</h2>`

  entry.med.forEach((cur, i) => {
    if (i === 0) html += `<div class="hm-medplan-daytime"><i class="bi bi-clock"></i> ${cur.time}</div>`
    if (i === 1) html += `<div class="hm-medplan-daytime"><i class="bi bi-clock"></i> ${cur.time}</div>`
    if (i === 2) html += `<div class="hm-medplan-daytime"><i class="bi bi-clock"></i> ${cur.time}</div>`

    html += `<div class="hm-medplan-pills">`

    cur.names.forEach((cur) => {
      html += `
        <div class="hm-medplan-pills-pill">
          <div>
            <i class="bi bi-capsule-pill"></i>
          </div>
          <div>
            ${cur.amount} × ${cur.name}
          </div>
        </div>
      `
    })

    html += `</div>`
  })

  html += `</div>`

  document.querySelector('.hm-content').insertAdjacentHTML('beforeend', html)
})





/*******************************************************************************
* Fourth, we give the tabs some functionallity
*/

const tabs = document.querySelectorAll('.hm-medplan-tab')
const days = document.querySelectorAll('.hm-medplan-day')

tabs.forEach((cur, i) => {
  cur.addEventListener('click', () => {
    const prev = [...tabs, ...days]
    const next = [cur, days[i]]

    prev.forEach((el) => el.classList.remove('active'))
    next.forEach((el) => el.classList.add('active'))
  })
})

tabs[0].click()
