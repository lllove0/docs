import{_ as e,r as c,o,c as p,b as l,w as r,a,d as n,e as s}from"./app.7408f20e.js";const y='{"title":"Tag \u6807\u7B7E","description":"","frontmatter":{},"headers":[{"level":2,"title":"Tag \u8BF4\u660E","slug":"tag-\u8BF4\u660E"},{"level":2,"title":"Tag innerHTML \u793A\u4F8B","slug":"tag-innerhtml-\u793A\u4F8B"},{"level":2,"title":"Tag Props","slug":"tag-props"},{"level":2,"title":"Tag Events","slug":"tag-events"}],"relativePath":"ui/tag.md","lastUpdated":1636215949363}',u={},i=a('',4),k=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Tag")]),s(`
      `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(item, index) in the.tag.css"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":named"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":css"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"closable"),s(`
      `),n("span",{class:"token attr-name"},"@onEvent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onTagEvent"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("Tag")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// import { reactive } from 'vue';"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("props"),n("span",{class:"token punctuation"},","),s(" context")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u4F7F\u7528\u5916\u6302\u65B9\u5F0F\u5F15\u5165\uFF0C\u5177\u4F53\u67E5\u770Bdemo"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $plus "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("$plus"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" reactive "),n("span",{class:"token operator"},"="),s(" $plus"),n("span",{class:"token punctuation"},"."),s("vue"),n("span",{class:"token punctuation"},"."),s("reactive"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" the "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      tag`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        css`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"/** \u6807\u7B7E\u4E8B\u4EF6 */"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onTagEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("cmd"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'close'"),n("span",{class:"token operator"},":"),s(`
          `),n("span",{class:"token comment"},"// \u5173\u95ED"),s(`
          the`),n("span",{class:"token punctuation"},"."),s("tag"),n("span",{class:"token punctuation"},"."),s("css"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("named"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'click'"),n("span",{class:"token operator"},":"),s(`
          $plus`),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("event"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"':'"),s(),n("span",{class:"token operator"},"+"),s(" resp"),n("span",{class:"token punctuation"},"."),s("named"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token comment"},"// console.log('onTagEvent:', resp.named, resp.event.target.innerHTML);"),s(`
          `),n("span",{class:"token comment"},"// $plus.router.push('/Api/ClassTree/' + resp.named + '?title=' + resp.event.target.innerHTML)"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onTagEvent:'"),n("span",{class:"token punctuation"},","),s(" resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" the"),n("span",{class:"token punctuation"},","),s(" onTagEvent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br")])],-1),d=a('',10);function b(m,h,g,v,_,f){const t=c("CodeRun");return o(),p("div",null,[i,l(t,{auto:"",editable:""},{default:r(()=>[k]),_:1}),d])}var w=e(u,[["render",b]]);export{y as __pageData,w as default};