const languageToggle = document.getElementById('language-toggle');
const languageSpans = document.querySelectorAll('.language');
const emailLabel = document.querySelector('label[for="email"]');
const passwordLabel = document.querySelector('label[for="password"]');
const captchaInput = document.getElementById('captcha-input');
const loginButton = document.querySelector('button[type="submit"]');

// Function to change language to English
function changeToEnglish() {
  languageSpans[0].textContent = 'English';
  languageSpans[1].textContent = 'Hindi';
  emailLabel.textContent = 'Email:';
  passwordLabel.textContent = 'Password:';
  captchaInput.setAttribute('placeholder', 'Enter the Captcha');
  loginButton.textContent = 'Sign In';
}

// Function to change language to Hindi
function changeToHindi() {
  languageSpans[0].textContent = 'अंग्रेज़ी';
  languageSpans[1].textContent = 'हिंदी';
  emailLabel.textContent = 'ईमेल:';
  passwordLabel.textContent = 'पासवर्ड:';
  captchaInput.setAttribute('placeholder', 'कैप्चा दर्ज करें');
  loginButton.textContent = 'साइन इन';
}

// Event listener to toggle between languages
languageToggle.addEventListener('change', function () {
  if (this.checked) {
    changeToHindi();
  } else {
    changeToEnglish();
  }
});

// By default, set the language to English
changeToEnglish();