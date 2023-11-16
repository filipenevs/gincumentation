---
sidebar_position: 2
---

# Constants

## [Content-Type MIME](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L28)

Content-Type MIME of the most common data formats.

See Gin `binding` package [here](https://pkg.go.dev/github.com/gin-gonic/gin@v1.9.1/binding).

```go
const (
	MIMEJSON              = binding.MIMEJSON
	MIMEHTML              = binding.MIMEHTML
	MIMEXML               = binding.MIMEXML
	MIMEXML2              = binding.MIMEXML2
	MIMEPlain             = binding.MIMEPlain
	MIMEPOSTForm          = binding.MIMEPOSTForm
	MIMEMultipartPOSTForm = binding.MIMEMultipartPOSTForm
	MIMEYAML              = binding.MIMEYAML
	MIMETOML              = binding.MIMETOML
)
```

## [Trusted platforms](https://github.com/gin-gonic/gin/blob/v1.9.1/gin.go#L73)

```go
const (
	// PlatformGoogleAppEngine when running on Google App Engine. Trust X-Appengine-Remote-Addr
	// for determining the client's IP
	PlatformGoogleAppEngine = "X-Appengine-Remote-Addr"
	// PlatformCloudflare when using Cloudflare's CDN. Trust CF-Connecting-IP for determining
	// the client's IP
	PlatformCloudflare = "CF-Connecting-IP"
)
```

## [AuthUserKey](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L18)

`AuthUserKey` is the cookie name for user credential in basic auth.


```go
const (
	// DebugMode indicates gin mode is debug.
	DebugMode = "debug"
	// ReleaseMode indicates gin mode is release.
	ReleaseMode = "release"
	// TestMode indicates gin mode is test.
	TestMode = "test"
)
```
```go
const AuthUserKey = "user"
```

## [BindKey](https://github.com/gin-gonic/gin/blob/v1.9.1/utils.go#L19)

`BindKey` indicates a default bind key.

```go
const BindKey = "_gin-gonic/gin/bindkey"
```

## [BodyBytesKey](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L41)

`BodyBytesKey` indicates a default body bytes key.

```go
const BodyBytesKey = "_gin-gonic/gin/bodybyteskey"
```
## [ContextKey](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L44)

`ContextKey` is the key that a Context returns itself for.

```go
const ContextKey = "_gin-gonic/gin/contextkey"
```

## [EnvGinMode](https://github.com/gin-gonic/gin/blob/v1.9.1/mode.go#L16)

`EnvGinMode` indicates environment name for gin mode.

```go
const EnvGinMode = "GIN_MODE"
```

## [Version](https://github.com/gin-gonic/gin/blob/v1.9.1/version.go#L8)

`Version` is the current gin framework's version.

```go
const Version = "v1.9.1"
```