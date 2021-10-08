const firstName = prompt('Inserisci il tuo nome')
const lastName = prompt('Inserisci il tuo cognome')
const color = prompt('Qual è il tuo colore preferito?')

// const pw = `${firstName}${lastName}${color}21`
const pw = firstName + lastName + color + 21
alert(`La tua password è ${pw}`)
