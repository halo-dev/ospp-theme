

<#include "common/layout.ftl">
<!DOCTYPE html>
<html lang="zh-CN">
<#include "common/head.ftl">
<body>

<h1>所有文章</h1>

<br/>

<#list posts.content as post>
    <a href="${post.fullPath!}">${post.title!}</a><br/>
</#list>



<#include "common/footer.ftl">
</body>
</html>


