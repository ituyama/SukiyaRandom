const menu = [{
        name: "食べラー・メンマ牛丼",
        price: 580
    },
    {
        name: "にんにく食べラー・メンマ牛丼",
        price: 640
    },
    {
        name: "ピリ辛ゴマだれ食べラー・メンマ牛丼",
        price: 630
    },
    {
        name: "にんにくピリ辛ゴマだれ食べラー・メンマ牛丼",
        price: 690
    },
    {
        name: "牛丼",
        price: 400
    },

    {
        name: "キムチ牛丼",
        price: 550
    },

    {
        name: "ねぎ玉牛丼",
        price: 550
    },

    {
        name: "とろ〜り3種のチーズ牛丼",
        price: 580
    },
    {
        name: "おろしポン酢牛丼",
        price: 550
    },
    {
        name: "高菜明太マヨ牛丼",
        price: 550
    },
    {
        name: "わさび山かけ牛丼",
        price: 550
    },
    {
        name: "にんにくファイヤー牛丼",
        price: 520
    },
    {
        name: "マヨにんにくファイヤー牛丼",
        price: 570
    },
    {
        name: "食べラー・メンマ牛丼ライト",
        price: 660
    },
    {
        name: "牛丼ライト",
        price: 480
    },
    {
        name: "キムチ牛丼ライト",
        price: 630
    }, {
        name: "ねぎ玉牛丼ライト",
        price: 630
    },
    {
        name: "とろ〜り３種のチーズ牛丼ライト",
        price: 660
    },
    {
        name: "おろしポン酢牛丼ライト",
        price: 630
    },
    {
        name: "高菜明太マヨ牛丼ライト",
        price: 630
    },
    {
        name: "わさび山かけ牛丼ライト",
        price: 630
    },

    {
        name: "かつぶしオクラ牛丼ライト",
        price: 630
    },


    {
        name: "食べラー・メンマ",
        price: 180
    },

    {
        name: "ラー油",
        price: 70
    },
    {
        name: "ガリガリファイヤー単品",
        price: 60
    },
    {
        name: "みそ汁",
        price: 80
    },
    {
        name: "とん汁",
        price: 190
    },
    {
        name: "おしんこ",
        price: 90
    },
    {
        name: "たまご",
        price: 60
    },
    {
        name: "おんたま",
        price: 80
    },
    {
        name: "シーザーサラダ",
        price: 220
    },
    {
        name: "サラダ",
        price: 160
    },
    {
        name: "オクラサラダ",
        price: 200
    },
    {
        name: "カットりんご",
        price: 110
    },
    {
        name: "牛皿",
        price: 300
    },
    {
        name: "まぐろたたき皿",
        price: 490
    },
    {
        name: "かつぶしオクラ",
        price: 150
    },
    {
        name: "季節のひじき煮",
        price: 80
    },
    {
        name: "さば",
        price: 280
    },
    {
        name: "鮭",
        price: 280
    },
    {
        name: "からあげ",
        price: 100
    },
    {
        name: "冷やっこ",
        price: 130
    },
    {
        name: "納豆",
        price: 90
    },
    {
        name: "ごはん",
        price: 160
    },

    {
        name: "フライドにんにく",
        price: 60
    },

    {
        name: "キムチ",
        price: 150
    },

    {
        name: "山かけ(わさび付)",
        price: 150
    },

    {
        name: "おろしポン酢",
        price: 150
    },

    {
        name: "高菜明太マヨ",
        price: 150
    },

    {
        name: "高菜",
        price: 120
    },

    {
        name: "明太マヨ",
        price: 40
    },


    {
        name: "青ねぎ",
        price: 80
    },

    {
        name: "のり",
        price: 30
    },
    {
        name: "マヨネーズ",
        price: 50
    },


    {
        name: "ゴマだれ",
        price: 50
    },



    {
        name: "旨辛ダレ",
        price: 40
    },

    {
        name: "コチュジャンだれ",
        price: 40
    }


]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function ChoiceGyudon() {
    return menu[getRandomInt(0, 21)]
}

function ChoiceRandom() {
    fs = ChoiceGyudon()
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

console.log("答え", ChoiceRandom().length)

function AddHTML() {
    ins = ChoiceRandom();
    while(ins[ins.length - 1].Total < 970) {
        ins = ChoiceRandom();
    }

    let strs = "";
    let share_url = "";
    for (let i = 0; i < ins.length - 1; i++){
        strs = strs + "<div class='col-md-6'><div class='card'><p class='left'>" + ins[i].name + "</p><p class='prices right'>" + ins[i].price + "円</p></div></div>";
        share_url = share_url+ins[i].name+"、"+ins[i].price+"円\n";
    }
    strs = strs + "<div class='col-md-6'><div class='card'><p class='left'>合計" + ins[ins.length-1].Total +"円</p></div></div>"
    document.getElementById('content').innerHTML = strs;
    share_url = "合計"+share_url + ins[ins.length - 1].Total + "円";
    console.log(strs)
    ShareTwitter(share_url)
}


// シェアボタン追加

function ShareTwitter(share) {
var shareUrl  = 'https://twitter.com/intent/tweet';
shareUrl += '?text='+encodeURIComponent("すき家1000円ガチャを回したよ!\n"+share);
shareUrl += '&url='+encodeURIComponent('\nhttps://ituyama.com/SukiyaRandom\n');
shareUrl+='&hashtags=すき家1000円ガチャ'
    var shareArea = document.getElementById('twitter-share');
    
var shareLink = "<a target='_blank' href="+shareUrl +" class='bi bi-twitter'>Share!</a>";
shareArea.innerHTML = shareLink;
}