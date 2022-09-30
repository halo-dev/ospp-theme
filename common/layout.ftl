
<#macro initTerm>
    <div id="main">
        ${settings.initStr_setting!}
    </div>
</#macro>

<#macro inputTerm>
    <div class="input-layout">
        <span class="prefix">
        <span class="font-other">[</span><span id='usr'>${user.nickname!}</span><span class="font-other">@</span><span class="host">${blog_title!}</span> <span id="pos"></span>
        <span class="font-other">~]% </span>
        </span>
        <input type="text" class="input-text">
    </div>
</#macro>




