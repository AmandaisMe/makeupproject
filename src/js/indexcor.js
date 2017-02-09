window.onload=function(){
                    var banner = document.getElementsByClassName('banner')[0];
                    var ul = banner.getElementsByTagName('ul')[0];
                    var speed;
                    var children = ul.children;
                    list = children.length;
                    index = 0;

                    //获取元素高度
                    height = ul.offsetHeight;
                    cloneli = ul.firstElementChild.cloneNode(true);
                    ul.appendChild(cloneli);
                    setInterval(function() {
                        index++;

                        if (index > list) {
                            ul.style.top = 0;
                            index = 1;

                        }
                        target = -height * index;
                        clearInterval(ul.timer);

                        ul.timer = setInterval(function() {

                            var currenttop = ul.offsetTop;
                            speed = (target - currenttop) / 10;
                            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                            if (currenttop == target) {
                                clearInterval(ul.timer);
                                currenttop = target - speed;
                            }
                            ul.style.top = currenttop + speed + 'px';

                        }, 30)

                    }, 3000);


                    //cookies

                    var introduce = document.getElementsByClassName('introduce')[0];
                    var count = document.getElementsByClassName('count')[0];

                    var goods = [];
                    var cookies = document.cookie.split('; ');


                    for (var i = 0; i < cookies.length; i++) {

                        var arr = cookies[i].split('=');
                        if (arr[0] === 'goods') {

                            goods = JSON.parse(arr[1]);

                        }
                    }

                    introduce.onclick = function(e) {

                        e = e || window.event;
                        var target = e.target || e.srcElement;
                        if (target.className.toLowerCase() === 'carlist') {
                            var currentli = target.parentElement.parentElement;

                            var children = currentli.children;


                            var carlist = {};

                            carlist.qty = 1;
                            carlist.imgurl = children[0].children[0].getAttribute('src');
                            console.log(carlist.imgurl)
                            carlist.title = children[1].innerHTML;
                            carlist.price = children[2].children[0].children[0].innerHTML;
                            carlist.disco = children[2].children[0].children[1].innerHTML;



                            count.innerHTML = Number(count.innerHTML) + 1;
                            console.log(count.innerHTML)
                            console.log(carlist.title);
                            if (goods.length === 0) {

                                goods.push(carlist);

                            } else {
                                for (var j = 0; j < goods.length; j++) {

                                    if (carlist.title === goods[j].title) {

                                        goods[j].qty++;

                                        break;
                                    }
                                }
                                console.log(j);
                                console.log(goods.length);
                                if (j === goods.length) {

                                    goods.push(carlist);

                                }

                            }
                            var now = new Date();
                            now.setDate(now.getDate() + 3)

                            document.cookie = 'goods=' + JSON.stringify(goods) + ';expires=' + now;

                        }
                    }
             
}