---
sidebar_position: 3
---

# Middleware

Gin's middleware function is a key feature, providing a way to process requests before they reach the actual handlers, and responses before they're sent back to the client.

## Overview

- **Definition:** Middleware is a piece of code that gets executed before and/or after the main handler is executed. It's commonly used for logging, authentication, data preprocessing, and more.

## How Middleware Works

- **Execution Order:** Middleware functions are executed in the order they are added. If added globally, they apply to all routes. If added to a group or specific route, they only apply there.
- **Access to Context:** Each middleware function receives a Gin `Context` object, which lets it interact with the request and response, and even modify them.
- **Flow Control:** Middleware can decide whether to pass the context to the next piece of middleware or handler in the chain, or to abort the chain.

## Types of Middleware

- **Global Middleware:** Applied to all routes in the application.
  - Example: Logger, Recovery (provided by Gin)
- **Group-Specific Middleware:** Applied only to routes within a specific group.
  - Useful for scenarios like admin routes needing authentication.
- **Route-Specific Middleware:** Applied to specific routes.
  - Good for when only certain endpoints require specific processing.

## Ready-to-use Middlewares

There are some ready-to-use middlewares available made by the community.

You can find them at [gin-contrib](https://github.com/gin-contrib).

## Writing Custom Middleware

A Gin middleware is simply a function that takes a Gin `Context` and returns nothing. It calls `c.Next()` to pass control to the next handler or middleware:

  ```go
  func MyCustomMiddleware(c *gin.Context) {
    // Pre-processing code here
    c.Next()
    // Post-processing code here
  }
  ```

## Using Middleware

### Global Middlweare

  ```go
  r := gin.Default()
  r.Use(MyCustomMiddleware)
  ```

### Group-Specific Middleware

  ```go
  v1 := r.Group("/admin").Use(MyCustomMiddleware)
  v1.GET("/dashboard", adminDashboardHandler)
  ```

### Route-Specific Middleware

  ```go
  r.GET("/dashboard", MyCustomMiddleware, dashboardHandler)
  ```

## Aborting a Request

### Basic Abort

To immediately stop processing further handlers in the middleware chain, you use the `c.Abort()` method of the Gin context. After calling `c.Abort()`, Gin will not call any subsequent handlers in the chain for the current request.

  ```go
  func MyAuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
      // Suppose you have some logic to check authentication
      if !isAuthenticated(c) {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
        c.Abort() // This aborts processing any further middleware or handlers
        return
      }
      // If authenticated, continue to the next handler
      c.Next()
    }
  }
  ```

### Abort with status

`c.AbortWithStatus()` aborts the processing of the request and writes the specified HTTP status code to the response. It's a convenient way to stop further processing and immediately respond with a status code.

  ```go
  func MyCheckMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
      if someCheckFails {
        c.AbortWithStatus(http.StatusForbidden) // Immediately abort with a 403 Forbidden status
        return
      }
      c.Next()
    }
  }
  ```

### Abort with status and JSON

`c.AbortWithStatusJSON()` is similar to `c.AbortWithStatus`, but it also allows you to send a JSON response along with the status code. This is especially useful when you want to return a structured error message or additional data in the response.

  ```go
  func MyAuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
      if !isAuthenticated(c) {
        c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized", "detail": "Token is invalid or expired"})
        return
      }
      c.Next()
    }
  }
  ```

### Returning an Error

To return an error from a middleware, you use the `c.AbortWithError()` method. This method not only aborts the processing of further handlers but also attaches an error to the context. This error can then be logged or processed by subsequent middleware (like a custom error handling middleware).

  ```go
  func MyErrorEmittingMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
      // Some error condition
      if someErrorCondition {
        err := errors.New("some error occurred")
        c.AbortWithError(http.StatusBadRequest, err).SetType(gin.ErrorTypePrivate)
        return
      }
      c.Next()
    }
  }
  ```

### Handling Errors

It's common to have a custom error handling middleware at the end of your middleware chain to catch and process any errors. For example:

   ```go
  func ErrorHandler() gin.HandlerFunc {
    return func(c *gin.Context) {
      c.Next() // Execute all the handlers

      // Check if there are any errors
      if len(c.Errors) > 0 {
        // Process the errors, log them, or return a generic error response
        c.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
      }
    }
  }
  ```


## Use Cases

- **Authentication:** Check if a user is authenticated and authorized to access a route.
- **Logging:** Log details about the request/response for debugging or analytics.
- **Data Validation:** Validate or sanitize input data before it reaches the handler.
- **Error Handling:** Centralize error handling logic in one place.
- **Setting Headers:** Add common headers to responses, like CORS headers.

<br />
:::tip Best Practices

- **Keep it Light:** Middleware should be lightweight and not perform heavy processing, to avoid slowing down the request/response cycle.
- **Reusability:** Write middleware functions to be reusable across different parts of the application.

:::
