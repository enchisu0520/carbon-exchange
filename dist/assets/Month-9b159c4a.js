import{d as r}from"./index-9899d521.js";import{r as m,a as p}from"./ChevronRightIcon-1553acac.js";import{r as d,g as u,o as f,c as _,b as a,f as n,u as c,t as g}from"./index-b591a417.js";const h={class:"bg-gray-600 p-3 grid place-items-center"},x={class:"flex items-center space-x-3 select-none text-gray-50"},y={class:"w-20 text-center"},B={__name:"Month",emits:["selected"],setup(M,{emit:i}){const t=d(r().month()),l=u(()=>r().month(t.value).format("MMMM"));function s(o){t.value+=o,i("selected",t.value)}return(o,e)=>(f(),_("div",h,[a("span",x,[n(c(m),{class:"h-5 w-5 text-gray-400 cursor-pointer",onClick:e[0]||(e[0]=()=>s(-1))}),a("span",y,g(l.value),1),n(c(p),{class:"h-5 w-5 text-gray-400 cursor-pointer",onClick:e[1]||(e[1]=()=>s(1))})])]))}};export{B as default};
