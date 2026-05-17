
export function speak(text, lang = "en-US", rate = 0.95) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel(); // stop any ongoing speech
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = rate;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

export function stopSpeaking() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}


export const PAGE_INTROS = {
  "/": "Welcome to VisionVoice. This is the home page. You can upload an image or use your camera to get an AI-generated audio description. Use Tab key to navigate between elements.",
  "/features": "Features page. Learn about all VisionVoice capabilities including image captioning, emotion recognition, currency detection, and color identification.",
  "/how-it-works": "How It Works page. Understand the four step process: capture image, AI analysis, caption generation, and voice feedback.",
  "/dashboard": "Admin Dashboard. View total users, volunteers, calls, and activity statistics.",
  "/help": "Help via Video Call page. Connect with a trained volunteer for real-time visual assistance.",
  "/community": "Community page. Read stories and feedback from VisionVoice users and volunteers.",
  "/about": "About Us page. Learn about the VisionVoice team and mission.",
};