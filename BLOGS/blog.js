document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const categoryItems = document.querySelectorAll('.category-item');
    const tags = document.querySelectorAll('.tag');
    const searchInput = document.querySelector('.search-input');
    const articles = document.querySelectorAll('.blog-article');
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    // Filter articles by category
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Update active state
            categoryItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterArticles(category);
        });
    });
    
    // Filter articles by tag
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagValue = this.dataset.tag;
            filterArticles('all', tagValue);
            
            // Update UI to show active tag
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        articles.forEach(article => {
            const title = article.querySelector('.article-title').textContent.toLowerCase();
            const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();
            const tags = article.querySelector('.article-tags').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm)) {
                article.style.display = 'block';
                article.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                article.style.display = 'none';
            }
        });
    });
    
    // Scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Filter articles function
    function filterArticles(category = 'all', tag = null) {
        articles.forEach(article => {
            const articleCategory = article.dataset.category;
            const articleTags = article.dataset.tags.split(',');
            
            const categoryMatch = category === 'all' || articleCategory === category;
            const tagMatch = !tag || articleTags.includes(tag);
            
            if (categoryMatch && tagMatch) {
                article.style.display = 'block';
                article.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                article.style.display = 'none';
            }
        });
    }
    
    // In a real implementation, you would fetch blog data from an API
    // and dynamically generate the articles. Here's a simplified version:
    
    /*
    async function fetchBlogPosts() {
        try {
            const response = await fetch('https://api.example.com/blog-posts');
            const data = await response.json();
            renderBlogPosts(data);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    }
    
    function renderBlogPosts(posts) {
        const articlesContainer = document.querySelector('.blog-articles');
        articlesContainer.innerHTML = '';
        
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'blog-article';
            article.dataset.category = post.category;
            article.dataset.tags = post.tags.join(',');
            
            article.innerHTML = `
                <div class="article-image">
                    <img src="${post.image}" alt="${post.title}">
                    ${post.featured ? '<span class="featured-badge">Featured</span>' : ''}
                </div>
                <div class="article-content">
                    <div class="article-meta">
                        <span class="article-category">${post.category}</span>
                        <span class="article-date">${post.date}</span>
                        <span class="article-reading-time">${post.readingTime} min read</span>
                    </div>
                    <h2 class="article-title">${post.title}</h2>
                    <p class="article-excerpt">${post.excerpt}</p>
                    <div class="article-footer">
                        <div class="article-tags">
                            ${post.tags.map(tag => `<span>#${tag}</span>`).join('')}
                        </div>
                        <a href="/blog/${post.slug}" class="read-more-btn">
                            Read Article <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
            
            articlesContainer.appendChild(article);
        });
    }
    
    // Initialize
    fetchBlogPosts();
    */
    
    // For demo purposes, we'll just animate the existing articles
    articles.forEach((article, index) => {
        article.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        article.style.opacity = '0';
    });
    
    // Keyframe animation for fadeIn
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});