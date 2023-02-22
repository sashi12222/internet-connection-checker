const status=document.querySelector('#status');
const wifi=document.querySelector('.wifi');

document.addEventListener('DOMContentLoaded',()=>{
    if(navigator.onLine){
        document.body.classList.add('online')
        status.innerHTML='Online';
        wifi.src='/image/wifi.png'
    }
    else{
        document.body.classList.remove('online')
        status.innerHTML='Offline';
        wifi.src='/image/no-wifi.png'
    }
    setInterval(()=>{
        const fetchImage=async()=>{
            try{
                const response= await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time='+ new Date().getTime());
                if(response.status===200){
                    document.body.classList.add('online')
                    status.innerHTML='Online';
                    wifi.src='./image/wifi.png'
                }
                else{
                    document.body.classList.remove('online')
                    status.innerHTML='Offline';
                    wifi.src='/image/no-wifi.png'
                
                }
            }
            catch(error){
                document.body.classList.remove('online');
        wifi.src = './image/no-wifi.png';
        status.innerHTML = 'Offline';
            }
        };
        fetchImage();
    },3000);
});