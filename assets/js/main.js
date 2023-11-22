let player
const image = document.getElementById('playVideo')
let playerContainer
let imageContainer

window.onload = e => {
	console.log('load')
	playerContainer = document.getElementsByClassName('responsive-iframe')[0]
	imageContainer = document.getElementsByClassName('video-with-placeholder')[0]

	var altezzaImmagine = image.offsetHeight

	var stileImmagine = window.getComputedStyle(image)
	var margineSuperiore = parseInt(stileImmagine.marginTop)
	var margineInferiore = parseInt(stileImmagine.marginBottom)
	var altezzaTotale = altezzaImmagine + margineSuperiore + margineInferiore

	imageContainer.style.minHeight = altezzaTotale + 'px'
}

function onYouTubeIframeAPIReady() {
	player = new YT.Player('youtubeVideo', {
		height: '315',
		width: '560',
		videoId: 'Qgb6Vrz0rXY',
		events: {
			'onReady': onPlayerReady,
		},
	})
}

function onPlayerReady(event) {
	// Il player è pronto ma non avvia il video automaticamente
}

image.addEventListener('click', function () {
	image.style.display = 'none'
	playerContainer.style.opacity = '1'
	player.playVideo()
})
