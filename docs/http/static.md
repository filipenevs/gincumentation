---
sidebar_position: 4
---

# Static

Serving static files (like HTML, CSS, JavaScript, images, etc.) is a common requirement for web applications. Gin, a popular web framework for Go, provides straightforward ways to serve static files.

## Serving Static Files in Gin

### Using Static Function

The `Static` function in Gin is used to serve files from a directory on the filesystem. This function maps a request path in your application to a directory on your disk.

  ```go
  // r.Static(relativePath, root)
  // relativePath: The path in your URL where the static files will be served from.
  // root: The directory on your disk where the static files are located.

  r := gin.Default()
  r.Static("/assets", "./assets") // In this example, any request to your server at /assets will serve files from the ./assets directory on your disk.
  ```

### Using StaticFile Function

If you need to serve a single static file, use the `StaticFile` function. This is useful for serving files like favicon.ico or a specific downloadable file.

  ```go
  // r.StaticFile(relativePath, filepath)
  // relativePath: The path in your URL where the file will be served from.
  // filepath: The path to the static file on your disk.

  r := gin.Default()
  r.StaticFile("/favicon.ico", "./resources/favicon.ico")
  ```

:::warning Caution

Using `StaticFile` with a path like `/resources.ico` does not work if `resources` is a directory in your project.


```go
// Problematic configuration
r.StaticFile("/resources.ico", "./resources/favicon.ico")
```
**Reason:** The server may confuse the URL path segment with a directory name, leading to routing issues.

**Solution:** Ensure the URL path for static files does not conflict with directory names. Use unique and clear paths.
:::

### Using StaticFS Function

For more control over serving static files, you can use the `StaticFS` function. This function is useful when you want to use an in-memory filesystem or a custom `http.FileSystem`.

  ```go
  // r.StaticFS(relativePath, fs http.FileSystem)
  // relativePath: The path in your URL where the static files will be served from.
  // fs: A custom file system implementation that satisfies http.FileSystem.

  r := gin.Default()
  r.StaticFS("/more-assets", http.Dir("/path/to/more-assets"))
  ```

<br />
:::tip Best Practices

- **Security Considerations:** Be cautious about which directories you expose as static resources. Avoid serving sensitive files or directories.
- **Caching:** For production environments, consider implementing caching mechanisms or using a Content Delivery Network (CDN) for static assets.
- **URL Paths:** Choose clear and logical URL paths for your static assets to make it easy for clients to access them.

:::