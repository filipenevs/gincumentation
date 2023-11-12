---
sidebar_position: 2
---

# Get started

We will see in this section how to install and run your "hello world" using Gin.

## Requirements

- [Go](https://go.dev/doc/install): any one of the three latest major [releases](https://go.dev/doc/devel/release)

You might try to run Gin on other versions of Go, it might work, but nothing guarantees that everything will function as planned.


## Gin Instalation

1. **Initialize Your Go Module:** In your project directory, initialize a new Go module by running the command:
```bash
go mod init <module-name>
```

2. **Install Gin:** To install Gin, use the go get command:
```bash
go get -u github.com/gin-gonic/gin
```

3. **Import Gin in Your Project:** In your Go files, import the Gin package to start using it:
```go
import "github.com/gin-gonic/gin"
```

4. **Done:** You and your project are ready to use Golang!

## First Application

Now that you have installed and imported Golang into your project, you can create your first application.


1. **Create a Gin Router:** Create a new Gin router in your main Go file to handle HTTP requests:
```go
r := gin.Default()
```

2. **Define Routes:** Define routes and associate them with handler functions. For example:
```go
r.GET("/init", func(c *gin.Context) {
  c.JSON(200, gin.H{
    "message": "hello world!",
  })
})
```

3. **Run Your Server:** Finally, start your server with the Run method:
```go
r.Run()

// By default, it runs on http://localhost:8080
// You can change port using: r.Run(":3000")
```

4. **Result:** At this moment, your code should look something like this:
```go
package main

import "github.com/gin-gonic/gin"

func main() {
  r := gin.Default()

  r.GET("/init", func(c *gin.Context) {
    c.JSON(200, gin.H{
      "message": "hello world!",
    })
  })

  r.Run()
}
```

5. **Run code:** You can run the code with go run main.go:
```bash
go run main.go
```

6. **Test Your Application:** Test your application by accessing the defined routes in a web browser or using a tool like curl:
```bash
curl http://localhost:8080/init
```

7. **Congratulations:** You have created your first application in Go!