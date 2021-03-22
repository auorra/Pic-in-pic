const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt User to select media stream, pass to video Element, then play

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		}
	} catch (error) {
		// Catch error
		console.log('Woops error here: ', error);
	}
}

button.addEventListener('click', async () => {
	// Disable the button
	button.disabled = true;
	// start picture in picture
	await videoElement.requestPictureInPicture();
	// reset the Button
	button.disabled = false;
});

// On Load
selectMediaStream();