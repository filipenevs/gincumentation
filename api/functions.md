---
sidebar_position: 4
---

# Functions


## func [CreateTestContext](https://github.com/gin-gonic/gin/blob/v1.9.1/test_helpers.go#L10)

`CreateTestContext` returns a fresh engine and context for testing purposes

```go
func CreateTestContext(w http.ResponseWriter) (c *Context, r *Engine)
```

## func [Dir](https://github.com/gin-gonic/gin/blob/v1.9.1/fs.go#L24)

`Dir` returns a `http.FileSystem` that can be used by `http.FileServer()`. It is used internally in `router.Static()`. if `listDirectory == true`, then it works the same as `http.Dir()` otherwise it returns a filesystem that prevents `http.FileServer()` to list the directory files.

```go
func Dir(root string, listDirectory bool) http.FileSystem
```

## func [DisableBindValidation](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L81)

`DisableBindValidation` closes the default validator.


```go
func DisableBindValidation()
```

## func [DisableConsoleColor](https://github.com/gin-gonic/gin/blob/v1.9.1/logger.go#L155)

`DisableConsoleColor` disables color output in the console.

```go
func DisableConsoleColor()
```

## func [EnableJsonDecoderDisallowUnknownFields](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L93)

`EnableJsonDecoderDisallowUnknownFields` sets true for `binding.EnableDecoderDisallowUnknownFields` to call the `DisallowUnknownFields` method on the JSON Decoder instance.
unc CreateTestContext(w http.ResponseWriter) (c *Context, r *Engine)

```go
func EnableJsonDecoderDisallowUnknownFields()
```

## func [EnableJsonDecoderUseNumber](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L87)

`EnableJsonDecoderUseNumber` sets true for `binding.EnableDecoderUseNumber` to call the `UseNumber` method on the JSON Decoder instance.

```go
func EnableJsonDecoderUseNumber()
```

## func [ForceConsoleColor](https://github.com/gin-gonic/gin/blob/v1.9.1/logger.go#L160)

`ForceConsoleColor` force color output in the console.

```go
func ForceConsoleColor()
```

## func [IsDebugging](https://github.com/gin-gonic/gin/blob/v1.9.1/debug.go#L19)

`IsDebugging` returns true if the framework is running in debug mode. Use `SetMode(gin.ReleaseMode)` to disable debug mode.

```go
func IsDebugging() bool
```

## func [Mode](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L98)

`Mode` returns current gin mode.

```go
func Mode() string
```

## func [SetMode](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L57)

`SetMode` sets gin mode according to input string.

```go
func SetMode(value string)
```