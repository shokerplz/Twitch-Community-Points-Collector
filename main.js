var called_func = false
function tw_click() {
    document.getElementsByClassName('community-points-summary tw-align-items-center tw-flex tw-full-height')[0].style.visibility = 'hidden'
	if (document.getElementsByClassName('tw-button tw-button--success tw-interactive').length) {
		document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0].click();
	}
	var added_points =  document.getElementsByClassName('community-points-summary')[0].getElementsByClassName('tw-align-items-center tw-border-radius-large')[0];
	if (typeof(added_points) != 'undefined' && added_points != null && called_func == false)
	{
		console.log('Points added: '+document.getElementsByClassName('community-points-summary')[0].getElementsByClassName('tw-align-items-center tw-border-radius-large')[0].textContent)
		called_func = true
		setTimeout(reverse, 4000)
	}
	console.log('Current twitch points amount: '+document.getElementsByClassName('community-points-summary')[0].getElementsByClassName('tw-c-text-alt-2')[0].textContent);
}
function reverse() {
	called_func = !called_func;
}
setInterval(tw_click, 500);