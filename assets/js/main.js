let player
const image = document.getElementById('playVideo')
const playerContainer = document.getElementsByClassName('responsive-iframe')[0]

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
