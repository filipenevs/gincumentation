---
sidebar_position: 3
---

# Partials

Partials in Gin, as in many web frameworks, are reusable template segments that can be included in multiple templates. They help keep your templates DRY (Don't Repeat Yourself) by allowing you to write common template code once and reuse it across different pages.

## Understanding Partials

### What are Partials?

- Partials are small, reusable components of a template. They are often used for common website elements like headers, footers, navigation bars, etc.
- They help in maintaining consistency across different web pages and reduce redundancy in template code.

### Benefits of Using Partials

- **Maintainability:** Changes in a partial are reflected everywhere it's used, making it easier to maintain and update your templates.
- **Readability:** Breaking down templates into smaller components (partials) enhances readability and organization.

## Creating Partials

### Defining a Partial

- A partial is just a regular template file that contains a segment of HTML code.
- Create a partial as you would create any other template, but typically it represents a smaller, self-contained segment of the page.

```html title="template/partials/header.tmpl"
<header>
  <nav>
    <!-- Navigation items -->
  </nav>
</header>
```

### Using Partials in Templates

- Use the `{{ template }}` action to include a partial in another template.
- When rendering the main template, Gin will replace the `{{ template }}` action with the content of the partial.

```html title="template/main.tmpl"
<html>
<body>
    {{ template "header.tmpl" . }}
    <!-- Main content -->
</body>
</html>
```

### Passing Data to Partials

- Partials have access to the same data as the main template. When you include a partial, you can pass the current context (`.`, representing the data passed to the template) to it.
- If needed, you can also pass specific data to a partial.

## Loading and Rendering in Gin

### Loading Templates:

Use `router.LoadHTMLGlob("templates/**/*")` in Gin to load all templates, including partials, if they are within the templates directory.

### Rendering a Template with Partials:

When you render a template using `c.HTML()`, Gin will process the main template and all included partials.

<br />
:::tip Best Practices

- **Use Meaningful Names:** Name your partials in a way that clearly indicates their purpose or content.
- **Keep Partials Small and Focused:** Each partial should represent a specific piece of the UI and should be kept as small and focused as possible.
- **Regularly Refactor:** As your application grows, keep refactoring and breaking down templates into smaller partials where appropriate.

:::


