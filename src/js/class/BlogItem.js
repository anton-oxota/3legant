class BlogItem {
    constructor({
        blogImgSrc,
        blogImgAlt,
        blogName,
        blogLink,
    }) {
        this.blogImgSrc = blogImgSrc;
        this.blogImgAlt = blogImgAlt;
        this.blogName = blogName;
        this.blogLink = blogLink;

        this.blogPreviewElement = this.createBlogPreviewElement();
        this.blogNameElement = this.createBlogNameElement();
        this.blogLinkElement = this.createBlogLinkElement();

        this.blogItem = this.createBlogItem();
    }

    createBlogPreviewElement() {
        const blogPreviewElement = document.createElement('div');
        blogPreviewElement.classList.add('blog-item__preview');
        blogPreviewElement.innerHTML = `<img src="${this.blogImgSrc}" alt="${this.blogImgAlt}" class="blog-item__img">`;

        return blogPreviewElement
    }

    createBlogNameElement() {
        const blogNameElement = document.createElement('div');
        blogNameElement.classList.add('blog-item__title', 'h7');
        blogNameElement.textContent = this.blogName;

        return blogNameElement
    }

    createBlogLinkElement() {
        const blogLinkElement = document.createElement('a');
        blogLinkElement.href = this.blogLink;
        blogLinkElement.classList.add('blog-item__link', 'button-xs', 'button-bb');

        blogLinkElement.innerHTML = `Read More
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 13.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 4.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;

        return blogLinkElement
    }


    createBlogItem() {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');

        blogItem.append(this.blogPreviewElement);
        blogItem.append(this.blogNameElement);
        blogItem.append(this.blogLinkElement);

        return blogItem
    }
}

export default BlogItem

/* 

<div class="blog-item">
    <div class="blog-item__preview">
        <img src="img/blog/img1.jpg" alt="" class="blog-item__img">
    </div>
    <div class="blog-item__title h7">7 ways to decor your home</div>
    <a href="" class="blog-item__link button-xs button-bb">
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 13.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 4.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </a>
</div> 

*/