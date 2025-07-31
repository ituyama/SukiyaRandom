function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function ChoiceGyudon(menu) {
    return menu[getRandomInt(0, 21)]
}

function ChoiceRandom(menu) {
    fs = ChoiceGyudon(menu)
    var price = fs.price
    var MenuList = [fs.name]
    var MenuPriceList = [fs.price]
    var res
    var TotalList = [fs]

    while (price < 1000) {

        MenuNow = menu[getRandomInt(22, 56)]

        MenuList[MenuList.length] = MenuNow.name
        MenuPriceList[MenuPriceList.length] = MenuNow.price
        TotalList[TotalList.length] = MenuNow

        price = price + MenuNow.price

        res = [MenuList, MenuPriceList]

    }


    if (price > 1000) {
        res[0].pop();
        res[1].pop();
        TotalList.pop()


    }

    res[2] = MenuPriceList.reduce(function (a, b) {
        return a + b;
    });


    //


    TotalList[TotalList.length] = {
        Total: res[2]
    }
    return TotalList

}

function AddHTML() {
    fetch('js/menu.json')
        .then(response => response.json())
        .then(menu => {
            ins = ChoiceRandom(menu);
            while (ins[ins.length - 1].Total < 970) {
                ins = ChoiceRandom(menu);
            }

            let strs = "";
            let share_url = "";
            for (let i = 0; i < ins.length - 1; i++) {
                strs = strs + "<div class='col-md-6'><div class='card'><p class='left'>" + ins[i].name + "</p><p class='prices right'>" + ins[i].price + "円</p></div></div>";
                share_url = share_url + ins[i].name + "、" + ins[i].price + "円\n";
            }
            strs = strs + "<div class='col-md-6'><div class='card'><p class='left'>合計" + ins[ins.length - 1].Total + "円</p></div></div>"
            document.getElementById('content').innerHTML = strs;
            share_url = share_url + "合計" + ins[ins.length - 1].Total + "円";
            console.log(strs)
            ShareTwitter(share_url)
        });
}


// シェアボタン追加

function ShareTwitter(share) {
    var shareUrl = 'https://twitter.com/intent/tweet';
    shareUrl += '?text=' + encodeURIComponent("すき家1000円ガチャを回したよ!\n" + share);
    shareUrl += '&url=' + encodeURIComponent('\nhttps://ituyama.com/SukiyaRandom\n');
    shareUrl += '&hashtags=すき家1000円ガチャ'
    var shareArea = document.getElementById('twitter-share');

    var shareLink = "<a target='_blank' href=" + shareUrl + " class='bi  bi-twitter twitter-share'>結果を共有する！</a>";
    
    shareArea.innerHTML = shareLink;
}