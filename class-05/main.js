fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=springfield&appid=4d8fb5b93d4af21d66a2948710284366&units=metric"
).then((resp) => {
  return resp.json()
}).then(resp=>{
  console.log(resp)
})
