const timeEl = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  timeEl.textContent = Date.now();
}
setInterval(updateTime, 1000);


const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
function setAvatarFromUrl(url) {
  if (!url) return;
  avatarImg.src = url;
  avatarImg.alt = 'Profile image';
}

const uploadInput = document.getElementById('avatarUpload');
const uploadStatus = document.getElementById('uploadStatus');

uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0]; 
  if (file) {
    uploadStatus.textContent = `Selected: ${file.name}`;
    setAvatarFromFile(file); 
  }
  // else {
  //   uploadStatus.textContent = '';
  // }
});

// To support file upload (reads as data URL and sets img.src)
function setAvatarFromFile(file) {
  const reader = new FileReader();
  reader.onload = () => avatarImg.src = reader.result;
  reader.readAsDataURL(file);
}


