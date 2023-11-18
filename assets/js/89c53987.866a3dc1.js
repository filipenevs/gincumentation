"use strict";(self.webpackChunkgincumentation=self.webpackChunkgincumentation||[]).push([[157],{3350:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=n(5893),i=n(1151);const s={sidebar_position:3},l="Partials",r={id:"views-and-templates/partials",title:"Partials",description:"Partials in Gin, as in many web frameworks, are reusable template segments that can be included in multiple templates. They help keep your templates DRY (Don't Repeat Yourself) by allowing you to write common template code once and reuse it across different pages.",source:"@site/docs/views-and-templates/partials.md",sourceDirName:"views-and-templates",slug:"/views-and-templates/partials",permalink:"/gincumentation/docs/views-and-templates/partials",draft:!1,unlisted:!1,editUrl:"https://github.com/filipenevs/gincumentation/tree/main/docs/views-and-templates/partials.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"Templating Syntax",permalink:"/gincumentation/docs/views-and-templates/templating-syntax"},next:{title:"Layouts",permalink:"/gincumentation/docs/views-and-templates/layouts"}},d={},o=[{value:"Understanding Partials",id:"understanding-partials",level:2},{value:"What are Partials?",id:"what-are-partials",level:3},{value:"Benefits of Using Partials",id:"benefits-of-using-partials",level:3},{value:"Creating Partials",id:"creating-partials",level:2},{value:"Defining a Partial",id:"defining-a-partial",level:3},{value:"Using Partials in Templates",id:"using-partials-in-templates",level:3},{value:"Passing Data to Partials",id:"passing-data-to-partials",level:3},{value:"Loading and Rendering in Gin",id:"loading-and-rendering-in-gin",level:2},{value:"Loading Templates:",id:"loading-templates",level:3},{value:"Rendering a Template with Partials:",id:"rendering-a-template-with-partials",level:3}];function c(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"partials",children:"Partials"}),"\n",(0,t.jsx)(a.p,{children:"Partials in Gin, as in many web frameworks, are reusable template segments that can be included in multiple templates. They help keep your templates DRY (Don't Repeat Yourself) by allowing you to write common template code once and reuse it across different pages."}),"\n",(0,t.jsx)(a.h2,{id:"understanding-partials",children:"Understanding Partials"}),"\n",(0,t.jsx)(a.h3,{id:"what-are-partials",children:"What are Partials?"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Partials are small, reusable components of a template. They are often used for common website elements like headers, footers, navigation bars, etc."}),"\n",(0,t.jsx)(a.li,{children:"They help in maintaining consistency across different web pages and reduce redundancy in template code."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"benefits-of-using-partials",children:"Benefits of Using Partials"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Maintainability:"})," Changes in a partial are reflected everywhere it's used, making it easier to maintain and update your templates."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Readability:"})," Breaking down templates into smaller components (partials) enhances readability and organization."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"creating-partials",children:"Creating Partials"}),"\n",(0,t.jsx)(a.h3,{id:"defining-a-partial",children:"Defining a Partial"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"A partial is just a regular template file that contains a segment of HTML code."}),"\n",(0,t.jsx)(a.li,{children:"Create a partial as you would create any other template, but typically it represents a smaller, self-contained segment of the page."}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",metastring:'title="template/partials/header.tmpl"',children:"<header>\n  <nav>\n    \x3c!-- Navigation items --\x3e\n  </nav>\n</header>\n"})}),"\n",(0,t.jsx)(a.h3,{id:"using-partials-in-templates",children:"Using Partials in Templates"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Use the ",(0,t.jsx)(a.code,{children:"{{ template }}"})," action to include a partial in another template."]}),"\n",(0,t.jsxs)(a.li,{children:["When rendering the main template, Gin will replace the ",(0,t.jsx)(a.code,{children:"{{ template }}"})," action with the content of the partial."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",metastring:'title="template/main.tmpl"',children:'<html>\n<body>\n    {{ template "header.tmpl" . }}\n    \x3c!-- Main content --\x3e\n</body>\n</html>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"passing-data-to-partials",children:"Passing Data to Partials"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Partials have access to the same data as the main template. When you include a partial, you can pass the current context (",(0,t.jsx)(a.code,{children:"."}),", representing the data passed to the template) to it."]}),"\n",(0,t.jsx)(a.li,{children:"If needed, you can also pass specific data to a partial."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"loading-and-rendering-in-gin",children:"Loading and Rendering in Gin"}),"\n",(0,t.jsx)(a.h3,{id:"loading-templates",children:"Loading Templates:"}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:'router.LoadHTMLGlob("templates/**/*")'})," in Gin to load all templates, including partials, if they are within the templates directory."]}),"\n",(0,t.jsx)(a.h3,{id:"rendering-a-template-with-partials",children:"Rendering a Template with Partials:"}),"\n",(0,t.jsxs)(a.p,{children:["When you render a template using ",(0,t.jsx)(a.code,{children:"c.HTML()"}),", Gin will process the main template and all included partials."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(a.admonition,{title:"Best Practices",type:"tip",children:(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Use Meaningful Names:"})," Name your partials in a way that clearly indicates their purpose or content."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Keep Partials Small and Focused:"})," Each partial should represent a specific piece of the UI and should be kept as small and focused as possible."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Regularly Refactor:"})," As your application grows, keep refactoring and breaking down templates into smaller partials where appropriate."]}),"\n"]})})]})}function p(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>l});var t=n(7294);const i={},s=t.createContext(i);function l(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);