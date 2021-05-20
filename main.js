var called_func = false
function tw_click() {
	if (document.getElementsByClassName('claimable-bonus__icon').length) {
		document.getElementsByClassName('claimable-bonus__icon')[0].parentElement.parentElement.parentElement.click();
		console.log("Added points");
	}
}
setInterval(tw_click, 500);
