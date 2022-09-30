let usrName = "username"
let websiteName = "blogname"
let nowPosition = '~'
let commandList = 'cd ls cat logout hey hi hello help clear exit test ~ / ./'.split(' ')
let hisCommand = []
let cour = 0
let isInHis = 0
let directory = []
let files = []

let host = 'http://127.0.0.1:8090'

let e_main = $('#main')
let e_input = $('.input-text')
let e_html = $('body,html')
let e_pos = $('#pos')

let mainFunc = (input, position) => {
  if (input === '') {
    e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + '<br/>')
    e_html.animate({ scrollTop: $(document).height() }, 0)
  } else {
    command = input.split(' ')[0]
    if (commandList.indexOf(command) === -1) {
      e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + input + '<br/>' + 'zsh: command not found: ' + command + '<br/>')
      e_html.animate({ scrollTop: $(document).height() }, 0)
    } else {
      switch (command) {
        case 'help':
          // e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + input + '<br/>' + '[sudo ]command[ Options...]<br/>You can use following commands:<br/><br/>cd<br/>ls<br/>cat<br/>clear<br/>help<br/>exit<br/><br/>Besides, there are some hidden commands, try to find them!<br/>')
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + input + '<br/>' + '测试版[sudo ]command[ Options...]<br/>You can use following commands:<br/><br/>cd<br/>ls<br/>cat<br/>clear<br/>help<br/><br/>Besides, there are some hidden commands, try to find them!<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'hi':
        case 'hey':
        case 'hello':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + input + '<br/>todo 设置<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'clear':
          e_main.html('')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'ls':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + input + '<br/>' + commands + '<br/>')
          break
        case 'ls -a':

          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + input + '<br/>' + commands + '<br/>')
          break
        case 'test':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">' + websiteName + '</span> ' + position + ']% ' + input + '<br/> 666 <br/>')
          window.location.href='http://baidu.com';
          // e_html.animate({ scrollTop: $(document).height() }, 0)
          // let webviewUrl = 'https://www.baidu.com';
          // let windowObjectReference = window.open();
          windowObjectReference.location.href = webviewUrl;
          break
      }
    }
  }
}

// 命令自动补全
// let pressTab = (input) => {
//   if (input !== '') {
//     command = input.split(' ')[0]
//     if (command === 'l') e_input.val('ls')
//     if (command === 'c') {
//       e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">ursb.me</span> ' + nowPosition + ']% ' + input + '<br/>cat&nbsp;&nbsp;cd&nbsp;&nbsp;claer<br/>')
//     }

//     if (command === 'ca') e_input.val('cat')
//     if (command === 'cl' || command === 'cle' || command === 'clea') e_input.val('clea')

//     // cd 命令自动补全：只适配目录
//     if (input.split(' ')[1] && command === 'cd') {
//       dir = input.split(' ')[1]
//       let prefix = ''
//       if (nowPosition === '~') {
//         // 用户在主目录
//         if (dir.startsWith('./')) {
//           prefix = './'
//           dir = dir.replace('./', '')
//         }
//         if (dir.startsWith('~/')) {
//           prefix = '~/'
//           dir = dir.replace('~/', '')
//         }

//         // 路径最短匹配
//         directory.every(i => {
//           if (i.startsWith(dir)) {
//             e_input.val('cd ' + prefix + i)
//             return false
//           }
//           return true
//         })
//       } else {
//         // 用户在二级目录或更深层目录
//         let pos = nowPosition.replace('~/', '') + '/'

//         if (dir.startsWith('~/')) {
//           prefix = '~/'
//           dir = dir.replace('~/', '')

//           // 路径最短匹配
//           directory.every(i => {
//             if (i.startsWith(dir)) {
//               e_input.val('cd ' + prefix + i)
//               return false
//             }
//             return true
//           })
//         } else {
//           if (dir.startsWith('./')) {
//             prefix = './'
//             dir = dir.replace('./', '')
//           }

//           // 路径最短匹配
//           directory.every(i => {
//             if (i.startsWith(pos + dir)) {
//               i = i.replace(pos, '')
//               e_input.val('cd ' + prefix + i)
//               return false
//             }
//             return true
//           })
//         }
//       }
//     }

//     // cat 命令自动补全：只适配文件
//     if (input.split(' ')[1] && command === 'cat') {
//       file = input.split(' ')[1]
//       let pos = nowPosition.replace('~', '').replace('/', '') // 去除主目录的 ~ 和其他目录的 ~/ 前缀
//       let prefix = ''

//       if (file.startsWith('./')) {
//         prefix = './'
//         file = file.replace('./', '')
//       }

//       if (nowPosition === '~') {
//         files.every(i => {
//           if (i.startsWith(pos + file)) {
//             e_input.val('cat ' + prefix + i)
//             return false
//           }
//           return true
//         })
//       } else {
//         pos = pos + '/'
//         files.every(i => {
//           if (i.startsWith(pos + file)) {
//             e_input.val('cat ' + prefix + i.replace(pos, ''))
//             return false
//           }
//           return true
//         })
//       }
//     }
//   }
// }

window.onresize = function () {
  e_input.width($(document).width() - $('.prefix').width() - 160)
};

let historyCmd = (k) => {
  $('body,html').animate({ scrollTop: $(document).height() }, 0)

  if (k !== 'up' || isInHis) {
    if (k === 'up' && isInHis) {
      if (cour >= 1) {
        cour--
        e_input.val(hisCommand[cour])
      }
    }
    if (k === 'down' && isInHis) {
      if (cour + 1 <= hisCommand.length - 1) {
        cour++
        $(".input-text").val(hisCommand[cour])
      } else if (cour + 1 === hisCommand.length) {
        $(".input-text").val(inputCache)
      }
    }
  } else {
    inputCache = e_input.val()
    e_input.val(hisCommand[hisCommand.length - 1])
    cour = hisCommand.length - 1
    isInHis = 1
  }
}

$(document).bind('keydown', function (b) {
  e_input.focus()
  if (b.keyCode === 13) {
    e_main.html($('#main').html())
    e_html.animate({ scrollTop: $(document).height() }, 0)
    // e_html.animate({ scrollTop: $(document).height() }, "slow")
    mainFunc(e_input.val(), nowPosition)
    hisCommand.push(e_input.val())
    isInHis = 0
    e_input.val('')
  }
  if (b.keyCode === 9) {
    pressTab(e_input.val())
    b.preventDefault()
    e_html.animate({ scrollTop: $(document).height() }, 0)
    e_input.focus()
  }

  if (b.keyCode === 38) historyCmd('up')
  if (b.keyCode === 40) historyCmd('down')

  // Ctrl + U 清空输入快捷键
  if (b.keyCode === 85 && b.ctrlKey === true) {
    e_input.val('')
    e_input.focus()
  }
})

// $(document).keypress(function(e) {
//   var eCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
//     if (eCode == 13){
//       alert('您按了回车键')
//       //自己写判断操作
//     } else if (eCode == 9) {
//       alert("Tab")
//     } else if (eCode == 38) {
//       alert("上")
//     } else if (eCode == 40) {
//       alert("下")
//     } else if (eCode == 81) {
//       alert("Q")
//     }
// });

// 页面加载完成后执行,初始化目录和文件
$(document).ready(() => {
  $.ajax({
    url: host + '/list',
    data: { dir: '/' },
    dataType: 'jsonp',
    success: (res) => {
      if (res.code === 0) {
        directory = res.data.directory
        directory.shift(); // 去掉第一个 ~
        files = res.data.files
        console.log(res.data)
      }
    }
  })
})