const countEl = document.getElementById('count');

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/lennykovac.com/lkc/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}

updateVisitCount();
