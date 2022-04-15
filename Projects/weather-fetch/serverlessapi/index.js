addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
const corsHeaders = {
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Methods':'POST',
  'Access-Control-Allow-Headers':'*',
}
const createResponse = (data=[] ,statusCode=200)=>{
  return new Response(JSON.stringify(data),{
    status:statusCode,
    headers:{'Content-type':'application/json',
  ...corsHeaders}
  })
  }
const getWeather = async(request)=>{
  const {query} = await request.json();  
 const querytype = typeof query;
 
  if (querytype === 'string') {
    const requestWeatherinfo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${OPENWEATHERMAP}`)
    const weatherinfo = await requestWeatherinfo.json()
    if (!weatherinfo.length) {
      return createResponse(weatherinfo,404)
    }
    const weatherdata = weatherinfo.map(({name,country,state,lat,lon}) =>{
      return{
      name,
      country,
      state,
      lat,
      lon
      }
    })    
    return createResponse(weatherdata);
  }else if (querytype==='object' ) {
    const {lat,lon} = query
    if (typeof lat==='string' && lat && typeof lon==='string'&& lon) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHERMAP}`)
      const locationWeatherInfo = await response.json();
      if (!locationWeatherInfo.length) {
        return createResponse(locationWeatherInfo)
      }
      return createResponse(locationWeatherInfo)      
    }
    else{
      return createResponse(undefined,400)
    }
  }
  else{
    return createResponse(undefined,400)
  }  
}

 
async function handleRequest(request) { 
  if (request.method === 'OPTIONS') {
    return new Response('OK',{headers:corsHeaders})
  }
  if (request.method==='POST') {    
    return getWeather(request);
  }
  
}

