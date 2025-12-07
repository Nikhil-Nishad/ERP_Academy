# Blog Management Guide

This guide explains how to manage the blog content for the ERP Academy website. The blog system uses MDX files for content and a centralized JSON index for metadata and ordering.

## Directory Structure

- **`content/posts/`**: Contains the `.mdx` files for each blog post.
- **`content/posts/index.json`**: The central registry for all blog posts. This file controls the order, status, and metadata of the posts displayed on the site.
- **`public/assets/blog/`** (Recommended): Store local images for blog posts here.

## Adding a New Post

1.  **Create the MDX File**:

    - Create a new file in `content/posts/` with a slug as the filename, e.g., `my-new-post.mdx`.
    - Add frontmatter (optional, as `index.json` is the source of truth, but good for backup) and your content.

    ```markdown
    ---
    title: "My New Post"
    date: "2025-12-25"
    ---

    ## Introduction

    Write your content here...
    ```

2.  **Update the Index**:

    - Open `content/posts/index.json`.
    - Add a new object to the array. **The order in this array determines the display order on the site.**

    ```json
    {
      "id": "my-new-post",
      "slug": "my-new-post",
      "title": "My New Post Title",
      "date": "2025-12-25",
      "excerpt": "A short summary for the card view.",
      "author": "Your Name",
      "imageUrl": "https://images.unsplash.com/...",
      "category": "SAP Tips",
      "tags": ["SAP", "Tutorial"],
      "readTime": 5,
      "views": 0,
      "likes": 0,
      "featured": false,
      "status": "draft"
    }
    ```

3.  **Publishing**:
    - To publish, change `"status": "draft"` to `"status": "published"` in `index.json`.
    - To feature a post, set `"featured": true`.

## Managing Drafts

- Posts with `"status": "draft"` in `index.json` will **not** be shown on the production website.
- You can keep the `.mdx` file in the folder and the entry in `index.json` while working on it.

## Image Handling

- **External Images**: Use the full URL (e.g., Unsplash). Ensure the domain is allowed in `next.config.js`.
- **Local Images**: Place images in `public/assets/blog/` and reference them as `/assets/blog/my-image.jpg`.

## Updating Content

- To update the **content** (text, code blocks), edit the `.mdx` file.
- To update the **metadata** (title, excerpt, image, date), edit the `index.json` file.

## Deleting a Post

1.  Remove the object from `content/posts/index.json`.
2.  (Optional) Delete the `.mdx` file from `content/posts/`.
