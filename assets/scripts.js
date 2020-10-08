function toast(value) {
	var date = new Date();
	date.setMinutes(date.getMinutes() + 1);
    document.cookie = 'contactToast=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

if (document.cookie.split('; ').includes('contactToast=1')) {
    toast(0);
    document.getElementById('toast').innerText = 'Thanks! We will get back to you shortly.';
}

