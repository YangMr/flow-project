import{r as e,D as a,o as s,c as t,w as l,g as o,d as r,e as u,n as d,E as i,t as n,G as c,u as m,i as v,J as p,K as _,z as f}from"./index-3a6de0df.js";import{_ as g,a as b}from"./uni-list.2ecd7b55.js";import{o as h,r as w}from"./uni-fetch.7884c55d.js";import{d as x}from"./task.e13406f2.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const k=y({__name:"index",setup(y){const k=e(""),j=e(""),D=e(""),T=a((()=>{const e=new Date(j.value).getTime();console.log("start",e);const a=new Date(D.value).getTime();return a-e>0&&a-e<72e5})),V=e(""),A=a((()=>V.value.length)),C=a((()=>A.value<=50&&A.value>0));h((e=>{k.value=e.id,j.value=e.planDepartureTime}));const $=a((()=>C.value&&T.value)),z=e=>{const[a]=j.value.split(" ");D.value=`${a} ${e.detail.value}`},E=async()=>{try{const e={id:k.value,delayTime:D.value,delayReason:V.value};await x(e);c({url:"/pages/task/index"})}catch(e){console.log(e)}};return(e,a)=>{const c=w(m("uni-list-item"),g),h=v,x=p,y=_,k=o,C=f,G=w(m("uni-list"),b);return s(),t(k,{class:"page-container"},{default:l((()=>[r(G,{border:!1},{default:l((()=>[r(c,{border:!1,title:"原定时间",showArrow:"","right-text":j.value},null,8,["right-text"]),r(c,{border:!1,title:"延迟时间",showArrow:""},{footer:l((()=>[r(x,{mode:"time",onChange:z,class:"time-picker"},{default:l((()=>[D.value?(s(),t(h,{key:1,class:d({error:!i(T)})},{default:l((()=>[u(n(D.value)+":00",1)])),_:1},8,["class"])):(s(),t(h,{key:0},{default:l((()=>[u("不可超过2个小时")])),_:1}))])),_:1})])),_:1}),r(c,{border:!1,direction:"column"},{body:l((()=>[r(k,{class:"textarea-wrapper"},{default:l((()=>[r(y,{class:"textarea",modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),placeholder:"请输入延迟提货原因"},null,8,["modelValue"]),r(h,{class:d([{error:i(A)>50},"words-count"])},{default:l((()=>[u(n(i(A))+"/50",1)])),_:1},8,["class"])])),_:1})])),_:1}),r(c,{border:!1},{body:l((()=>[r(C,{onClick:E,disabled:!i($),class:"button"},{default:l((()=>[u("提交")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-d4a874b0"]]);export{k as default};