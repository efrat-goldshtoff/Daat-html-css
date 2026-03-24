// ==================== Posts Rendering ====================
function renderPosts(posts = postsData) {
    const postsTable = document.getElementById('posts-table');
    postsTable.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        let categoriesHTML = '';
        if (post.categories && post.categories.length > 0) {
            categoriesHTML = post.categories.map((cat, index) => {
                const classNum = index + 1;
                return `<div class="category${classNum}">${cat}</div>`;
            }).join('');
        }

        postElement.innerHTML = `
            <div class="category-image ${post.imageClass}">
                <div class="category">
                    ${categoriesHTML}
                </div>
            </div>
            <div class="post-title">
                <h3>${post.title}</h3>
            </div>
            <div class="post-short">
                ${post.summary}
            </div>
            <div class="writer-date">
                <div class="writer">
                    ${post.author}
                </div>
                <div class="date">
                    ${post.date}
                </div>
            </div>
        `;

        postElement.setAttribute('data-categories', post.categories.join(','));
        postsTable.appendChild(postElement);
    });
}

// ==================== Categories Generation ====================
function generateCategories() {
    const order = document.getElementById('order');
    
    const uniqueCategories = new Set();
    postsData.forEach(post => {
        if (post.categories) {
            post.categories.forEach(cat => {
                uniqueCategories.add(cat);
            });
        }
    });

    const buttons = order.querySelectorAll('.search-order-buttons:not(#default-btn)');
    buttons.forEach(btn => btn.remove());

    uniqueCategories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'search-order-buttons';
        button.textContent = category;
        button.addEventListener('click', function () {
            filterByCategory(category, button);
        });
        order.appendChild(button);
    });
}

// ==================== Filter by Category ====================
function filterByCategory(category, buttonElement) {
    const posts = document.querySelectorAll('.post');
    
    document.querySelectorAll('.search-order-buttons').forEach(btn => {
        btn.style.backgroundColor = 'white';
    });

    if (category === 'הכל') {
        posts.forEach(post => {
            post.style.display = 'block';
        });
        buttonElement.style.backgroundColor = '#3c58f8';
    } else {
        posts.forEach(post => {
            const postCategories = post.getAttribute('data-categories').split(',');
            if (postCategories.includes(category)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
        buttonElement.style.backgroundColor = '#3c58f8';
    }
}

// ==================== Arrow Scroll Functionality ====================
function handleArrowScroll() {
    const scrollContainer = document.getElementById('scroll-container');
    const scrollBtn = document.getElementById('scroll-btn');
    const order = document.getElementById('order');

    function checkScroll() {
        if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }

    // Ensure start at beginning for predictable button behavior
    scrollContainer.scrollLeft = 0;

    checkScroll();

    window.addEventListener('resize', checkScroll);

    scrollBtn.addEventListener('click', function () {
        const scrollAmount = 200;
        const isRtl = getComputedStyle(scrollContainer).direction === 'rtl';
        const directionMultiplier = isRtl ? -1 : 1;

        scrollContainer.scrollBy({ left: scrollAmount * directionMultiplier, behavior: 'smooth' });
        setTimeout(checkScroll, 100);
    });

    const observer = new MutationObserver(checkScroll);
    observer.observe(order, { childList: true, subtree: true });
}

// ==================== Search Functionality ====================
function handleSearch() {
    const searchBtn = document.getElementById('search');
    const searchInput = document.getElementById('search-input');

    searchBtn.addEventListener('click', function () {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const posts = document.querySelectorAll('.post');

            if (searchTerm === '') {
                posts.forEach(post => {
                    post.style.display = 'block';
                });
            } else {
                posts.forEach(post => {
                    const title = post.querySelector('.post-title h3')?.textContent.toLowerCase() || '';
                    const shortText = post.querySelector('.post-short')?.textContent.toLowerCase() || '';
                    const author = post.querySelector('.writer')?.textContent.toLowerCase() || '';

                    if (title.includes(searchTerm) || shortText.includes(searchTerm) || author.includes(searchTerm)) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            }
        }
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('#search') && !event.target.closest('#search-input')) {
            searchInput.classList.remove('active');
        }
    });
}

// ==================== Show More Button ====================
function handleShowMore() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const posts = document.querySelectorAll('.post');
    const postsToShow = 9;
    let currentlyShowing = postsToShow;

    for (let i = postsToShow; i < posts.length; i++) {
        posts[i].style.display = 'none';
    }

    if (posts.length > postsToShow) {
        showMoreBtn.style.display = 'block';
    } else {
        showMoreBtn.style.display = 'none';
    }

    showMoreBtn.addEventListener('click', function () {
        for (let i = currentlyShowing; i < currentlyShowing + 3 && i < posts.length; i++) {
            posts[i].style.display = 'block';
        }
        currentlyShowing += 3;

        if (currentlyShowing >= posts.length) {
            showMoreBtn.style.display = 'none';
        }
    });
}

// ==================== Form Handling ====================
function handleForm() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    });
}

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', function () {
    renderPosts();
    generateCategories();
    handleArrowScroll();
    handleSearch();
    handleShowMore();
    handleForm();

    const defaultBtn = document.getElementById('default-btn');
    defaultBtn.style.backgroundColor = '#3c58f8';
    defaultBtn.addEventListener('click', function () {
        filterByCategory('הכל', defaultBtn);
    });
});
