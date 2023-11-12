---
sidebar_position: 4
---

# Layouts

In web development layouts play a crucial role in creating a consistent structure across various pages of an application. A layout usually refers to a base template that defines the common structure (like headers, footers, navigation bars) and placeholders for inserting page-specific content. This approach promotes reusability and maintainability.

## Understanding Layouts

### What is a Layout?

- A layout is a template that serves as the foundational structure for other templates (views). It typically includes elements that are common across multiple pages, such as headers, footers, and navigation menus.

### Purpose of Using Layouts

- Layouts prevent repetition of common HTML structures and provide a unified look and feel across the application.
- They allow changes in the common structure to be made in one place, reflecting across all pages using the layout.

## Creating a Base Layout

### Defining a Base Layout:

- The base layout is a standard HTML file with Go's template directives to define where page-specific content will go.
- Use `{{ define "layoutName" }} ... {{ end }}` to define a layout and `{{ template "content" . }}` to indicate where to inject content.

```html title="layout.tmpl"
// highlight-start
{{ define "layout" }}
// highlight-end
<html>
<head>
  <title>{{ .Title }}</title>
  <!-- Other head elements -->
</head>
<body>
  <header><!-- Header content --></header>
  <main>
    // highlight-start
    {{ template "content" . }}
    // highlight-end
  </main>
  <footer><!-- Footer content --></footer>
</body>
</html>
{{ end }}
```

## Using the Layout in Views

### Creating Page-Specific Templates (Views)

- Views are templates for individual pages. They define the "content" block that the base layout will render in its `{{ template "content" . }}` placeholder.

```html title="home.tmpl"
{{ define "content" }}
  <h1>Welcome to the Home Page</h1>
  <p>This is the main content for the Home Page.</p>
{{ end }}
```

### Rendering Views with the Layout

- When rendering a view in Gin, the layout will wrap around the view's content, forming a complete HTML page.


## Loading and Rendering in Gin

### Loading Templates and Layouts

- In Gin, use `LoadHTMLGlob` or `LoadHTMLFiles` to load both your layouts and views.
- Gin will parse these templates and understand the relationship between layouts and views.

### Rendering a View with a Layout

- When handling a request, use `c.HTML` to render the view. Gin automatically combines the view with the specified layout.

```go
router.GET("/", func(c *gin.Context) {
  c.HTML(http.StatusOK, "home.tmpl", gin.H{
    "Title": "Home Page",
  })
})
```

<br />
:::tip Best Practices

- **Consistent Placeholder Names:** Use consistent names like "content" for the main content placeholder across all layouts.
- **Modularize:** Break down complex layouts into smaller, reusable components (partials) for better organization.
- **Clear Structure:** Keep the layout structure clear and logical, reflecting the overall structure of your web pages.

:::