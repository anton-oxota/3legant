import getData from "../tools/getData"

import BlogItem from "../class/BlogItem";

function renderBlog() {
    const blogWrapper = document.querySelector('.blog__wrapper');
    const blogSpinner = document.querySelector('.blog__spinner');

        getData('./db/blog_db.json')
            .then(data => {
                data.forEach(obj => {
                    const blog = new BlogItem(obj)
                    blogWrapper.append(blog.blogItem);
                });
            })
            .catch(error => {
                const errorMessage = document.createElement('div');
                errorMessage.classList.add('message', 'h5');
                errorMessage.innerHTML = "Opss... <br> We can't load blog";

                blogWrapper.append(errorMessage)
                console.error(error.status, 'Fetch')
            })
            .finally(() => {
                blogSpinner.remove();
            })
}

export default renderBlog