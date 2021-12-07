

	
// Function to get time and date
const ServerTime = async () => {
	const time = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
        .then(response => response.json())
    console.log(time.datetime);
    const timeNow = time.datetime//new Date( time.datetime);
    //console.log(timeNow.getTime()); in int
    //console.log(timeNow); 
    return timeNow
}
	



export default ServerTime;
