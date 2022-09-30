

<#include "common/layout.ftl">
<!DOCTYPE html>
<html lang="zh-CN">
<#include "common/head.ftl">
<body>

<h1>分类 ${category.name!} </h1>

<br/>


<span class="string-block">文章名</span>
<span class="string-block">创建事件</span>
<span class="string-block">修改时间</span>
<br/><br/>

<@postTag method="listByCategorySlug" categorySlug="${category.slug!}">
    <#list posts as post>
        <span class="string-block"><a href="${post.fullPath!}">${post.title!}</a></span>
        <span class="string-block">${post.createTime!}</span>
        <span class="string-block">${post.editTime!}</span>
        <br/>
        <br/>
    </#list>
</@postTag>



<#include "common/footer.ftl">
</body>
</html>


