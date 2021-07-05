getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    //readyState=0
    request.open('GET', 'style.css')
    //readyState=1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载style.css成功')
            //下载完成，但是不知道是成功(200+ ~ 300),还是失败(404)
            if (request.status >= 200 && request.status < 300) {
                // 创建<style>，写入request.response，然后整体放入<head>
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
            else {
                console.log('加载失败')
            }
        }
    }
    request.send()//readyState=2
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '2.js')
    request.onload = () => {
        console.log('加载2.js成功')
        // 创建<script>，写入request.response，然后整体放入<body>
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('错误了')
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    request.onload = () => {
        console.log('加载3.html成功')
        // 创建<div>，写入request.response，然后整体放入<body>
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('错误了')
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载4.xml成功')
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
            else {
                console.log('加载失败')
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载5.json成功')
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    if (n <= 2) {
        const request = new XMLHttpRequest()
        request.open('GET', `/page${n + 1}`)
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                console.log(`page${n + 1}.json成功`)
                if (request.status >= 200 && request.status < 300) {
                    const array = JSON.parse(request.response)
                    array.forEach(item => {
                        const li = document.createElement('li')
                        li.textContent = item.id
                        xxx.appendChild(li)
                    });
                }
            }
        }
        request.send()
        n += 1
    }
    else alert('别按了，没表咯')
}