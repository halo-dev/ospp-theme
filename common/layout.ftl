
<#macro initTerm>
    <div id="main">
        Last login:
        <#--  todo  ${time} -->
        <br/>
        [You] Random theme '/Halo/themes/Spells-Quarter-Theme' loaded...
        <#--  todo 这个也可以自定义  -->
        <br/>
        <br/>
        Hi, I'm ${user.nickname!}. Here is my Blog. Welcome to ${blog_title!}!<br/>
        Try to find more information about me!
        <br/>
        'help' to display information about builtin commands.
        <br/>Have fun ^_^<br/>
        <br/>
    </div>
</#macro>

<#macro inputTerm>
    <span class="prefix">[<span id='usr'>${blog_url!}</span>@<span class="host">${blog_title!}</span> <span id="pos">~</span>]% </span>
    <input type="text" class="input-text">
</#macro>




