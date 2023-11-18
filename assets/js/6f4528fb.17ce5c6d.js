"use strict";(self.webpackChunkgincumentation=self.webpackChunkgincumentation||[]).push([[703],{8184:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(5893),s=i(1151);const r={sidebar_position:4},o="Static",a={id:"http/static",title:"Static",description:"Serving static files (like HTML, CSS, JavaScript, images, etc.) is a common requirement for web applications. Gin, a popular web framework for Go, provides straightforward ways to serve static files.",source:"@site/docs/http/static.md",sourceDirName:"http",slug:"/http/static",permalink:"/gincumentation/docs/http/static",draft:!1,unlisted:!1,editUrl:"https://github.com/filipenevs/gincumentation/tree/main/docs/http/static.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apiSidebar",previous:{title:"Middleware",permalink:"/gincumentation/docs/http/middleware"},next:{title:"Views & Templates",permalink:"/gincumentation/docs/category/views--templates-1"}},c={},l=[{value:"Serving Static Files in Gin",id:"serving-static-files-in-gin",level:2},{value:"Using Static Function",id:"using-static-function",level:3},{value:"Using StaticFile Function",id:"using-staticfile-function",level:3},{value:"Using StaticFS Function",id:"using-staticfs-function",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"static",children:"Static"}),"\n",(0,n.jsx)(t.p,{children:"Serving static files (like HTML, CSS, JavaScript, images, etc.) is a common requirement for web applications. Gin, a popular web framework for Go, provides straightforward ways to serve static files."}),"\n",(0,n.jsx)(t.h2,{id:"serving-static-files-in-gin",children:"Serving Static Files in Gin"}),"\n",(0,n.jsx)(t.h3,{id:"using-static-function",children:"Using Static Function"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Static"})," function in Gin is used to serve files from a directory on the filesystem. This function maps a request path in your application to a directory on your disk."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'// r.Static(relativePath, root)\n// relativePath: The path in your URL where the static files will be served from.\n// root: The directory on your disk where the static files are located.\n\nr := gin.Default()\nr.Static("/assets", "./assets") // In this example, any request to your server at /assets will serve files from the ./assets directory on your disk.\n'})}),"\n",(0,n.jsx)(t.h3,{id:"using-staticfile-function",children:"Using StaticFile Function"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to serve a single static file, use the ",(0,n.jsx)(t.code,{children:"StaticFile"})," function. This is useful for serving files like favicon.ico or a specific downloadable file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'// r.StaticFile(relativePath, filepath)\n// relativePath: The path in your URL where the file will be served from.\n// filepath: The path to the static file on your disk.\n\nr := gin.Default()\nr.StaticFile("/favicon.ico", "./resources/favicon.ico")\n'})}),"\n",(0,n.jsx)(t.h3,{id:"using-staticfs-function",children:"Using StaticFS Function"}),"\n",(0,n.jsxs)(t.p,{children:["For more control over serving static files, you can use the ",(0,n.jsx)(t.code,{children:"StaticFS"})," function. This function is useful when you want to use an in-memory filesystem or a custom ",(0,n.jsx)(t.code,{children:"http.FileSystem"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'// r.StaticFS(relativePath, fs http.FileSystem)\n// relativePath: The path in your URL where the static files will be served from.\n// fs: A custom file system implementation that satisfies http.FileSystem.\n\nr := gin.Default()\nr.StaticFS("/more-assets", http.Dir("/path/to/more-assets"))\n'})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.admonition,{title:"Best Practices",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Security Considerations:"})," Be cautious about which directories you expose as static resources. Avoid serving sensitive files or directories."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Caching:"})," For production environments, consider implementing caching mechanisms or using a Content Delivery Network (CDN) for static assets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"URL Paths:"})," Choose clear and logical URL paths for your static assets to make it easy for clients to access them."]}),"\n"]})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(7294);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);