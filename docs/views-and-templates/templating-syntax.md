---
sidebar_position: 2
---

# Templating Syntax

Gin uses Go's built-in [html/template](https://pkg.go.dev/html/template) package for rendering HTML templates, providing a powerful and flexible way to create dynamic web pages. Understanding the templating syntax is crucial for effectively using Gin to serve HTML.

## Basic Templating Syntax

### Actions

- **Curly braces:** Actions are enclosed in `{{` and `}}` and are used to insert content, call functions, or control the flow. (If you wanted to change to custom delimiters, see [this section](#custom-delimiters))
- Actions can include conditionals, range loops, and more.

### Variables

- To display a variable, use `{{ .VariableName }}`.
- The dot (`.`) refers to the current context, and `VariableName` is a field in the data you pass to the template.

## Conditionals

### If-Else Statements

- Use `{{if .Condition}} ... {{else}} ... {{end}}` to create conditional logic.
- `Condition` is a boolean expression.

```html
{{if .LoggedIn}}
  <p>Welcome back, {{.Username}}!</p>
{{else}}
  <p>Please log in.</p>
{{end}}
```

### Comparisons and Logical Operators

- The templating syntax supports basic comparisons (`eq`, `lt`, `le`, `gt`, and` g`e for equality, less than, less than or equal to, greater than, and greater than or equal to comparisons, respectively) and logical operators (`and`, `or`, `not`).

```html title="templates/user-status.tmpl"
{{if and (gt .Age 18) .IsSubscriber}}
    <p>Welcome to our premium content section!</p>
{{else if gt .Age 18}}
    <p>Welcome! Have you considered subscribing for more content?</p>
{{else}}
    <p>Check out our youth section for cool content!</p>
{{end}}
```

```go title="main.go"
func main() {
  router := gin.Default()
  router.LoadHTMLGlob("templates/*")

  router.GET("/user-status", func(c *gin.Context) {
      // highlight-start
      // Example user data
      userData := struct {
          Age          int
          IsSubscriber bool
      }{
          Age:          17,
          IsSubscriber: false,
      }

      c.HTML(http.StatusOK, "user-status.tmpl", userData)
      // highlight-end
  })

  router.Run()
}
```

## Loops

### Range

- Use `{{range .Collection}} ... {{end}}` to iterate over slices, arrays, maps, or channels.
- Within the range block, `.` refers to the current element.

```html
<ul>
  // highlight-start
  {{range .Items}}
    <li>{{ . }}</li>
  {{end}}
  // highlight-end
</ul>
```

### Variables in Range

- You can declare a variable to hold the index or key in the range loop.

```html
{{range $index, $element := .Items}}
  <p>{{$index}}: {{$element.Name}}</p>
{{end}}
```

## Comments

- Use` {{/* comment */}}` for comments within templates. These comments won't appear in the rendered output.
```html
// highlight-start
{{/* This is a comment */}}
// highlight-end
{{range $index, $element := .Items}}
  <p>{{$index}}: {{$element.Name}}</p>
{{end}}
```

## Custom Delimiters

You may want to use custom delimiters. You can change the delimiters using the `r.Delims()` function.

```go title="main.go"
func main() {
  r := gin.Default()
  // highlight-start
  r.Delims("{[{", "}]}")
  // highlight-end
  r.LoadHTMLGlob("templates/*")

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
    // highlight-start
    <title>{[{ .title }]}</title>
    // highlight-end
  </head>
  <body>
    // highlight-start
    <h1>{[{ .heading }]}</h1>
    // highlight-end
  </body>
</html>
```