


<#--  <@postTag method="latest" top="3">
    <#list posts as post>
        <a href="${post.fullPath!}">${post.title!}</a>
        <span>${post.fullPath!}</span>
    </#list>
</@postTag>  -->




<@menuTag method="list">
    <ul>
    <#list menus as menu>
        <li>
            <a href="${menu.url!}" target="${menu.target!}">${menu.name!}</a>
        </li>
    </#list>
    </ul>
</@menuTag>