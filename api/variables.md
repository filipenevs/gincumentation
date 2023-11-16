---
sidebar_position: 3
---

# Variables

## [DebugPrintRouteFunc](https://github.com/gin-gonic/gin/blob/v1.9.1/debug.go#L24)

`DebugPrintRouteFunc` indicates debug log output format.

```go
var DebugPrintRouteFunc func(httpMethod, absolutePath, handlerName string, nuHandlers int)
```
## [DefaultErrorWriter](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L44)

`DefaultErrorWriter` is the default `io.Writer` used by Gin to debug errors

```go
var DefaultErrorWriter io.Writer = os.Stderr
```
## [DefaultWriter](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L41)

`DefaultWriter` is the default `io.Writer` used by Gin for debug output and middleware output like `Logger()` or `Recovery()`. Note that both Logger and Recovery provides custom ways to configure their output `io.Writer`.


```go
var DefaultWriter io.Writer = os.Stdout
```

To support coloring in Windows use:


```go
import "github.com/mattn/go-colorable"
gin.DefaultWriter = colorable.NewColorableStdout()
```