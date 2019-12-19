let refresh = function () {
    document.getElementById('data-json').innerHTML = '到达refresh函数了';
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('get', 'http://ext.gaomuxuexi.com:5870/task/random');
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let data = xmlHttp.responseText;
            console.log(xmlHttp.response);
            document.getElementById('data-json').innerHTML += data;
        }
    }
}