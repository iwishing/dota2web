function showTime(){
	var data = new Date();
	var time = document.getElementById('time');
	
	time.innerHTML = data.toLocaleString()
}
window.onload = window.setInterval(showTime,1000);
