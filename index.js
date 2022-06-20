const clickHereBtn = document.getElementById('click-here');
const outputBox = document.querySelector('output');
const confirmResult = document.querySelector('#confirmBtn');
const selectedItem = document.querySelector('select');

const avatarBtn = document.getElementById('add_new_avatar');

// clickHereBtn.addEventListener('click', function onOpen() {
//     dialog.showModal();
// });

avatarBtn.addEventListener('click', function onOpen() {
    dialog.showModal();
})

// selectedItem.addEventListener('change', function onSelect(e) {
//     confirmResult.value = selectedItem.value;
// });

// dialog.addEventListener('close', function onClose() {
//     outputBox.value = dialog.returnValue + "you closed the dialog box"
// });