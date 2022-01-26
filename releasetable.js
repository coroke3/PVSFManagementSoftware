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
                        var kaburi = 1;
                        console.log('かぶり');
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

        var cssh =
            '<style>.works{width:' +
            1500 / yoko +
            'px; margin-right:2px;}.work{width:' +
            (1500 / yoko - 5) +
            'px; height:' +
            (790 / tate - 5) +
            'px; font-size:' +
            123 / tate +
            'px;}</style>'
        $('head').append(cssh);
        console.log(cssh);

        var h = '';
        for (let step = 0; step < planlong / tate; step++) {
            console.log('step' + step)
            console.log('planlong' + planlong)
            var h = '<div class="works">'
            for (
                let i1 = step * tate + 0; i1 < (step + 1) * tate && i1 < planlong; i1++
            ) {
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

                var h = h + '<div class="work"><center><div class="p12">'
                if (plan[i].type == '個人') {
                    if (width1 < 1500 / yoko - 25) {
                        h = h + '<p1>' + plan[i].creator + '</p1>'
                    } else {
                        h = h + '<p1mini>' + plan[i].creator + '</p1mini>'
                    }
                    h = h + '<p2>さん</p2></div><div class="p3">'
                } else {
                    if (plan[i].type == '団体') {
                        if (width1 < 1000 / yoko - 100) {
                            h = h + '<p1><a id="team">【団体】</a>' + plan[i].creator + '</p1>'
                        } else {
                            h = h + '<p1mini><a id="team">【団体】</a>' + plan[i].creator + '</p1mini>'
                        }
                    }
                    h = h + '</div><div class="p3">'
                }
                if (width < 1500 / yoko) {
                    var h = h + '<p3>' + plan[i].title + '</p3>'
                } else {
                    if (plan[i].title.match('（' || '　' || ' ' || '(' || ')')) {
                        var shorttitle1 = plan[i].title
                        var result = shorttitle1.replace(
                            '（' || '(' || '"' || '""',
                            '<br><p3minibr>('
                        )
                        console.log(result)

                        var h = h + '<p3mini>' + result + '</p3minibr></p3mini>'
                    } else {
                        var h = h + '<p3mini>' + plan[i].title + '</p3mini>'
                    }
                }
                var h =
                    h +
                    '</div><div class="p4"><p4>' +
                    plan[i].date +
                    '  ' +
                    plan[i].time +
                    '  ' +
                    plan[i].release +
                    '</p4></center></div> '
            }

            h = h + '</div>'
            $('.under').append(h)
            console.log(h)
        }
    })
})