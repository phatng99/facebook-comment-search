document.getElementById('searchInput').addEventListener('input', async (e) => {
  const query = e.target.value.toLowerCase();
  
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  }).then(() => {
    chrome.tabs.sendMessage(tab.id, {
      type: 'SEARCH_QUERY',
      query: query
    });
  });
});

// Add this to your existing message listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SEARCH_RESULTS') {
    displayResults(message.results);
  } else if (message.type === 'SEARCH_STATUS') {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<div style="color: #666;">${message.status}</div>`;
  }
});

function displayResults(results) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = results.map(result => `
    <div style="margin-bottom: 10px; padding: 5px; border-bottom: 1px solid #ccc;">
      <div>${result.text}</div>
      <div style="font-size: 0.8em; color: #666;">
        by ${result.author}
      </div>
    </div>
  `).join('');
}