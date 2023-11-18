"use strict";(self.webpackChunkgincumentation=self.webpackChunkgincumentation||[]).push([[368],{7948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const l={sidebar_position:2},a="Templating Syntax",r={id:"views-and-templates/templating-syntax",title:"Templating Syntax",description:"Gin uses Go's built-in html/template package for rendering HTML templates, providing a powerful and flexible way to create dynamic web pages. Understanding the templating syntax is crucial for effectively using Gin to serve HTML.",source:"@site/docs/views-and-templates/templating-syntax.md",sourceDirName:"views-and-templates",slug:"/views-and-templates/templating-syntax",permalink:"/gincumentation/docs/views-and-templates/templating-syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/filipenevs/gincumentation/tree/main/docs/views-and-templates/templating-syntax.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apiSidebar",previous:{title:"Introduction",permalink:"/gincumentation/docs/views-and-templates/intro"},next:{title:"Partials",permalink:"/gincumentation/docs/views-and-templates/partials"}},o={},c=[{value:"Basic Templating Syntax",id:"basic-templating-syntax",level:2},{value:"Actions",id:"actions",level:3},{value:"Variables",id:"variables",level:3},{value:"Conditionals",id:"conditionals",level:2},{value:"If-Else Statements",id:"if-else-statements",level:3},{value:"Comparisons and Logical Operators",id:"comparisons-and-logical-operators",level:3},{value:"Loops",id:"loops",level:2},{value:"Range",id:"range",level:3},{value:"Variables in Range",id:"variables-in-range",level:3},{value:"Comments",id:"comments",level:2},{value:"Custom Delimiters",id:"custom-delimiters",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"templating-syntax",children:"Templating Syntax"}),"\n",(0,i.jsxs)(n.p,{children:["Gin uses Go's built-in ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/html/template",children:"html/template"})," package for rendering HTML templates, providing a powerful and flexible way to create dynamic web pages. Understanding the templating syntax is crucial for effectively using Gin to serve HTML."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-templating-syntax",children:"Basic Templating Syntax"}),"\n",(0,i.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Curly braces:"})," Actions are enclosed in ",(0,i.jsx)(n.code,{children:"{{"})," and ",(0,i.jsx)(n.code,{children:"}}"})," and are used to insert content, call functions, or control the flow. (If you wanted to change to custom delimiters, see ",(0,i.jsx)(n.a,{href:"#custom-delimiters",children:"this section"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Actions can include conditionals, range loops, and more."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To display a variable, use ",(0,i.jsx)(n.code,{children:"{{ .VariableName }}"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The dot (",(0,i.jsx)(n.code,{children:"."}),") refers to the current context, and ",(0,i.jsx)(n.code,{children:"VariableName"})," is a field in the data you pass to the template."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conditionals",children:"Conditionals"}),"\n",(0,i.jsx)(n.h3,{id:"if-else-statements",children:"If-Else Statements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"{{if .Condition}} ... {{else}} ... {{end}}"})," to create conditional logic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Condition"})," is a boolean expression."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"{{if .LoggedIn}}\n  <p>Welcome back, {{.Username}}!</p>\n{{else}}\n  <p>Please log in.</p>\n{{end}}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"comparisons-and-logical-operators",children:"Comparisons and Logical Operators"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The templating syntax supports basic comparisons (",(0,i.jsx)(n.code,{children:"eq"}),", ",(0,i.jsx)(n.code,{children:"lt"}),", ",(0,i.jsx)(n.code,{children:"le"}),", ",(0,i.jsx)(n.code,{children:"gt"}),", and",(0,i.jsx)(n.code,{children:" g"}),"e for equality, less than, less than or equal to, greater than, and greater than or equal to comparisons, respectively) and logical operators (",(0,i.jsx)(n.code,{children:"and"}),", ",(0,i.jsx)(n.code,{children:"or"}),", ",(0,i.jsx)(n.code,{children:"not"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="templates/user-status.tmpl"',children:"{{if and (gt .Age 18) .IsSubscriber}}\n    <p>Welcome to our premium content section!</p>\n{{else if gt .Age 18}}\n    <p>Welcome! Have you considered subscribing for more content?</p>\n{{else}}\n    <p>Check out our youth section for cool content!</p>\n{{end}}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="templates/main.go"',children:'func main() {\n  router := gin.Default()\n  router.LoadHTMLGlob("templates/*")\n\n  router.GET("/user-status", func(c *gin.Context) {\n      // highlight-start\n      // Example user data\n      userData := struct {\n          Age          int\n          IsSubscriber bool\n      }{\n          Age:          17,\n          IsSubscriber: false,\n      }\n\n      c.HTML(http.StatusOK, "user-status.tmpl", userData)\n      // highlight-end\n  })\n\n  router.Run()\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,i.jsx)(n.h3,{id:"range",children:"Range"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"{{range .Collection}} ... {{end}}"})," to iterate over slices, arrays, maps, or channels."]}),"\n",(0,i.jsxs)(n.li,{children:["Within the range block, ",(0,i.jsx)(n.code,{children:"."})," refers to the current element."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<ul>\n  // highlight-start\n  {{range .Items}}\n    <li>{{ . }}</li>\n  {{end}}\n  // highlight-end\n</ul>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"variables-in-range",children:"Variables in Range"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can declare a variable to hold the index or key in the range loop."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"{{range $index, $element := .Items}}\n  <p>{{$index}}: {{$element.Name}}</p>\n{{end}}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"comments",children:"Comments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use",(0,i.jsx)(n.code,{children:" {{/* comment */}}"})," for comments within templates. These comments won't appear in the rendered output."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"// highlight-start\n{{/* This is a comment */}}\n// highlight-end\n{{range $index, $element := .Items}}\n  <p>{{$index}}: {{$element.Name}}</p>\n{{end}}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"custom-delimiters",children:"Custom Delimiters"}),"\n",(0,i.jsxs)(n.p,{children:["You may want to use custom delimiters. You can change the delimiters using the ",(0,i.jsx)(n.code,{children:"r.Delims()"})," function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n  r := gin.Default()\n  // highlight-start\n  r.Delims("{[{", "}]}")\n  // highlight-end\n  r.LoadHTMLGlob("templates/*")\n\n  r.GET("/index", func(c *gin.Context) {\n    c.HTML(http.StatusOK, "home.tmpl", gin.H{\n      "title": "Home",\n      "heading": "Home Page",\n    })\n  })\n  r.Run()\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="templates/home.tmpl"',children:"<html>\n  <head>\n    // highlight-start\n    <title>{[{ .title }]}</title>\n    // highlight-end\n  </head>\n  <body>\n    // highlight-start\n    <h1>{[{ .heading }]}</h1>\n    // highlight-end\n  </body>\n</html>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);