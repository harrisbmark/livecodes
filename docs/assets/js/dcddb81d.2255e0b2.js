"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4155"],{29223:function(e,i,n){n.r(i),n.d(i,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>o,zigConfig:()=>c,toc:()=>h,contentTitle:()=>d});var t=JSON.parse('{"id":"languages/zig-wasm","title":"Zig (Wasm)","description":"Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.","source":"@site/docs/languages/zig-wasm.mdx","sourceDirName":"languages","slug":"/languages/zig-wasm","permalink":"/docs/languages/zig-wasm","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/zig-wasm.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Windi CSS","permalink":"/docs/languages/windicss"},"next":{"title":"Guides & Tutorials","permalink":"/docs/tutorials/"}}'),s=n("85893"),r=n("50065"),a=n("11802");let l={},d="Zig (Wasm)",o={},c={activeEditor:"script",script:{language:"zig-wasm",content:`const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();

    const sorted_array = [_]i32{ 1, 3, 5, 7, 9, 11, 13, 15 };
    const item_to_search: i32 = 7;

    const result = binarySearch(i32, &sorted_array, item_to_search);

    if (result == -1) {
        try stdout.print("Result: Item not found in the array.\\n", .{});
    } else {
        try stdout.print("Result: Item found at index -> {}\\n", .{result});
    }
}

fn binarySearch(comptime T: type, arr: []const T, item: T) i32 {
    var left: usize = 0;
    var right: usize = arr.len;

    while (left < right) {
        const mid = left + (right - left) / 2;

        if (arr[mid] == item) {
            return @intCast(mid);
        }

        if (arr[mid] > item) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}`},mode:"simple",editor:"auto",tools:{status:"full"}},h=[{value:"Usage",id:"usage",level:2},{value:"Communication with JavaScript",id:"communication-with-javascript",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Aliases / Extensions",id:"aliases--extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Live Reload",id:"live-reload",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}];function u(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"zig-wasm",children:"Zig (Wasm)"})}),"\n",(0,s.jsx)(i.p,{children:"Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software."}),"\n",(0,s.jsx)(i.p,{children:"In LiveCodes, Zig runs in the browser using WebAssembly with a WASI-compatible runtime environment."}),"\n",(0,s.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i.p,{children:"Demo:"}),"\n","\n",(0,s.jsx)(a.Z,{config:c}),"\n",(0,s.jsx)(i.h3,{id:"communication-with-javascript",children:"Communication with JavaScript"}),"\n",(0,s.jsxs)(i.p,{children:["The Zig code runs in the context of the result page. A few helper properties and methods are available in the browser global ",(0,s.jsx)(i.code,{children:"livecodes.zig"})," object:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"livecodes.zig.input"}),": The initial standard input passed to the Zig code."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"livecodes.zig.loaded"}),": A promise that resolves when the Zig environment (WebAssembly runtime) is fully loaded (and rejects if it fails to load). Other helpers should be used after this promise resolves."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"livecodes.zig.output"}),": The standard output from the Zig code execution."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"livecodes.zig.run"}),": A function that runs the Zig code with new input. This function takes a string as input and returns a promise that resolves with an object containing the ",(0,s.jsx)(i.code,{children:"output"}),", ",(0,s.jsx)(i.code,{children:"error"}),", and ",(0,s.jsx)(i.code,{children:"exitCode"})," properties."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Example:"}),"\n",(0,s.jsx)(a.Z,{template:"zig-wasm",params:{activeEditor:"markup"},height:"80vh"}),"\n",(0,s.jsx)(i.h2,{id:"language-info",children:"Language Info"}),"\n",(0,s.jsx)(i.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"zig-wasm"})}),"\n",(0,s.jsx)(i.h3,{id:"aliases--extensions",children:"Aliases / Extensions"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"zig"}),", ",(0,s.jsx)(i.code,{children:"zig-wasm"})]}),"\n",(0,s.jsx)(i.h3,{id:"editor",children:"Editor"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"script"})}),"\n",(0,s.jsx)(i.h2,{id:"compiler",children:"Compiler"}),"\n",(0,s.jsx)(i.p,{children:"Zig compiler in WebAssembly."}),"\n",(0,s.jsx)(i.h3,{id:"version",children:"Version"}),"\n",(0,s.jsx)(i.p,{children:"Zig 0.14.0"}),"\n",(0,s.jsx)(i.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,s.jsxs)(i.p,{children:["Using ",(0,s.jsx)(i.a,{href:"https://github.com/wasm-fmt/zig_fmt",children:"@wasm-fmt/zig_fmt"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"live-reload",children:"Live Reload"}),"\n",(0,s.jsxs)(i.p,{children:["By default, new code changes are sent to the result page for re-evaluation without a full page reload, avoiding the need to reinitialize the Zig WebAssembly environment. This behavior can be disabled by adding the code comment ",(0,s.jsx)(i.code,{children:"// __livecodes_reload__"})," to the Zig code, which forces a full page reload."]}),"\n",(0,s.jsxs)(i.p,{children:["This comment can be added in the ",(0,s.jsx)(i.code,{children:"hiddenContent"})," property of the editor for embedded playgrounds."]}),"\n",(0,s.jsx)(i.h2,{id:"starter-template",children:"Starter Template"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://livecodes.io/?template=zig-wasm",children:"https://livecodes.io/?template=zig-wasm"})}),"\n",(0,s.jsx)(i.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://ziglang.org/",children:"Zig"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://ziglang.org/documentation/master/index.html",children:"Zig documentation"})}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);