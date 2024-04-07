function insertImage() {
	document.querySelectorAll('.box').forEach(image => {
			if (image.innerText.length !== 0) {
					if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
							image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
							image.style.cursor = 'pointer'
					}
					else {
							image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
							image.style.cursor = 'pointer'
					}
			}
	})
}
insertImage()


function coloring() {
	const color = document.querySelectorAll('.box')
	color.forEach(color => {
			getId = color.id
			arr = Array.from(getId)
			arr.shift()
			aside = eval(arr.pop())
			aup = eval(arr.shift())
			a = aside + aup

			if (a % 2 == 0) {
				color.style.backgroundColor = 'rgb(240, 201, 150)'
			}
			if (a % 2 !== 0) {
				color.style.backgroundColor = 'rgb(100, 75, 43)'
			}
	})
}
coloring()

function reddish() {
	document.querySelectorAll('.box').forEach(i1 => {
			if (i1.style.backgroundColor == 'pink') {
					document.querySelectorAll('.box').forEach(i2 => {
							if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {
									greenText = i2.innerText
									pinkText = i1.innerText
									pinkColor = ((Array.from(pinkText)).shift()).toString()
									greenColor = ((Array.from(greenText)).shift()).toString()
									getId = i2.id
									arr = Array.from(getId)
									arr.shift()
									aside = eval(arr.pop())
									aup = eval(arr.shift())
									a = aside + aup

									if (a % 2 == 0 && pinkColor == greenColor) {
										i2.style.backgroundColor = 'rgb(240, 201, 150)'
									}
									if (a % 2 !== 0 && pinkColor == greenColor) {
										i2.style.backgroundColor = 'rgb(100, 75, 43)'
									}
							}
					})
			}
	})
}

tog = 1
whiteCastleChance = true
blackCastleChance = true

document.querySelectorAll('.box').forEach(item => {
	item.addEventListener('click', function () {
			if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
				tog = tog + 1
			}
			else if (item.style.backgroundColor == 'aqua' && item.innerText.length == 0) {
				tog = tog + 1
			}
			else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {
					document.querySelectorAll('.box').forEach(i => {
							if (i.style.backgroundColor == 'pink') {
									pinkId = i.id
									pinkText = i.innerText
									document.getElementById(pinkId).innerText = ''
									item.innerText = pinkText
									coloring()
									insertImage()
									tog = tog + 1
							}
					})
			}
			
			getId = item.id
			arr = Array.from(getId)
			arr.shift()
			aside = eval(arr.pop())
			arr.push('0')
			aup = eval(arr.join(''))
			a = aside + aup

			function whosTurn(toggle) {
				if (item.innerText == `${toggle}pawn`) {
					item.style.backgroundColor = 'pink'
					if (tog % 2 !== 0 && aup < 800) {
						if (aup == 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
							document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
							if (aup == 200 && document.getElementById(`b${a + 200}`).innerText.length == 0) {
								document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
							}
						}
						
						if (aup !== 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
							document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
						}
						
						if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
							document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
						}
						if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
							document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
						}
					}
					
					if (tog % 2 == 0 && aup > 100) {
						if (aup == 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
							document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
							if (aup == 700 && document.getElementById(`b${a - 200}`).innerText.length == 0) {
								document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
							}
						}
						
						if (aup !== 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
							document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
						}
						
						if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
							document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
						}
						
						if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
							document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
						}
					}
				}
				
				if (item.innerText == `${toggle}king`) {
					if (aside < 8) {
						document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
					}
					if (aside > 1) {
						document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
					}
					if (aup < 800) {
						document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
					}
					if (aup > 100) {
						document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
					}
					if (aup > 100 && aside < 8) {
						document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
					}
					if (aup > 100 && aside > 1) {
						document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
					}
					if (aup < 800 && aside < 8) {
						document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
					}
					if (aup < 800 && aside > 1) {
						document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
					}
					if(whiteCastleChance==true && a==105 && document.getElementById('b106').innerText== '' && document.getElementById('b107').innerText== '' && document.getElementById('b108').innerText== 'Wrook'){
						document.getElementById(`b107`).style.backgroundColor = 'aqua'
					}
					if(whiteCastleChance==true && a==105 && document.getElementById('b104').innerText== '' && document.getElementById('b103').innerText== '' && document.getElementById('b102').innerText== '' && document.getElementById('b101').innerText== 'Wrook'){
						document.getElementById(`b103`).style.backgroundColor = 'aqua'
					}
					if(blackCastleChance==true && a==805 && document.getElementById('b806').innerText== '' && document.getElementById('b807').innerText== '' && document.getElementById('b808').innerText== 'Brook'){
						document.getElementById(`b807`).style.backgroundColor = 'aqua'
					}
					if(blackCastleChance==true && a==805 && document.getElementById('b804').innerText== '' && document.getElementById('b803').innerText== '' && document.getElementById('b802').innerText== '' && document.getElementById('b801').innerText== 'Brook'){
						document.getElementById(`b803`).style.backgroundColor = 'aqua'
					}
					
					item.style.backgroundColor = 'pink'
				}

				if (item.innerText == `${toggle}rook`) {
					for (let i = 1; i < 9; i++) {
						if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
							document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
						}
						else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
							document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
							break
						}
					}
					
					for (let i = 1; i < 9; i++) {
						if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) { document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
					}
					else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
						document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
						document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
					}
					else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
						document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
						document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
					}
					else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
						document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				item.style.backgroundColor = 'pink'
			}
			
			if (item.innerText == `${toggle}bishop`) {
				for (let i = 1; i < 9; i++) {
					if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
						document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
					}
					else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
						document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
						document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
					}
					else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
						document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
						document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
					}
					else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
						document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
						document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
					}
					else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
						document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				item.style.backgroundColor = 'pink'
			}
			
			if (item.innerText == `${toggle}queen`) {
				for (let i = 1; i < 9; i++) {
					if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
						document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
					}
					else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
						document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
						document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
					}
					else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
						document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
						document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
					}
					else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
						document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
						document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
					}
					else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
						document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
						document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
					}
					else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
						document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
						document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
					}
					else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
						document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
						document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
					}
					else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
						document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				for (let i = 1; i < 9; i++) {
					if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
						document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
					}
					else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
						document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
						break
					}
				}
				
				item.style.backgroundColor = 'pink'
			}
			
			if (item.innerText == `${toggle}knight`) {
				if (aside < 7 && aup < 800) {
					document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
				}
				if (aside < 7 && aup > 200) {
					document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
				}
				if (aside < 8 && aup < 700) {
					document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
				}
				if (aside > 1 && aup < 700) {
					document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
				}
				if (aside > 2 && aup < 800) {
					document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'green'
				}
				if (aside > 2 && aup > 100) {
					document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
				}
				if (aside < 8 && aup > 200) {
					document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
				}
				if (aside > 1 && aup > 200) {
					document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
				}
				
				item.style.backgroundColor = 'pink'
			}
		}

		if (tog % 2 !== 0) {
			document.getElementById('tog').innerText = "White's Trun";
			whosTurn('W');
		}

		if (tog % 2 == 0) {
			document.getElementById('tog').innerText = "Black's Trun";
			whosTurn('B');
		}
		reddish();

		numOfKings = 0;
		document.querySelectorAll('.box').forEach(win => {
			if (win.innerText == 'Wking' || win.innerText == 'Bking') {
				numOfKings += 1;
			}
		});

		if (numOfKings == 1) {
			setTimeout(() => {
				if (tog % 2 == 0) {
					alert('White wins !!');
					location.reload();
				} else if (tog % 2 !== 0) {
					alert('Black Wins !!');
					location.reload();
				}
			}, 100);
		}
	});
});

document.querySelectorAll('.box').forEach(hathiTest => {
	hathiTest.addEventListener('click', function () {
		if (hathiTest.style.backgroundColor == 'pink') {
			pinkId = hathiTest.id;
			pinkText = hathiTest.innerText;
			document.querySelectorAll('.box').forEach(hathiTest2 => {
				hathiTest2.addEventListener('click', function () {
					if (
						hathiTest2.style.backgroundColor == 'green' &&
						hathiTest2.innerText.length == 0
					) {
						document.getElementById(pinkId).innerText = '';
						hathiTest2.innerText = pinkText;
						coloring();
						insertImage();
					}
				});
			});
		}
	});
});

z = 0;
document.querySelectorAll('.box').forEach(ee => {
	ee.addEventListener('click', function () {
		z = z + 1;
		if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
			coloring();
		}
	});
});
