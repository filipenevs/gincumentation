---
sidebar_position: 2
---

# Context

In Gin, `Context` is a struct that contains all the necessary information about a request, its corresponding response, and other middlewares. It's passed to each handler and middleware, allowing them to interact with the incoming HTTP request and construct a response.

## Uses

The `Context` is a powerful tool that encapsulates a wide range of functionalities, making it easier to build and manage complex web applications in Go. Its versatility allows developers to handle requests and responses efficiently, enforce security measures, and maintain the application's state across different stages of request processing:

- **Access Request Data:** 
  - **Query Parameters:** Retrieve query string values. Useful for `GET` requests where parameters are encoded in the URL.
  - **Form Values:** Access `POST` or `PUT` request data encoded as `application/x-www-form-urlencoded` or `multipart/form-data`.
  - **URL Parameters:** Extract parameters defined in the route path, often used for RESTful URLs.
- **Modify Response:** 
  - **Setting Headers:** Modify HTTP response headers to control cache policies, content types, etc.
  - **Write Response Body:** Send data back to the client, including HTML, JSON, XML, or plain text.
  - **Status Codes:** Communicate the result of a request through [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) (e.g., 200 OK, 404 Not Found).
- **Middleware Communication:** 
  - **Data Sharing:** Share data between different pieces of middleware and handlers, enabling a flow of information through the request lifecycle.
  - **Flow Control:** Control the flow of request processing, deciding whether to pass the context to the next middleware or terminate early.
- **Error Handling:** 
  - **Centralized Error Management:** Collect and manage errors that occur during request processing, allowing for a consistent error response strategy.
  - **Logging and Monitoring:** Attach errors and relevant data for logging and monitoring purposes, aiding in debugging and analysis.
- **Timeouts and Cancellation:**
  - **Request Timeouts:** Implement request timeouts, automatically aborting processing if it exceeds a certain duration.
  - **Cancellation Propagation:** Propagate cancellation signals through the processing pipeline, enabling resource cleanup and preventing unnecessary work.
- **Additional Utilities:**
  - **File Upload Handling:** Manage file uploads, making it easier to process multipart form data.
  - **JSON/XML Binding:** Automatically bind request data to Go structs, simplifying the handling of incoming JSON or XML data.
  - **Response Rendering:** Offer multiple methods for rendering responses, such as JSON, XML, HTML, and more, aiding in the creation of APIs and web applications.
- **Security and Authorization:**
  - **Authentication Data:** Store and retrieve user authentication information, useful in authorization middleware.
  - **Cross-Site Request Forgery (CSRF) Protection:** Utilize Gin's middleware to protect against CSRF attacks.
- **Session Management:**
  - **Session Variables:** Store and access session data, useful for maintaining state between requests.

## Basic Example Usage

Here are some basic examples of using `Context` for certain functions, later we will see other ways of doing some of the things described below.

Some examples use the [http package](https://pkg.go.dev/net/http). The `http` package is a core part of the Go standard library, used for building and handling HTTP client and server applications. 

### Access Request Data
  - **Extracting Query Parameters:**

    ```go
    // Assuming a query string like "?name=John&age=30"
    name := c.Query("name") // "John"
    age := c.DefaultQuery("age", "18") // "30", or "18" if not present
    ```
  - **Reading Form Values:**

    ```go
    // For a POST/PUT request with form data
    email := c.PostForm("email")
    password := c.DefaultPostForm("password", "default")
    ```

### Modify Response
  - **Setting Headers:**

    ```go
    c.Header("Content-Type", "application/json")
    c.Header("Cache-Control", "no-cache")
    ```
  - **Sending JSON Response:**

    ```go
    c.JSON(http.StatusOK, gin.H{"status": "success", "data": dataObject})
    ```
  - **Returning Specific Status Codes:**

    ```go
    // For a not found scenario
    c.AbortWithStatus(http.StatusNotFound)
    ```

### Middleware Communication
  - **Passing Data Between Middlewares:**

    ```go
    // In a middleware/handler
    c.Set("user", userInfo)

    // In a subsequent middleware/handler
    user, _ := c.Get("user")
    ```

### Error Handling
  - **Attaching an Error:**

    ```go
    if err != nil {
      c.Error(err) // Add an error to the context
    }
    ```

### Timeouts and Cancellation
  - **Implementing Request Timeout:**

    ```go
    ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
    defer cancel()
    // Use ctx for operations that should be canceled after the timeout
    ```

### File Upload Handling
  - **Processing File Uploads:**

    ```go
    file, _ := c.FormFile("upload")
    c.SaveUploadedFile(file, dstPath)
    ```

### Security and Authorization
  - **Retrieving Authentication Info:**

    ```go
    user, _ := c.Get("AuthenticatedUser")
    // Use user info for authorization checks
    ```

### Session Management
  - **Accessing Session Variables:**

    ```go
    session := sessions.Default(c)
    sessionUserID := session.Get("user_id")
    ```