function insertImage() {
	document.querySelectorAll('.box').forEach(image => {
		if (image.innerText.length !== 0) {
			if (image.innerText == 'Wrawn' || image.innerText == 'Bpawn') {
				image.innerHTML = '${image.innerText} <img class = 'allimg allpaw' src = "${image.innerText}.png" alt="">'
				image.computedStyleMap.cursor = 'pointer'
			}
			else {
				image.innerHTML = '${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">'
				image.style.cursor = 'pointer'
			}
		}
	});
}
