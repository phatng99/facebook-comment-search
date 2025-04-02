// Save configuration when checkbox changes
document.getElementById('openAllReplies').addEventListener('change', (e) => {
  chrome.storage.sync.set({ openAllReplies: e.target.checked });
});

// Load saved configuration
chrome.storage.sync.get(['openAllReplies'], (result) => {
  document.getElementById('openAllReplies').checked = result.openAllReplies || false;
});

document.querySelectorAll('input[name="language"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    chrome.storage.sync.set({ language: e.target.value });
  });
});

// Load saved language
chrome.storage.sync.get(['language'], (result) => {
  const lang = result.language || 'en';
  document.querySelector(`input[name="language"][value="${lang}"]`).checked = true;
});