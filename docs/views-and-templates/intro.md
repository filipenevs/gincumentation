---
sidebar_position: 1
---

# Introduction

Serving HTML layouts in Gin involves using Gin's HTML rendering capabilities to combine templates with dynamic data and serve them as HTML responses. This capability is crucial for web applications that require dynamic content based on user interactions, server-side logic, or data from databases.

## Understanding HTML Templates in Gin

### HTML Templates
  - Gin uses Go's `html/template` package to process HTML templates. This package allows you to embed Go code in your HTML files, enabling dynamic content rendering.
  - Templates help separate your application's business logic from its presentation layer.

### Why Serve HTML in Gin
  - **Server-Side Rendering:** Serving HTML from the server is essential for web applications that need to present dynamic content, such as user-specific data or real-time updates.
  - **SEO and Performance:** Server-side rendered pages are often better for SEO and can offer faster initial page load compared to client-side rendering, as the content is ready as soon as the HTML is loaded.

## Setting Up Your Environment

### Organizing Templates
  - Typically, you store your HTML templates in a dedicated directory, like `templates/`.
  - You can further organize this directory into subdirectories for layouts, partials, and pages.

### Template Files
  - Template files usually have the `.html` or `.tmpl` extension.
  - A typical structure includes a base layout (like `layout.html`) and specific page templates that inject content into this layout.

## Creating and Loading Templates

1. **Creating Templates:**
    - Create HTML files with Go's templating syntax for dynamic data. For example, `{{ .VariableName }}` to display a variable, `{{if .Condition}}...{{end}}` for conditions, and `{{range .Collection}}...{{end}}` for loops.
    - Layouts define the common structure (header, footer, etc.), and pages define the content specific to each route.
2. **Loading Templates in Gin:**
    - Use `router.LoadHTMLGlob("templates/*")` or `router.LoadHTMLFiles("templates/home.html", "templates/login.html")` to load your templates.
    - Gin compiles these templates and makes them available for rendering in handlers.
3. **Rendering Templates in Handlers:**
    - Define handlers for your routes that render HTML templates. For example, a handler for the home page might render a `home.tmpl` template.
    - Use `c.HTML()` to render the template. Pass the HTTP status code, the name of the template, and any dynamic data you want to inject into the template.
    - The data passed to `c.HTML()` can be anything from simple strings and numbers to complex structs. This data is what makes your templates dynamic.

```go title="main.go"
func main() {
  r := gin.Default()
  r.LoadHTMLGlob("templates/*")
  //r.LoadHTMLFiles("templates/home.tmpl", "templates/template1.html")
  r.GET("/index", func(c *gin.Context) {
    c.HTML(http.StatusOK, "home.tmpl", gin.H{
      "title": "Home",
      "heading": "Home Page",
    })
  })
  r.Run()
}
```

```html title="templates/home.tmpl"
<html>
  <head>
    <title>{{ .title }}</title>
  </head>
  <body>
    <h1>
      {{ .heading }}
    </h1>
  </body>
</html>
```
<br />
:::tip Best Practices

- **File Extension Consistency:** Stick to one type of file extension (either `.tmpl` or `.html`) throughout your project for clarity.
- **Performance:** In production, templates should be loaded and parsed once at startup, not on every request, for efficiency.
- **HTML Escaping:** Ensure that dynamic data rendered in templates is properly escaped to avoid Cross-Site Scripting (XSS) vulnerabilities. Go's template package automatically escapes variables.
- **Reusability:** Design your templates to be reusable. Use layouts for common elements and partials for components used in multiple places.
- **Separation of Concerns:** Keep a clear separation between your presentation logic and business logic.
- **Caching:** In a production environment, cache your templates for better performance.

:::

