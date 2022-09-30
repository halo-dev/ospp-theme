

<#include "common/layout.ftl">
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="${theme_base!}/assert/css/main.css" rel="stylesheet"/>
    <#--  <link href="${theme_base!}/assert/css/markdown11.css" rel="stylesheet"/>  -->
    <title>${blog_title!}</title>
</head>
<body>


<span>${post.title!}</span>

    <#--  正文  -->
    <div class="post-content">
        ${post.formatContent!}
    </div>


<#include "common/footer.ftl">
</body>
</html>


