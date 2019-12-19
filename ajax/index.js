let refresh = function () {
    // document.getElementById('data-json').innerHTML = '到达refresh函数了';
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('get', 'http://ext.gaomuxuexi.com:5870/task/random');
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let data = xmlHttp.responseText;
            //转化为JSON
            data = JSON.parse(data);
            console.log(xmlHttp.response);
            let dataCode = data['no'];
            if (dataCode == 200) {
                console.log(dataCode);
                let list = data['list'];
                let tree = data['tree'];
                document.getElementById('data-list').innerHTML = list;
                document.getElementById('data-tree').innerHTML = tree;
            } else {
                let date = new Date();
                alert("这个测试用例错误\n" + date);
            }

        }
    }
}