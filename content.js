async function loadAllCommentsAndSearch(query) {
  // Send initial status
  createWaitingPopup();

  // Load all comments first
  await loadAllComments();
  
  // Remove waiting popup and show search UI
  document.getElementById('fbCommentWaitingPopup')?.remove();
  createSearchUI();
}

async function loadAllComments() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// query to all span tag with class name x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f xi81zsa
  const sortButton = Array.from(document.querySelectorAll('span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.x1s688f.xi81zsa'))
  .filter(button => button.textContent.includes('Phù hợp nhất'));

  if (sortButton.length === 0) {
    return;
  }

  sortButton[0].click();
  await delay(1000);

const allCommentOptions = Array.from(document.querySelectorAll('div.x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.xe8uvvx.x1hl2dhg.xggy1nq.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x87ps6o.x1lku1pv.x1a2a7pz.xjyslct.x9f619.x1ypdohk.x78zum5.x1q0g3np.x2lah0s.x1i6fsjq.xfvfia3.xnqzcj9.x1gh759c.x10wwi4t.x1x7e7qh.x1344otq.x1de53dj.x1n2onr6.x16tdsg8.x1ja2u2z.x6s0dn4'))
  .filter(div => {
    const spanElements = div.querySelectorAll('span');
    return Array.from(spanElements).some(span => span.textContent.includes('Tất cả bình luận'));
  });

  allCommentOptions[0].click();
  await delay(1000);

  while (true) {
    scrollMore();
    await delay(1000);

    const seeMoreButton = Array.from(document.querySelectorAll('div.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1miatn0.x1gan7if.x2z19jh.x2tomnu span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.x1s688f.xi81zsa'))
    .filter(button => button.textContent.includes('Xem thêm bình luận'));

    if (seeMoreButton.length == 0) {
      // capture the latest scroll height
      const currentScrollHeight = getLatestScrollHeight();
      scrollMore();
      await delay(1000);
      // if the scroll height is not changed, then we have reached the end
      if (currentScrollHeight == getLatestScrollHeight()) {
        break;
      }
    } else {
      alert("click this button")
      seeMoreButton.forEach(button => button.click());
      // capture the latest scroll height
      const currentScrollHeight = getLatestScrollHeight();
      scrollMore();
      await delay(1000);
      // if the scroll height is not changed, then we have reached the end
      if (currentScrollHeight == getLatestScrollHeight()) {
        break;
      }
    }
  }

  let time = 0;
  while (time < 50) {
    // unpack all collpase responses
    // !!!CAUTION: unpack all responses may cause performance issue for your browser
    // const collapseButtons = Array.from(document.querySelectorAll('div.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1miatn0.x1gan7if.x2z19jh.x2tomnu span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.x1s688f.xi81zsa'))
    // .filter(button => 
    //   (button.textContent.includes('Xem tất cả') && 
    //   button.textContent.includes('phản hồi')) ||
    //   (button.textContent.includes('Xem') && 
    //   button.textContent.includes('phản hồi')) ||
    //   (button.textContent.includes('đã trả lời') && 
    //   button.textContent.includes('phản hồi'))
    // );
    // if (collapseButtons.length == 0) {
    //   break;
    // }
    // collapseButtons.forEach(button => button.click());
    // await delay(1000)
    time += 1;
  }

  await delay(2000)
}

function getLatestScrollHeight() {
  return document.querySelectorAll('div.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1iyjqo2.xy5w88m')[0].scrollHeight;
}

function scrollMore() {
  return document.querySelectorAll('div.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1iyjqo2.xy5w88m')[0].scrollTop = 100000;
}

function displaySearchResults(results) {
  const resultsContainer = document.getElementById('fbCommentSearchResults');
  resultsContainer.innerHTML = results.map((result, index) => `
    <div style="
      padding: 8px;
      border-bottom: 1px solid #eee;
      margin-bottom: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
    " data-comment-index="${result.text}">
      <div style="color: #333;">${result.text}</div>
    </div>
  `).join('');

  // Remove any existing highlight
  const removeHighlight = () => {
    const highlighted = document.querySelector('.fb-comment-highlight');
    if (highlighted) {
      highlighted.style.backgroundColor = '';
      highlighted.classList.remove('fb-comment-highlight');
    }
  };

  // Add click handlers to results
  resultsContainer.addEventListener('click', (e) => {
    const resultDiv = e.target.closest('[data-comment-index]');
    if (resultDiv) {


      commentElement = Array.from(document.querySelectorAll('div.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1miatn0.x1gan7if.x2z19jh.x2tomnu [role="article"]'))
      .filter(comment => {
        const spanText = comment.querySelector('span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.xo1l8bm.xzsf02u')
        console.log(spanText?.textContent)
        console.log(resultDiv.textContent)
        return spanText?.textContent?.trim() === resultDiv.textContent?.trim();
      })
      
      console.log(commentElement)

      if (commentElement && commentElement.length > 0) {
        console.log('found comment to highlight')
        // Remove previous highlight
        removeHighlight();

        // Scroll to the comment
        commentElement[0].scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Add highlight
        const commentContainer = commentElement[0].closest('[role="article"]');
        commentContainer.style.backgroundColor = '#ffeb3b40';
        commentContainer.classList.add('fb-comment-highlight');

        // Remove highlight after 3 seconds
        setTimeout(removeHighlight, 7000);
      }
    }
  });
}

function createSearchUI() {
  const searchContainer = document.createElement('div');
  searchContainer.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 9999;
      padding: 16px;
      font-family: Arial, sans-serif;
    ">
      <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
        <h3 style="margin: 0;">Search Comments</h3>
        <button id="fbCommentSearchClose" style="border: none; background: none; cursor: pointer;">✕</button>
      </div>
      <input type="text" id="fbCommentSearchInput" placeholder="Search in comments..." style="
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-bottom: 10px;
        box-sizing: border-box;
      ">
      <div id="fbCommentSearchResults" style="
        max-height: 300px;
        overflow-y: auto;
        padding-right: 5px;
      "></div>
    </div>
  `;

  document.body.appendChild(searchContainer);

  // Add event listeners
  document.getElementById('fbCommentSearchClose').addEventListener('click', () => {
    searchContainer.remove();
  });

  document.getElementById('fbCommentSearchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value.toLowerCase();
      const results = searchComments(query);
      displaySearchResults(results);
    }
  });

  const commentSection = document.querySelector('div.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1miatn0.x1gan7if.x2z19jh.x2tomnu');
  if (commentSection) {
    const observer = new MutationObserver((mutations) => {
      if (!commentSection.isConnected) {
        searchContainer.remove();
        observer.disconnect();
      }
    });

    observer.observe(commentSection.parentElement, {
      childList: true,
      subtree: true
    });
  }
}

function searchComments(query) {
  const comments = Array.from(document.querySelectorAll('div.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1miatn0.x1gan7if.x2z19jh.x2tomnu [role="article"]'));
  const results = comments
    .map(comment => {
      const spanText = comment.querySelector('span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.xo1l8bm.xzsf02u')
      console.log(spanText?.textContent)
      const textContent = spanText?.textContent ?? null;
      const authorElement = comment.querySelector('a[role="link"]');
      const author = authorElement ? authorElement.textContent : 'Unknown';
      
      return {
        text: textContent,
        author: author
      };
    })
    .filter(comment => comment.text && comment.text.toLowerCase().includes(query));

  return results;
}

// Add this at the beginning of the file
function addSearchButton() {
  const targetDiv = document.querySelector('div.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1miatn0.x1gan7if.x2z19jh.x2tomnu div.x6s0dn4.xi81zsa.x78zum5.x6prxxf.x13a6bvl.xvq8zen.xdj266r.xat24cr.xkhd6sd.x4uap5.x80vd3b.x1q0q8m5.xso031l.x16n37ib.xq8finb.x10b6aqq.x1yrsyyn');
  
  if (targetDiv && !document.getElementById('fbCommentSearchButton')) {
    const searchButton = document.createElement('div');
    searchButton.id = 'fbCommentSearchButton';
    searchButton.innerHTML = `
      <div role="button" style="
        padding: 8px 12px;
        margin-left: 8px;
        cursor: pointer;
        border-radius: 6px;
        background-color: #e4e6eb;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
      ">Search Comments</div>
    `;
    
    searchButton.addEventListener('click', () => {
      document.getElementById('fbCommentWaitingPopup')?.remove();
      document.getElementById('fbCommentSearchResults')?.remove();
      searchButton.remove(); // Remove the search 
      loadAllCommentsAndSearch();
    });
    
    targetDiv.appendChild(searchButton);
  }
}

function createWaitingPopup() {
  const waitingContainer = document.createElement('div');
  waitingContainer.id = 'fbCommentWaitingPopup';
  waitingContainer.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 9999;
      padding: 16px;
      font-family: Arial, sans-serif;
      text-align: center;
    ">
      <div style="margin-bottom: 12px;">
        <div class="loading-spinner" style="
          width: 30px;
          height: 30px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3578e5;
          border-radius: 50%;
          margin: 0 auto 12px;
          animation: spin 1s linear infinite;
        "></div>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </div>
      <div>Loading all comments...</div>
      <div style="font-size: 12px; color: #65676B; margin-top: 8px;">This might take a few minutes</div>
    </div>
  `;
  document.body.appendChild(waitingContainer);
}

// Add this after the existing code
const commentSectionObserver = new MutationObserver((mutations, observer) => {
  const commentSection = document.querySelector('div.x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1miatn0.x1gan7if.x2z19jh.x2tomnu');
  if (commentSection) {
    addSearchButton();
  }
});

commentSectionObserver.observe(document.body, {
  childList: true,
  subtree: true
});