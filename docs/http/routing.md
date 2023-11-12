---
sidebar_position: 1
---

# Routing

Gin's routing function is a fundamental aspect of the framework, allowing developers to define how the application responds to different HTTP requests (like GET, POST, etc.) on specific routes (URL paths).

Gin's routing is designed for high performance, making it an excellent choice for high-load applications.

## Overview

- **Purpose:** Routing in Gin is used to match incoming HTTP requests to specific handlers based on the URL path and the HTTP method.
- **Handlers:** A handler is a function that Gin calls when it matches a route. These functions receive a [Context](./context) object which is used to access request data, write responses, and more.

## Defining Routes

- **Basic Syntax:** In Gin, routes are defined using methods on the *gin.Engine instance (commonly initialized as `r := gin.Default()`). Each method corresponds to an HTTP method.
- **Route Patterns:** You can define static routes (like `/users`) and dynamic routes (like `/users/:id` where `:id` is a variable).
- **Handlers:** For each route, you assign a handler function. This function will be called whenever the route is accessed with the corresponding HTTP method.

## Examples of Route Definitions

### Static Route

  ```go
  r.GET("/ping", func(c *gin.Context) {
      c.JSON(http.StatusOK, gin.H{"message": "pong"})
  })
  ```

### Dynamic Route

  ```go
  r.GET("/users/:id", func(c *gin.Context) {
    id := c.Param("id")
    c.JSON(http.StatusOK, gin.H{"user_id": id})
  })
  ```

## Advanced Routing

### Route Groups

Group related routes together. This is useful for applying common middleware or a common path prefix.

  ```go
  // Simple group: v1
  v1 := r.Group("/v1")
  {
    v1.POST("/login", loginEndpoint)
    v1.POST("/submit", submitEndpoint)
    v1.POST("/read", readEndpoint)
  }

  // Simple group: v2
  v2 := r.Group("/v2")
  {
    v2.POST("/login", loginEndpoint)
    v2.POST("/submit", submitEndpoint)
    v2.POST("/read", readEndpoint)
  }
  ```

### Nested Route Groups

You can create nested route groups to organize your routes hierarchically, which is useful for larger applications with multiple sub-sections.

  ```go
  api := r.Group("/api")
  {
    v1 := api.Group("/v1")
    {
      v1.GET("/users", getUsersV1)
      v1.POST("/users", createUserV1)
    }

    v2 := api.Group("/v2")
    {
      v2.GET("/users", getUsersV2)
    }
  }
  ```

### HTTP Method Combination

Define a single handler for multiple methods.

  ```go
  r.Any("/any", anyHandler)
  ```