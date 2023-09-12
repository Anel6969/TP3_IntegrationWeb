let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
// CODELAB: Add event listener for beforeinstallprompt event
/**
* Event handler for beforeinstallprompt event.
* Saves the event & shows install button.
*
* @param {Event} evt
*/
function saveBeforeInstallPromptEvent(evt) {
deferredInstallPrompt = evt;
installButton.removeAttribute('hidden');
}
// CODELAB: Add event listener for appinstalled event
/**
* Event handler for appinstalled event.
* Log the installation to analytics or save the event somehow.
*
* @param {Event} evt
*/

function installPWA(evt) {
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);

    deferredInstallPrompt.userChoise
        .then((choise) => {
            if (choise.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
                logAppInstalled(evt);
            }  else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredInstallPrompt = null;
        } );
}

windows.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
    console.log('App installed');
// CODELAB: Add code to log the event
}