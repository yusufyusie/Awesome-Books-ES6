export default function timeDisplay() {
    const myDate = new Date();
  
    const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'August', 'October', 'November', 'December'];
  
    const date = myDate.getDate();
    const month = monthsList[myDate.getMonth()];
    const year = myDate.getFullYear();
    const day = daysList[myDate.getDay()];
  
    const today = `${day}, ${month} ${date}, ${year},`;
  
    let amOrPm;
    const twelveHours = () => {
      if (myDate.getHours() > 12) {
        amOrPm = 'PM';
        const twentyFourHourTime = myDate.getHours();
        const conversion = twentyFourHourTime - 12;
        return `${conversion}`;
      }
      amOrPm = 'AM';
      return `${myDate.getHours()}`;
    };
    const hours = twelveHours();
    const minutes = myDate.getMinutes();
  
    const currentTime = `${hours}:${minutes} ${amOrPm}`;
  
    timeInfo.innerHTML = `${today} ${currentTime}`;
  }
  