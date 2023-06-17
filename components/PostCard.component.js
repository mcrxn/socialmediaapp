export default class PostCard {
  static render({ ...post }) {
    return `
        <div class="social-media-post">
            <img src="${post.image}" alt="Social Media Post Image" id="post-img" class="postImg"/>
            <p class="caption">${post.caption}</p>
            <p class="source-type">
                ${post.source_type}: <a href="source-link">${post.source_link}
    }</a>
            </p>
            <p class="date">Date: ${post.date}</p>
            <p class="likes">Likes: ${post.likes}</p>
            <div class="author">
                <img src="${post.profile_image}" alt="Author Profile Image" />
                <p class="author-name">${post.name}</p>
            </div>
      </div>
        
        `;
  }
}
