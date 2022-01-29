$(function() {
    $.getJSON('../plan.json', plan => {
        var planlong = Object.keys(plan).length;
        var order = [0];
        console.log('順番' + order);
        console.log('planlong' + planlong);
        console.log('orderlong' + order.length);
        console.log('あｆ' + plan[0].date);


        console.log('順番' + order);

        var orderlong = Object.keys(order).length;
        for (let ord1 = 1; ord1 < planlong; ord1++) {
            var orderlong = Object.keys(order).length;
            console.log('orderlong' + orderlong);
            var ord2 = 0;
            for (var stoploop = 0; stoploop == 0;) {
                var ordli2 = order[ord2];
                var ordli2n1 = ordli2 + 1;
                console.log('ord1=' + ord1 + ';  ord2=' + ord2 + ';  ordli2=' + ordli2);
                console.log(plan[ord1].creator + plan[ord1].date + plan[ordli2].creator + plan[ordli2].date);
                var ord4 = plan[ord1].date.substr(3, 4) - plan[ordli2].date.substr(3, 4);
                console.log('ord4=' + ord4);
                if (plan[ord1].date > plan[ordli2].date) {
                    var kaburi = 0;
                    console.log('けんち');
                    if (ord4 >= 2) {
                        if (ord2 == orderlong - 1) {
                            console.log('ラスト例外処理');
                            order.splice(ord2 + 1, 0, ord1);
                            stoploop = 1;
                            var kaburi = 1;

                        } else {
                            var kaburi = 1;
                            console.log('かぶり');
                        }

                    }
                    for (let loop2 = 0; loop2 < orderlong; loop2++) {
                        var ord3 = order[loop2];


                        if (plan[ord1].date == plan[ord3].date) {
                            var kaburi = 1;
                            console.log('かぶり');
                        }
                        if (plan[ord1].date == plan[ord3].date) {
                            var kaburi = 1;
                            console.log('かぶり');
                        }
                    }
                    if (kaburi == 0) {
                        order.splice(ord2 + 2, 0, ord1);
                        stoploop = 1;
                    }
                } else {
                    if (plan[ord1].date == plan[ordli2].date) {
                        console.log('日付一致');

                        console.log(plan[ord1].creator + plan[ord1].time + plan[ordli2].creator + plan[ordli2].time);
                        if (plan[ord1].time > plan[ordli2].time) {
                            if (ord2 == orderlong - 1) {
                                console.log('ラスト例外処理');
                                order.splice(ord2 + 1, 0, ord1);
                                stoploop = 1;
                            }
                        } else {
                            if (plan[ord1].time < plan[ordli2].time) {
                                console.log('時間OK');
                                order.splice(ord2, 0, ord1);
                                stoploop = 1;
                            }
                        }
                    } else {
                        if (plan[ord1].date < plan[ordli2].date) {
                            console.log('時間OK');
                            order.splice(ord2, 0, ord1);
                            stoploop = 1;
                        }

                    }
                }
                console.log('順番' + order);
                ord2++;
            }
        }

        var tate = 7;
        var yoko = 4;


        var nowdate = 0;
        var h = '';
        for (var i1 = 0; i1 < planlong; i1++) {
            console.log('planlong' + planlong)
            var i = order[i1];

            console.log('i' + i1)
            var i = order[i1];
            var span = document.createElement('span')
            span.style.position = 'absolute'
            span.style.top = '-1000px'
            span.style.left = '-1000px'
            span.style.whiteSpace = 'nowrap'
            span.innerHTML = plan[i].title
            span.style.fontSize = 200 / tate + 'px'
            span.style.letterSpacing = '0px'
            document.body.appendChild(span)
            var width = span.clientWidth
            span.parentElement.removeChild(span)
            console.log(width)

            var span = document.createElement('span')
            span.style.position = 'absolute'
            span.style.top = '-1000px'
            span.style.left = '-1000px'
            span.style.whiteSpace = 'nowrap'
            span.innerHTML = plan[i].creator
            span.style.fontSize = 184 / tate + 'px'
            span.style.letterSpacing = '0px'
            document.body.appendChild(span)
            var width1 = span.clientWidth
            span.parentElement.removeChild(span)

            if (nowdate == plan[i].date) {

            } else {
                if (plan[i].date == '03-29') {
                    h = h + '<div class="date">03-29 まとめ動画にて上映' + '</div>';
                    var nowdate = plan[i].date;
                } else {
                    h = h + '<div class="date">' + plan[i].date + '</div>';
                    var nowdate = plan[i].date;
                }


            }
            h = h + '<div class="work menu__item__link js-menu__item__link">';
            h = h + '<div class="w3">' + plan[i].time + '</div>';
            h = h + '<div class="w4">';
            if (plan[i].type == '個人') {
                h = h + '個人';
            } else {
                if (plan[i].type == '団体') {
                    h = h + '<a id="grasp">団体</a>';
                } else {
                    if (plan[i].type == '音映') {
                        h = h + '<a id="grasp" class="onei">音楽<wbr>映像</a>';
                    }
                }
            }
            h = h + '</div>';
            h = h + '<div class="w5">';
            if (plan[i].type == '個人') {
                h = h + '<a href="https://twitter.com/' + plan[i].tlink + '"><img src="img/icon/webp/' + plan[i].tlink + '.webp" class="icon">';
            } else {
                if (plan[i].type == '団体') {

                } else {
                    if (plan[i].type == '音映') {

                    }
                }
            }

            h = h + '</div><div class="w1">';
            h = h + plan[i].creator + '</a></div>';
            h = h + '<div class="w2" >' + plan[i].title + '</div></div><div class="submenu">';
            if (plan[i].tlink == '') {} else {
                if (plan[i].type == '個人') {
                    h = h + '<a href="https://twitter.com/' + plan[i].tlink + '" id="fa-twitter"> <i class="fab fa-twitter"></i> Twitter</a>　'
                } else {
                    if (plan[i].type == '団体') {
                        h = h + '<a href="https://twitter.com/' + plan[i].tlink + '" id="fa-twitter"> <i class="fab fa-twitter"></i> 代表者Twitter</a>　'
                    } else {
                        if (plan[i].type == '音映') {
                            h = h + '<a href="https://twitter.com/' + plan[i].tlink + '" id="fa-twitter"> <i class="fab fa-twitter"></i> Twitter</a>　'
                        }
                    }
                }
            }

            if (plan[i].ychlink == '') {} else { h = h + '<a href="' + plan[i].ychlink + '" id="fa-youtube"><i class="fab fa-youtube"></i> YouTube</a>' }

            h = h + '<br><br>' + '音楽:' + plan[i].music + '　　作曲:' + plan[i].credit;
            if (plan[i].ymulink == '') {} else {
                h = h + '　　<a href="' + plan[i].ymulink + '"> <br>楽曲URL＞ </a>'
            }

            h = h + '</div></div>';

        }
        $('.listtable').append(h)
        console.log(h)
        $(function() {
            $('.js-menu__item__link').each(function() {
                $(this).on('click', function() {
                    $(this).toggleClass('on');
                    $('+.submenu', this).slideToggle()
                    return false
                })
            })
        })
    })
})