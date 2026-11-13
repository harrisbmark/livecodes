"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["6834"],{70906:function(e,s,i){i.r(s),i.d(s,{default:()=>p,frontMatter:()=>l,csharpConfig:()=>c,assets:()=>o,metadata:()=>n,toc:()=>h,contentTitle:()=>d});var n=JSON.parse('{"id":"languages/csharp-wasm","title":"C# (Wasm)","description":"(Wasm)","source":"@site/docs/languages/csharp-wasm.mdx","sourceDirName":"languages","slug":"/languages/csharp-wasm","permalink":"/docs/languages/csharp-wasm","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/csharp-wasm.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Crystal (Wasm)","permalink":"/docs/languages/crystal-wasm"},"next":{"title":"CSS","permalink":"/docs/languages/css"}}'),a=i("85893"),r=i("50065"),t=i("11802");let l={},d="C# (Wasm)",o={},c={activeEditor:"script",script:{language:"csharp-wasm",content:`using System;

public class Program
{
    public static void Main()
    {
        int[] sortedArray = { 1, 3, 5, 7, 9, 11, 13, 15 };
        int itemToSearch = 7;

        int result = BinarySearch(sortedArray, 0, sortedArray.Length - 1, itemToSearch);

        if (result == -1)
        {
            Console.WriteLine("Result: Item not found in the array.");
        }
        else
        {
            Console.WriteLine($"Result: Item found at index -> {result}");
        }
    }

    public static int BinarySearch(int[] arr, int left, int right, int item)
    {
        if (right >= left)
        {
            int mid = left + (right - left) / 2;
            if (arr[mid] == item)
            {
                return mid;
            }

            if (arr[mid] > item)
            {
                return BinarySearch(arr, left, mid - 1, item);
            }

            return BinarySearch(arr, mid + 1, right, item);
        }
        return -1;
    }
}`},mode:"simple",editor:"auto",tools:{status:"full"}},h=[{value:"Usage",id:"usage",level:2},{value:"Communication with JavaScript",id:"communication-with-javascript",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Aliases / Extensions",id:"aliases--extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Live Reload",id:"live-reload",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}];function m(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"c-wasm",children:"C# (Wasm)"})}),"\n",(0,a.jsx)(s.p,{children:"C# is a high-level, general-purpose, object-oriented programming language developed by Microsoft."}),"\n",(0,a.jsx)(s.p,{children:"In LiveCodes, C# runs in the browser using Blazor WebAssembly with a WebAssembly-based .NET runtime."}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.p,{children:"Demo:"}),"\n","\n",(0,a.jsx)(t.Z,{config:c}),"\n",(0,a.jsx)(s.h3,{id:"communication-with-javascript",children:"Communication with JavaScript"}),"\n",(0,a.jsxs)(s.p,{children:["The C# code runs in the context of the result page. A few helper properties and methods are available in the browser global ",(0,a.jsx)(s.code,{children:"livecodes.csharp"})," object:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"livecodes.csharp.input"}),": The initial standard input passed to the C# code."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"livecodes.csharp.loaded"}),": A promise that resolves when the C# environment (Blazor WebAssembly) is fully loaded. Other helpers should be used after this promise resolves."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"livecodes.csharp.output"}),": The standard output from the C# code execution."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"livecodes.csharp.run"}),": A function that runs the C# code with new input. This function takes a string as input and returns a promise that resolves with an object containing the ",(0,a.jsx)(s.code,{children:"output"}),", ",(0,a.jsx)(s.code,{children:"error"}),", and ",(0,a.jsx)(s.code,{children:"exitCode"})," properties."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Example:"}),"\n",(0,a.jsx)(t.Z,{template:"csharp-wasm",params:{activeEditor:"markup"},height:"80vh"}),"\n",(0,a.jsx)(s.h2,{id:"language-info",children:"Language Info"}),"\n",(0,a.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"csharp-wasm"})}),"\n",(0,a.jsx)(s.h3,{id:"aliases--extensions",children:"Aliases / Extensions"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"cs"}),", ",(0,a.jsx)(s.code,{children:"csharp"}),", ",(0,a.jsx)(s.code,{children:"wasm.cs"}),", ",(0,a.jsx)(s.code,{children:"cs-wasm"})]}),"\n",(0,a.jsx)(s.h3,{id:"editor",children:"Editor"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"script"})}),"\n",(0,a.jsx)(s.h2,{id:"compiler",children:"Compiler"}),"\n",(0,a.jsxs)(s.p,{children:["The .NET WebAssembly runtime with Roslyn, loaded at run time from the ",(0,a.jsx)(s.a,{href:"https://www.npmjs.com/package/@live-codes/blazor-wasm",children:(0,a.jsx)(s.code,{children:"@live-codes/blazor-wasm"})})," package \u2014 the same bundle that backs the ",(0,a.jsx)(s.a,{href:"/docs/languages/blazor-wasm",children:"Blazor (Wasm)"})," language. Console programs are compiled and run through the bundle's ",(0,a.jsx)(s.code,{children:"RunCode"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,a.jsx)(s.p,{children:".NET 10"}),"\n",(0,a.jsx)(s.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,a.jsxs)(s.p,{children:["Using ",(0,a.jsx)(s.a,{href:"https://github.com/wasm-fmt/clang-format",children:"@wasm-fmt/clang-format"}),", applying ",(0,a.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-code-style-settings-reference",children:"Microsoft's style guide"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"live-reload",children:"Live Reload"}),"\n",(0,a.jsxs)(s.p,{children:["By default, new code changes are sent to the result page for re-evaluation without a full page reload, avoiding the need to reinitialize the Blazor environment. This behavior can be disabled by adding the code comment ",(0,a.jsx)(s.code,{children:"// __livecodes_reload__"})," to the C# code, which forces a full page reload."]}),"\n",(0,a.jsxs)(s.p,{children:["This comment can be added in the ",(0,a.jsx)(s.code,{children:"hiddenContent"})," property of the editor for embedded playgrounds."]}),"\n",(0,a.jsx)(s.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-csharp",children:'using System;\n\npublic class Program\n{\n    public static void Main()\n    {\n        Console.WriteLine("Hello, LiveCodes C#!");\n    }\n}\n'})}),"\n",(0,a.jsx)(s.h2,{id:"starter-template",children:"Starter Template"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://livecodes.io/?template=csharp-wasm",children:"https://livecodes.io/?template=csharp-wasm"})}),"\n",(0,a.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/",children:"C#"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",children:"Blazor WebAssembly"})}),"\n"]})]})}function p(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);