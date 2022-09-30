<#--  <#include "./common/card.ftl">
<!DOCTYPE html>
<html lang="zh-CN">
<#include "./common/head.ftl">

<@terminal/>

<#include "common/footer.ftl">

</html>  -->

<#--  <!DOCTYPE html>
<html lang="zh-CN">




<#include "common/footer.ftl">

</html>  -->

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="${theme_base!}/assert/css/main.css" rel="stylesheet"/>
    <@global.head />
    <title>Airing's Server</title>
</head>
<body>
<div id="main">
    Last login: 
    <#--  todo ${time} -->
    <br/>
    [You] Random theme '/Halo/themes/Spells-Quarter-Theme' loaded...
    <br/>
    <br/>
    Hi, I'm ${user.nickname!}. Here is my Blog. Welcome to use it!<br/>
    Try to find more information about me!
    <br/>
    'help' to get help. 'exit' to open my website.<br/>Have fun :-)<br/>
    <br/>
</div>
<span class="prefix">[<span id='usr'>usr</span>@<span class="host">${blog_title!}</span> <span id="pos">~</span>]% </span>
<input type="text" class="input-text">

<#include "common/footer.ftl">
<script src="${theme_base!}/assert/js/jquery-3.3.1.min.js"></script>
<script src="${theme_base!}/assert/js/main.js"></script>
</body>
</html>