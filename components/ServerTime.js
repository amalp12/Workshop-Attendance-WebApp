

	
// Function to get time and date
const ServerTime = async () => {
	//const time = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
        //.then(response => response.json())
    
    //const time = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata')
    //    .then(response => response.json())
    
    const time = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=tc7t18rRKWXWs9y6Uoynpfq72VkVdk_qN2OJheIaVH4c4ioO5RygVDIcwVIL3wiS7YZF_1Z12E5CUfZQQOLf3U5su2mOK-RHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9GRkcRevgjTvo8Dc32iw_BLJPcPfRdVKhJT5HNzQuXEeN3QFwl2n0M6ZmO-h7C6bwVq0tbM60-uGhoxl1-0xa7jLPCQ-cUbA&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk')
        .then(response => response.json())

        //console.log(time.datetime);
    //const timeNow = time.datetime//new Date( time.datetime);
    //console.log(timeNow.getTime()); in int
    //console.log(timeNow); 
    
    //const timeNow = time.dateTime
    const timeNow = time.fulldate
    
    return timeNow
}
	



export default ServerTime;
