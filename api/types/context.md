---
sidebar_position: 2
---

# Context

## type [Context](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L51)

`Context` is the most important part of gin. It allows us to pass variables between middleware, manage the flow, validate the JSON of a request and render a JSON response for example.

```go
type Context struct {
	Request *http.Request
	Writer  ResponseWriter

	Params Params

	// Keys is a key/value pair exclusively for the context of each request.
	Keys map[string]any

	// Errors is a list of errors attached to all the handlers/middlewares who used this context.
	Errors errorMsgs

	// Accepted defines a list of manually accepted formats for content negotiation.
	Accepted []string
	// contains filtered or unexported fields
}
```

## func [CreateTestContextOnly](https://github.com/gin-gonic/gin/blob/v1.9.1/test_helpers.go#L19)

`CreateTestContextOnly` returns a fresh context base on the engine for testing purposes


```go
func CreateTestContextOnly(w http.ResponseWriter, r *Engine) (c *Context)
```

## func (*Context) [Abort](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L188)

Abort prevents pending handlers from being called. Note that this will not stop the current handler. Let's say you have an authorization middleware that validates that the current request is authorized. If the authorization fails (ex: the password does not match), call Abort to ensure the remaining handlers for this request are not called.


```go
func (c *Context) Abort()
```

## func (*Context) [AbortWithError](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L211)

`AbortWithError` calls `AbortWithStatus()` and `Error()` internally. This method stops the chain, writes the status code and pushes the specified error to `c.Errors`. See [`Context.Error()`](#func-context-error) for more details.

```go
func (c *Context) AbortWithError(code int, err error) *Error
```

## func (*Context) [AbortWithStatus](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L194)

`AbortWithStatus` calls [`Abort()`](#func-context-abort) and writes the headers with the specified status code. For example, a failed attempt to authenticate a request could use: `context.AbortWithStatus(401)`.

```go
func (c *Context) AbortWithStatus(code int)
```

## func (*Context) [AbortWithStatusJSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L203)

`AbortWithStatusJSON` calls [`Abort()`](#func-context-abort) and then `JSON` internally. This method stops the chain, writes the status code and return a JSON body. It also sets the Content-Type as "application/json".

```go
func (c *Context) AbortWithStatusJSON(code int, jsonObj any)
```

## func (*Context) [AddParam](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L402)

`AddParam` adds param to context and replaces path param key with given value for e2e testing purposes Example Route: "/user/:id" AddParam("id", 1) Result: "/user/1".

```go
func (c *Context) AddParam(key, value string)
```

## func (*Context) [AsciiJSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L976)

`AsciiJSON` serializes the given struct as JSON into the response body with unicode to ASCII string. It also sets the Content-Type as "application/json".

```go
func (c *Context) AsciiJSON(code int, obj any)
```

## func (*Context) [Bind](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L629)

`Bind` checks the Method and Content-Type to select a binding engine automatically.

```go
func (c *Context) Bind(obj any) error
```

Depending on the "Content-Type" header different bindings are used, for example:

```
"application/json" --> JSON binding
"application/xml"  --> XML binding
```

It parses the request's body as JSON if Content-Type == "application/json" using JSON or XML as a JSON input. It decodes the json payload into the struct specified as a pointer. It writes a 400 error and sets Content-Type header "text/plain" in the response if input is not valid.

## func (*Context) [BindHeader](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L660)

`BindHeader` is a shortcut for `c.MustBindWith(obj, binding.Header)`.

```go
func (c *Context) BindHeader(obj any) error
```

## func (*Context) [BindJSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L635)

`BindJSON` is a shortcut for c.MustBindWith(obj, binding.JSON).

```go
func (c *Context) BindJSON(obj any) error
```

## func (*Context) [BindQuery](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L645)

`BindQuery` is a shortcut for c.MustBindWith(obj, binding.Query).

```go
func (c *Context) BindQuery(obj any) error
```

## func (*Context) [BindXML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L640)

`BindXML` is a shortcut for c.MustBindWith(obj, binding.BindXML).

```go
func (c *Context) BindXML(obj any) error
```

## func (*Context) [BindYAML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L650)

`BindYAML` is a shortcut for c.MustBindWith(obj, binding.YAML).

```go
func (c *Context) BindYAML(obj any) error
```

## func (*Context) [ClientIP](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L771)

`ClientIP` implements one best effort algorithm to return the real client IP. It calls [`c.RemoteIP()`](#func-context-remoteip) under the hood, to check if the remote IP is a trusted proxy or not. If it is it will then try to parse the headers defined in Engine.RemoteIPHeaders (defaulting to [X-Forwarded-For, X-Real-Ip]). If the headers are not syntactically valid OR the remote IP does not correspond to a trusted proxy, the remote IP (coming from `Request.RemoteAddr`) is returned.


```go
func (c *Context) ClientIP() string
```

## func (*Context) [ContentType](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L818)

`ContentType` returns the Content-Type header of the request.


```go
func (c *Context) ContentType() string
```

## func (*Context) [Cookie](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L907)

`Cookie` returns the named cookie provided in the request or ErrNoCookie if not found. And return the named cookie is unescaped. If multiple cookies match the given name, only one cookie will be returned.

```go
func (c *Context) Cookie(name string) (string, error)
```

## func (*Context) [Copy](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L112)

`Copy` returns a copy of the current context that can be safely used outside the request's scope. This has to be used when the context has to be passed to a goroutine.


```go
func (c *Context) Copy() *Context
```

## func (*Context) [Data](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1022)

`Data` writes some data into the body stream and updates the HTTP code.

```go
func (c *Context) Data(code int, contentType string, data []byte)
```

## func (*Context) [DataFromReader](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1030)

`DataFromReader` writes the specified reader into the body stream and updates the HTTP code.

```go
func (c *Context) DataFromReader(code int, contentLength int64, contentType string, reader io.Reader, extraHeaders map[string]string)
```

## func (*Context) [Deadline](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1191)

`Deadline` returns that there is no deadline (ok==false) when c.Request has no Context.


```go
func (c *Context) Deadline() (deadline time.Time, ok bool)
```

## func (*Context) [DefaultPostForm](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L499)

`DefaultPostForm` returns the specified key from a POST urlencoded form or multipart form when it exists, otherwise it returns the specified defaultValue string. See: [`PostForm()`](#func-context-postform) and [`GetPostForm()`](#func-context-getpostform) for further information.


```go
func (c *Context) DefaultPostForm(key, defaultValue string) string
```

## func (*Context) [DefaultQuery](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L428)

`DefaultQuery` returns the keyed url query value if it exists, otherwise it returns the specified defaultValue string. See: [`Query()`](#func-context-query) and [`GetQuery()`](#func-context-getquery) for further information.


```go
func (c *Context) DefaultQuery(key, defaultValue string) string
```
```go
//GET /?name=Manu&lastname=
c.DefaultQuery("name", "unknown")  // "Manu"
c.DefaultQuery("id", "none")       // "none"
c.DefaultQuery("lastname", "none") // ""
```

## func (*Context) [Done](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1199)

`Done` returns nil (chan which will wait forever) when `c.Request` has no `Context`.


```go
func (c *Context) Done() <-chan struct{}
```

## func (*Context) [Err](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1207)

`Err` returns nil when `c.Request` has no `Context`.

```go
func (c *Context) Err() error
```

## func (*Context) [Error](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L225)

`Error` attaches an error to the current context. The error is pushed to a list of errors. It's a good idea to call Error for each error that occurred during the resolution of a request. A middleware can be used to collect all the errors and push them to a database together, print a log, or append it in the HTTP response. Error will panic if err is nil.


```go
func (c *Context) Error(err error) *Error
```

## func (*Context) [File](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1040)

`File` writes the specified file into the body stream in an efficient way.


```go
func (c *Context) File(filepath string)
```

## func (*Context) [FileAttachment](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1063)

`FileAttachment` writes the specified file into the body stream in an efficient way On the client side, the file will typically be downloaded with the given filename


```go
func (c *Context) FileAttachment(filepath, filename string)
```

## func (*Context) [FileFromFS](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1045)

`FileFromFS` writes the specified file from [`http.FileSystem`](https://pkg.go.dev/net/http#FileSystem) into the body stream in an efficient way.


```go
func (c *Context) FileFromFS(filepath string, fs http.FileSystem)
```

## func (*Context) [FormFile](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L578)

`FormFile` returns the first file for the provided form key.

```go
func (c *Context) FormFile(name string) (*multipart.FileHeader, error)
```

## func (*Context) [FullPath](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L160)

`FullPath` returns a matched route full path. For not found routes returns an empty string.


```go
func (c *Context) FullPath() string
```
```go
r.GET("/user/:id", func(c *gin.Context) {
    c.FullPath() == "/user/:id" // true
})
```

## func (*Context) [Get](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L261)

`Get` returns the value for the given key, ie: (value, true). If the value does not exist it returns (nil, false)


```go
func (c *Context) Get(key string) (value any, exists bool)
```

## func (*Context) [GetBool](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L285)

`GetBool` returns the value associated with the key as a boolean.


```go
func (c *Context) GetBool(key string) (b bool)
```

## func (*Context) [GetDuration](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L341)

`GetDuration` returns the value associated with the key as a duration.

```go
func (c *Context) GetDuration(key string) (d time.Duration)
```

## func (*Context) [GetFloat64](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L325)

`GetFloat64` returns the value associated with the key as a float64.

```go
func (c *Context) GetFloat64(key string) (f64 float64)
```

## func (*Context) [GetHeader](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L870)

`GetHeader` returns value from request headers.

```go
func (c *Context) GetHeader(key string) string
```

## func (*Context) [GetInt](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L293)

`GetInt` returns the value associated with the key as an integer.

```go
func (c *Context) GetInt(key string) (i int)
```

## func (*Context) [GetInt64](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L301)

`GetInt64` returns the value associated with the key as an integer.

```go
func (c *Context) GetInt64(key string) (i64 int64)
```

## func (*Context) [GetPostForm](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L514)

`GetPostForm` is like [`PostForm(key)`](#func-context-postform). It returns the specified key from a POST urlencoded form or multipart form when it exists `(value, true)` (even when the value is an empty string), otherwise it returns ("", false).

```go
func (c *Context) GetPostForm(key string) (string, bool)
```

For example, during a PATCH request to update the user's email:

```
email=mail@example.com -->  ("mail@example.com", true) := GetPostForm("email") // set email to "mail@example.com"
email=                 -->  ("", true) := GetPostForm("email")                 // set email to ""
                       -->  ("", false) := GetPostForm("email")                // do nothing with email
```

## func (*Context) [GetPostFormArray](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L543)

`GetPostFormArray` returns a slice of strings for a given form key, plus a boolean value whether at least one value exists for the given key.


```go
func (c *Context) GetPostFormArray(key string) (values []string, ok bool)
```

## func (*Context) [GetPostFormMap](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L557)

`GetPostFormMap` returns a map for a given form key, plus a boolean value whether at least one value exists for the given key.

```go
func (c *Context) GetPostFormMap(key string) (map[string]string, bool)
```

## func (*Context) [GetQuery](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L444)

`GetQuery` is like [`Query()`](#func-context-query), it returns the keyed url query value if it exists `(value, true)` (even when the value is an empty string), otherwise it returns `("", false)`. It is shortcut for `c.Request.URL.Query().Get(key)`

```go
func (c *Context) GetQuery(key string) (string, bool)
```
```go
// GET /?name=Manu&lastname=
("Manu", true) == c.GetQuery("name")
("", false) == c.GetQuery("id")
("", true) == c.GetQuery("lastname")
```

## func (*Context) [GetQueryArray](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L470)

`GetQueryArray` returns a slice of strings for a given query key, plus a boolean value whether at least one value exists for the given key.

```go
func (c *Context) GetQueryArray(key string) (values []string, ok bool)
```

## func (*Context) [GetQueryMap](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L484)

`GetQueryMap` returns a map for a given query key, plus a boolean value whether at least one value exists for the given key.


```go
func (c *Context) GetQueryMap(key string) (map[string]string, bool)
```

## func (*Context) [GetRawData](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L875)

`GetRawData` returns stream data.

```go
func (c *Context) GetRawData() ([]byte, error)
```

## func (*Context) [GetString](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L277)

`GetString` returns the value associated with the key as a string.

```go
func (c *Context) GetString(key string) (s string)
```

## func (*Context) [GetStringMap](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L357)

`GetStringMap` returns the value associated with the key as a map of interfaces.

```go
func (c *Context) GetStringMap(key string) (sm map[string]any)
```

## func (*Context) [GetStringMapString](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L365)

`GetStringMapString` returns the value associated with the key as a map of strings.

```go
func (c *Context) GetStringMapString(key string) (sms map[string]string)
```

## func (*Context) [GetStringMapStringSlice](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L373) 

`GetStringMapStringSlice` returns the value associated with the key as a map to a slice of strings.

```go
func (c *Context) GetStringMapStringSlice(key string) (smss map[string][]string)
```

## func (*Context) [GetStringSlice](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L349)

`GetStringSlice` returns the value associated with the key as a slice of strings.

```go
func (c *Context) GetStringSlice(key string) (ss []string)
```

## func (*Context) [GetTime](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L333)

`GetTime` returns the value associated with the key as time.

```go
func (c *Context) GetTime(key string) (t time.Time)
```

## func (*Context) [GetUint](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L309)

`GetUint` returns the value associated with the key as an unsigned integer.

```go
func (c *Context) GetUint(key string) (ui uint)
```

## func (*Context) [GetUint64](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L317)

`GetUint64` returns the value associated with the key as an unsigned integer.

```go
func (c *Context) GetUint64(key string) (ui64 uint64)
```

## func (*Context) [HTML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L936)

`HTML` renders the HTTP template specified by its file name. It also updates the HTTP code and sets the Content-Type as "text/html". See [http://golang.org/doc/articles/wiki/](http://golang.org/doc/articles/wiki/)

```go
func (c *Context) HTML(code int, name string, obj any)
```

## func (*Context) [Handler](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L150)

`Handler` returns the main handler.

```go
func (c *Context) Handler() HandlerFunc
```

## func (*Context) [HandlerName](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L135)

`HandlerName` returns the main handler's name. For example if the handler is "handleGetUsers()", this function will return "main.handleGetUsers".

```go
func (c *Context) HandlerName() string
```

## func (*Context) [HandlerNames](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L141)

`HandlerNames` returns a list of all registered handlers for this context in descending order, following the semantics of HandlerName()

```go
func (c *Context) HandlerNames() []string
```

## func (*Context) [Header](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L861)

`Header` is an intelligent shortcut for `c.Writer.Header().Set(key, value)`. It writes a header in the response. If value == "", this method removes the header `c.Writer.Header().Del(key)`

```go
func (c *Context) Header(key, value string)
```

## func (*Context) [IndentedJSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L945)

`IndentedJSON` serializes the given struct as pretty JSON (indented + endlines) into the response body. It also sets the Content-Type as "application/json". WARNING: we recommend using this only for development purposes since printing pretty JSON is more CPU and bandwidth consuming. Use [`Context.JSON()`](#func-context-json) instead.

```go
func (c *Context) IndentedJSON(code int, obj any)
```

## func (*Context) [IsAborted](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L180)

`IsAborted` returns true if the current context was aborted.

```go
func (c *Context) IsAborted() bool
```

## func (*Context) [IsWebsocket](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L824)

`IsWebsocket` returns true if the request headers indicate that a websocket handshake is being initiated by the client.

```go
func (c *Context) IsWebsocket() bool
```

## func (*Context) [JSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L970)

`JSON` serializes the given struct as JSON into the response body. It also sets the Content-Type as "application/json".

```go
func (c *Context) JSON(code int, obj any)
```

## func (*Context) [JSONP](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L959)

`JSONP` serializes the given struct as JSON into the response body. It adds padding to response body to request data from a server residing in a different domain than the client. It also sets the Content-Type as "application/javascript".

```go
func (c *Context) JSONP(code int, obj any)
```

## func (*Context) [MultipartForm](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L593)

`MultipartForm` is the parsed multipart form, including file uploads.

```go
func (c *Context) MultipartForm() (*multipart.Form, error)
```

## func (*Context) [MustBindWith](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L677)

`MustBindWith` binds the passed struct pointer using the specified binding engine. It will abort the request with HTTP 400 if any error occurs. See the binding package.

```go
func (c *Context) MustBindWith(obj any, b binding.Binding) error
```

## func (*Context) [MustGet](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L269)

`MustGet` returns the value for the given key if it exists, otherwise it panics.

```go
func (c *Context) MustGet(key string) any
```

## func (*Context) [Negotiate](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1116)

`Negotiate` calls different Render according to acceptable Accept format.

```go
func (c *Context) Negotiate(code int, config Negotiate)
```

## func (*Context) [NegotiateFormat](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1144)

`NegotiateFormat` returns an acceptable Accept format.

```go
func (c *Context) NegotiateFormat(offered ...string) string
```

## func (*Context) [Next](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L171)

`Next` should be used only inside middleware. It executes the pending handlers in the chain inside the calling handler.

```go
func (c *Context) Next()
```

## func (*Context) [Param](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L393)

`Param` returns the value of the URL param. It is a shortcut for `c.Params.ByName(key)`.


```go
func (c *Context) Param(key string) string
```
```go
r.GET("/user/:id", func(c *gin.Context) {
    // a GET request to /user/john
    id := c.Param("id") // id == "/john"

    // a GET request to /user/john/
    id := c.Param("id") // id == "/john/"
})
```

## func (*Context) [PostForm](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L491)

`PostForm` returns the specified key from a POST urlencoded form or multipart form when it exists, otherwise it returns an empty string `("")`.

```go
func (c *Context) PostForm(key string) (value string)
```

## func (*Context) [PostFormArray](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L523)

`PostFormArray` returns a slice of strings for a given form key. The length of the slice depends on the number of params with the given key.

```go
func (c *Context) PostFormArray(key string) (values []string)
```

## func (*Context) [PostFormMap](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L550)

`PostFormMap` returns a map for a given form key.

```go
func (c *Context) PostFormMap(key string) (dicts map[string]string)
```

## func (*Context) [ProtoBuf](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1003)

`ProtoBuf` serializes the given struct as ProtoBuf into the response body.

```go
func (c *Context) ProtoBuf(code int, obj any)
```

## func (*Context) [PureJSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L982)

`PureJSON` serializes the given struct as JSON into the response body. PureJSON, unlike JSON, does not replace special html characters with their unicode entities.

```go
func (c *Context) PureJSON(code int, obj any)
```

## func (*Context) [Query](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L415)

`Query` returns the keyed url query value if it exists, otherwise it returns an empty string `("")`. It is shortcut for `c.Request.URL.Query().Get(key)`

```go
func (c *Context) Query(key string) (value string)
```
```go
// GET /path?id=1234&name=Manu&value=
c.Query("id") == "1234"
c.Query("name") == "Manu"
c.Query("value") == ""
c.Query("wtf") == ""
```

## func (*Context) [QueryArray](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L453)

`QueryArray` returns a slice of strings for a given query key. The length of the slice depends on the number of params with the given key.

```go
func (c *Context) QueryArray(key string) (values []string)
```

## func (*Context) [QueryMap](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L477)

`QueryMap` returns a map for a given query key.

```go
func (c *Context) QueryMap(key string) (dicts map[string]string)
```

## func (*Context) [Redirect](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1013) 

`Redirect` returns an HTTP redirect to the specific location.

```go
func (c *Context) Redirect(code int, location string)
```

## func (*Context) [RemoteIP](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L809)

`RemoteIP` parses the IP from Request.RemoteAddr, normalizes and returns the IP (without the port).

```go
func (c *Context) RemoteIP() string
```

## func (*Context) [Render](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L917)

`Render` writes the response headers and calls `render.Render` to render data.

```go
func (c *Context) Render(code int, r render.Render)
```

## func (*Context) [SSEvent](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1073)

`SSEvent` writes a Server-Sent Event into the body stream.

```go
func (c *Context) SSEvent(name string, message any)
```

## func (*Context) [SaveUploadedFile](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L599)

`SaveUploadedFile` uploads the form file to specific dst.

```go
func (c *Context) SaveUploadedFile(file *multipart.FileHeader, dst string) error
```

## func (*Context) [SecureJSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L952)

`SecureJSON` serializes the given struct as Secure JSON into the response body. Default prepends "while(1)," to response body if the given struct is array values. It also sets the Content-Type as "application/json".

```go
func (c *Context) SecureJSON(code int, obj any)
```

## func (*Context) [Set](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L249)

`Set` is used to store a new key/value pair exclusively for this context. It also lazy initializes `c.Keys` if it was not used previously.

```go
func (c *Context) Set(key string, value any)
```

## func (*Context) [SetAccepted](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1175)

`SetAccepted` sets Accept header data.

```go
func (c *Context) SetAccepted(formats ...string)
```

## func (*Context) [SetCookie](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L887)

`SetCookie` adds a Set-Cookie header to the ResponseWriter's headers. The provided cookie must have a valid Name. Invalid cookies may be silently dropped.

```go
func (c *Context) SetCookie(name, value string, maxAge int, path, domain string, secure, httpOnly bool)
```

## func (*Context) [SetSameSite](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L880)

`SetSameSite` with cookie

```go
func (c *Context) SetSameSite(samesite http.SameSite)
```

## func (*Context) [ShouldBind](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L694)

`ShouldBind` checks the Method and Content-Type to select a binding engine automatically.

```go
func (c *Context) ShouldBind(obj any) error
```

Depending on the "Content-Type" header different bindings are used, for example:

```
"application/json" --> JSON binding
"application/xml"  --> XML binding
```

It parses the request's body as JSON if Content-Type == "application/json" using JSON or XML as a JSON input. It decodes the json payload into the struct specified as a pointer. Like c.Bind() but this method does not set the response status code to 400 or abort if input is not valid.


## func (*Context) [ShouldBindBodyWith](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L749)

`ShouldBindBodyWith` is similar with `ShouldBindWith`, but it stores the request body into the context, and reuse when it is called again.

NOTE: This method reads the body before binding. So you should use `ShouldBindWith` for better performance if you need to call only once.

```go
func (c *Context) ShouldBindBodyWith(obj any, bb binding.BindingBody) (err error)
```

## func (*Context) [ShouldBindHeader](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L725)

`ShouldBindHeader` is a shortcut for [`c.ShouldBindWith(obj, binding.Header)`](#func-context-shouldbindwith).

```go
func (c *Context) ShouldBindHeader(obj any) error
```

## func (*Context) [ShouldBindJSON](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L700)

`ShouldBindJSON` is a shortcut for [`c.ShouldBindWith(obj, binding.JSON)`](#func-context-shouldbindwith).

```go
func (c *Context) ShouldBindJSON(obj any) error
```

## func (*Context) [ShouldBindQuery](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L710)

`ShouldBindQuery` is a shortcut for [`c.ShouldBindWith(obj, binding.Query)`](#func-context-shouldbindwith).

```go
func (c *Context) ShouldBindQuery(obj any) error
```

## func (*Context) [ShouldBindTOML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L720)

`ShouldBindTOML` is a shortcut for [`c.ShouldBindWith(obj, binding.TOML)`](#func-context-shouldbindwith).

```go
func (c *Context) ShouldBindTOML(obj any) error
```

## func (*Context) [ShouldBindUri](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L730)

`ShouldBindUri` binds the passed struct pointer using the specified binding engine.

```go
func (c *Context) ShouldBindUri(obj any) error
```

## func (*Context) [ShouldBindWith](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L740)

`ShouldBindWith` binds the passed struct pointer using the specified binding engine. See the binding package.

```go
func (c *Context) ShouldBindWith(obj any, b binding.Binding) error
```

## func (*Context) [ShouldBindXML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L705)

`ShouldBindXML` is a shortcut for [`c.ShouldBindWith(obj, binding.XML)`](#func-context-shouldbindwith).

```go
func (c *Context) ShouldBindXML(obj any) error
```

## func (*Context) [ShouldBindYAML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L715)

`ShouldBindYAML` is a shortcut for [`c.ShouldBindWith(obj, binding.YAML)`](#func-context-shouldbindwith).

```go
func (c *Context) ShouldBindYAML(obj any) error
```

## func (*Context) [Status](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L854)

`Status` sets the HTTP response code.

```go
func (c *Context) Status(code int)
```

## func (*Context) [Stream](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1082)

`Stream` sends a streaming response and returns a boolean indicates "Is client disconnected in middle of stream"

```go
func (c *Context) Stream(step func(w io.Writer) bool) bool
```

## func (*Context) [String](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1008)

`String` writes the given string into the response body.

```go
func (c *Context) String(code int, format string, values ...any)
```

## func (*Context) [TOML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L998)

`TOML` serializes the given struct as TOML into the response body.

```go
func (c *Context) TOML(code int, obj any)
```

## func (*Context) [Value](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L1217)

`Value` returns the value associated with this context for key, or nil if no value is associated with key. Successive calls to Value with the same key returns the same result.

```go
func (c *Context) Value(key any) any
```

## func (*Context) [XML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L988)

`XML` serializes the given struct as XML into the response body. It also sets the Content-Type as "application/xml".

```go
func (c *Context) XML(code int, obj any)
```

## func (*Context) [YAML](https://github.com/gin-gonic/gin/blob/v1.9.1/context.go#L993)

`YAML` serializes the given struct as YAML into the response body.

```go
func (c *Context) YAML(code int, obj any)
```