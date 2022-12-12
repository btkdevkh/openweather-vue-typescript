import { ref } from 'vue';

const getCity = () => {
  const error = ref<string>("");

  const load = async (city: string) => {
    try {
      const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_OPENWEATHER_API_KEY}&units=metric&lang=fr`;
  
      const datas = await fetch(api_url);            
  
      if(!datas.ok) {
        throw Error('Error, city must be a valid name');
      }
  
      return await datas.json();      
  
    } catch (err: any) {
      error.value = err.message;
      setTimeout(() => error.value = "", 3000)
    }
  }
  return { error, load };
}

export default getCity;
