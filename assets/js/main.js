let player
let image
let playerContainer
let imageContainer

window.onload = e => {
	image = document.getElementById('playVideo')
	playerContainer = document.getElementsByClassName('responsive-iframe')[0]
	imageContainer = document.getElementsByClassName('video-with-placeholder')[0]

	image.addEventListener('click', function () {
		image.style.display = 'none'
		playerContainer.style.opacity = '1'
		player.playVideo()
	})
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

function onPlayerReady(event) {}
