let name = 'your name'
let temperature = 28
console.log(name)
console.log(temperature)

function add (a, b) {
  return a + b
}
let total = add(5,5)
console.log(total)

function shout (text) {
  return text.toUpperCase() + '!!!'
}

console.log(shout('is this uppercase?'))

function isMinnesotaZip(zip) {
  return zip >= 55001 && zip <= 55763
}
console.log(isMinnesotaZip(55040))
console.log(isMinnesotaZip(54040))
console.log(isMinnesotaZip(55606))
console.log(isMinnesotaZip(53555))
console.log(isMinnesotaZip(56666))

function joinCityState(city, state, ...extra) {
  console.log(extra)
  return `${city}, ${state.toUpperCase()}`
}
console.log(joinCityState('Minneapolis', 'Mn'))
console.log(joinCityState('Minneapolis', 'Mn', 55014, 55040, 234234, 24, 234))
