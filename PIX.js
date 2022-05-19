function myanimation(hour, minutes, func){
    const twentyFourHours = 86400000;
    const now = new Date();
    let eta_ms = new Date (now.getFullYear(), now.getMonth(), now.getDate(), hour, minutes, 0, 0).getTime() - now;
    if (eta_ms < 0)
    {
        eta_ms += twentyFourHours;
    }
    setTimeout(function() {
        func();
        setInterval(func, twentyFourHours);
    }, eta_ms);
}

myanimation (6,1,()=> { console.log(new Date())});
