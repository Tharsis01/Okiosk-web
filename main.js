var total_num = 0;
var total_price = 0;
<<<<<<< HEAD
var age = 0;
=======
>>>>>>> 8e3e43f3809613261db9d8b6558a68ea78a8072e

function start_btn() {
    document.getElementById("kiosk_start_img").style.display = 'none';
    document.getElementById("kiosk_start_btn").style.display = 'none';
    document.getElementById("세트").style.display = 'none';
    document.getElementById("사이드").style.display = 'none';
    document.getElementById("음료&디저트").style.display = 'none';
    
    document.getElementById("kiosk_order").style.display = 'block';
    document.getElementById("kiosk_menu_table").style.display = 'block';
    document.getElementById("nextpage").style.display = 'flex';
    document.getElementById("pay").style.display = 'flex';
    hide_order_list();
}

function start_btn2() {
    document.getElementById("kiosk_start_img").style.display = 'none';
    document.getElementById("kiosk_start_btn").style.display = 'none';
    document.getElementById("subpage").style.display = 'block';
<<<<<<< HEAD
    //document.getElementById("homebtn").style.display = 'block';
    //document.getElementById("title wrapper").style.display = 'block';
    //document.getElementById("menu wrapper").style.display = 'block';
    fetch('http://127.0.0.1:5000/')
    .then(function(response) {
      if (response.ok) { // 응답이 성공적으로 도착한 경우
        return response.json(); // 응답 데이터를 JSON 형식으로 파싱하여 반환
      } else {
        throw new Error('오류 발생: ' + response.status); // 응답이 실패한 경우 오류 처리
      }
    })
    .then(function(data) {
      age = data.age; // 응답 데이터에서 age 값을 추출하여 변수에 저장
      console.log(age); // 저장된 age 값을 출력 또는 원하는 대로 활용
    })
    .catch(function(error) {
      console.log('오류 발생: ' + error.message); // 오류 메시지 출력
    });
=======
    document.getElementById("homebtn").style.display = 'block';
    document.getElementById("title wrapper").style.display = 'block';
    document.getElementById("menu wrapper").style.display = 'block';
>>>>>>> 8e3e43f3809613261db9d8b6558a68ea78a8072e
}

window.onload = function () { 
    document.getElementById("세트").style.display = 'none';
    document.getElementById("사이드").style.display = 'none';
    document.getElementById("음료&디저트").style.display = 'none';
    for (i = 1; i < 8; i++) {
        
        var plus_id = "plus_" + (i);
        document.getElementById(plus_id).style.display = 'none';
        var minus_id = "minus_" + (i);
        document.getElementById(minus_id).style.display = 'none';
    } 
}

function hide_order_list() {
    var list = document.getElementsByClassName("cart");
    for (i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
}

var menu_list = ["버거&와퍼"];
function open_menu_table(id) {
    all_menu_none();
    // document.getElementById(menu_list[0]).style.display = 'none';
    // menu_list.pop();
    // menu_list.push(id);
    document.getElementById(id).style.display = 'block';
}

function all_menu_none() {
    document.getElementById("버거&와퍼").style.display = 'none';
    document.getElementById("세트").style.display = 'none';
    document.getElementById("사이드").style.display = 'none';
    document.getElementById("음료&디저트").style.display = 'none';

}
var menu_bar_page = 1;
/*
function turn_menu_page(btn) {
    var current_page_id = "kiosk_menu_";
    if (btn == "menu_bar_right") {
        if (menu_bar_page != 3) {
            var past = document.getElementsByClassName(current_page_id + menu_bar_page);
            past[0].style.display = 'none';
            past[1].style.display = 'none';
            past[2].style.display = 'none';
            past[3].style.display = 'none';
            menu_bar_page += 1;
            if(menu_bar_page == 3) {
                all_menu_none();
                document.getElementById("Beverage").style.display = 'block';
            }
            if(menu_bar_page == 2) {
                all_menu_none();
                document.getElementById("스무디_프라페").style.display = 'block';
            }

        }
        var now = document.getElementsByClassName(current_page_id + menu_bar_page);
        now[0].style.display = 'block';
        now[1].style.display = 'block';
        now[2].style.display = 'block';
        now[3].style.display = 'block';


    }

    if (btn == "menu_bar_left") {
        if (menu_bar_page != 1) {
            var past = document.getElementsByClassName(current_page_id + menu_bar_page);
            past[0].style.display = 'none';
            past[1].style.display = 'none';
            past[2].style.display = 'none';
            past[3].style.display = 'none';
            menu_bar_page -= 1;
            if(menu_bar_page == 2) {
                all_menu_none();
                document.getElementById("커피_콜드브루").style.display = 'block';
            }
            if(menu_bar_page == 1) {
                all_menu_none();
                document.getElementById("커피_ICE").style.display = 'block';
            }
        }
        var now = document.getElementsByClassName(current_page_id + menu_bar_page);
        now[0].style.display = 'block';
        now[1].style.display = 'block';
        now[2].style.display = 'block';
        now[3].style.display = 'block';
    }

}
*/

function Item(name, price) {
    this.name = name;
    this.number = 0;
    this.price = parseInt(price);
    this.cnt = 0;
}


function disabled(){
    var button_joinus = document.getElementById('button');
    button_joinus.disabled = true;
}

var order_list = [];
function option(id, type, price) {
    var drink = document.getElementById(id);
    drink.style.borderStyle = 'solid';
    drink.style.borderColor = 'red';

    var order = new Item(id, price);
    order.number++;
    var plus_id = "plus_" + (1);
    document.getElementById(plus_id).style.display = 'flex';
    var minus_id = "minus_" + (1);
    document.getElementById(minus_id).style.display = 'flex';

    var cnt = 0;
    for (i = 0; i < order_list.length; i++) {
        if (order.name == order_list[i].name) {
            order_list[i].number = 1;
            cnt++;
        }
        var plus_id = "plus_" + (i+2);
        document.getElementById(plus_id).style.display = 'flex';
        var minus_id = "minus_" + (i+2);
        document.getElementById(minus_id).style.display = 'flex';
    }

    if (cnt == 0 || order_list.length == 0) {
        order_list.push(order);
        document.getElementById(id).style.pointerEvents = "none";
    }

    open_order_list(order_list);
    
}

function plus(j) {
 //   var total_num = 0;
 //   var total_price = 0;
    for (i = 0; i < order_list.length; i++) {
        if (i == j) {
            var order_id = "order_" + (i + 1);
            document.getElementById(order_id).style.display = 'flex';
            
            order_list[i].number++;
            
            document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
            document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
            document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";

            total_num += 1;
            total_price += (order_list[i].price) /* (order_list[i].number)*/;
        }
    }
    document.getElementById("item_number").innerHTML = "선택한 상품 " + (total_num) + "개";
    document.getElementById("total_price").innerHTML = (total_price) + "원<br>결제하기";
    total_list[0] = total_num;
    total_list[1] = total_price;
}

function minus(j) {
    //   var total_num = 0;
    //   var total_price = 0;

    for (i = 0; i < order_list.length; i++) {
        if (i == j) {
            var order_id = "order_" + (i + 1);
            document.getElementById(order_id).style.display = 'flex';
            order_list[i].number--;
            document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
            document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
            document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";

            total_num -= 1;
            total_price -= (order_list[i].price) /* (order_list[i].number)*/;
            
                if (order_list[i].number == 0) {
                    document.getElementById(order_list[i].name).style.borderStyle = 'none';
                    document.getElementById(order_list[i].name).style.borderColor = 'none';
                    document.getElementById(order_list[i].name).style.pointerEvents = "auto";
                    delete_item(j)
                }
        }
        document.getElementById("item_number").innerHTML = "선택한 상품 " + (total_num) + "개";
        document.getElementById("total_price").innerHTML = (total_price) + "원<br>결제하기";
        total_list[0] = total_num;
        total_list[1] = total_price;
    }
}
function delete_item(j) {
    document.getElementById("order_" + (order_list.length)).style.display = 'none';

    //total_num -= order_list[j].number;
    //total_price -= (order_list[j].price) * (order_list[j].number);

    // order_list.splice(j, 1, 0);
    order_list.splice(j, 1);
    open_order_list_2(order_list)

    document.getElementById("item_number").innerHTML = "선택한 상품 " + (total_num) + "개";
    document.getElementById("total_price").innerHTML = (total_price) + "원<br>결제하기";
    total_list[0] = total_num;
    total_list[1] = total_price;
}

function open_order_list_2(order_list) {

    for (i = 0; i < order_list.length; i++) {
        var order_id = "order_" + (i + 1);
        document.getElementById(order_id).style.display = 'flex';

        document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
        document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";
    }
   

    document.getElementById("item_number").innerHTML = "선택한 상품 " + (total_num) + "개";
    document.getElementById("total_price").innerHTML = (total_price) + "원<br>결제하기";
    total_list[0] = total_num;
    total_list[1] = total_price;
}

/*function delete_item(index) {
    order_list = order_list.splice(index, 1);
    open_order_list(order_list);
}*/


/*order_list에 표시하기*/
var total_list= [0, 0];
function open_order_list(order_list) {
    
    for (i = 0; i < order_list.length; i++) {
        var order_id = "order_" + (i + 1);
        document.getElementById(order_id).style.display = 'flex';

        document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
        document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";
        if (i == order_list.length - 1)
           total_price += (order_list[i].price) /* (order_list[i].number)*/;
    }
    total_num++;
    
    document.getElementById("item_number").innerHTML= "선택한 상품 " + (total_num) + "개";
    document.getElementById("total_price").innerHTML = (total_price)+"원<br>결제하기";
    total_list[0] = total_num;
    total_list[1] = total_price;
    
}

/*전체 삭제 창
function 전체삭제() {
    alert(order_list.length);
    for(i=0; i< order_list.length; i++) {

        var order_id = "order_" + (i + 1);
        document.getElementById(order_id).style.display = 'none';
        order_list.pop();
    }
    open_order_list(order_list);
}
 */

/*결제 창*/
function open_window_pay () {

    document.getElementById("window_pay").style.display = 'block';
    document.getElementById("screen_to_window_pay").style.display  = 'block';
    write_order_list_window_pay(order_list);
    
    document.getElementById("w_total_number").innerText = total_list[0];
    document.getElementById("w_total_price").innerText =total_list[1];
    
    document.getElementById("돌아가기").style.display = 'block';
    document.getElementById("먹고가기").style.display = 'block';
    document.getElementById("가져가기").style.display = 'block';

    document.getElementById("돌아가기_2").style.display = 'none';
    document.getElementById("쿠폰사용").style.display = 'none';
    document.getElementById("페이코").style.display = 'none';
    document.getElementById("카드결제").style.display = 'none';
}

function close_window_pay () {
    document.getElementById("window_pay").style.display = 'none';
    document.getElementById("screen_to_window_pay").style.display = 'none';
    for (i = 0; i < order_list.length; i++) {
        var window_id = "window_" + (i + 1);
        document.getElementById(window_id).style.display = 'none';
    }
}

function write_order_list_window_pay (order_list) {
    for (i=0; i<order_list.length; i++) {
        var window_id = "window_" + (i+1);
        document.getElementById(window_id).style.display = 'flex';
        document.getElementById("w_order_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("w_number_" + (i + 1)).innerText = (order_list[i].number) + "개 " + (order_list[i].price) * (order_list[i].number) + "원";
    }
}

function change_window_btn() {
    document.getElementById("돌아가기").style.display = 'none';
    document.getElementById("먹고가기").style.display = 'none';
    document.getElementById("가져가기").style.display = 'none';

    document.getElementById("돌아가기_2").style.display = 'block';
    document.getElementById("쿠폰사용").style.display = 'block';
    document.getElementById("페이코").style.display = 'block';
    document.getElementById("카드결제").style.display = 'block';
}

function back_2_window_btn() {
    document.getElementById("돌아가기").style.display = 'block';
    document.getElementById("먹고가기").style.display = 'block';
    document.getElementById("가져가기").style.display = 'block';

    document.getElementById("돌아가기_2").style.display = 'none';
    document.getElementById("쿠폰사용").style.display = 'none';
    document.getElementById("페이코").style.display = 'none';
    document.getElementById("카드결제").style.display = 'none';
}

function make_array() {
    var arr = [];

    for (i = 0; i < 2 * order_list.length; i=i+2){
        arr[i] = order_list[i/2].name;
        arr[i + 1] = order_list[i/2].number;
    }
    //console.log(arr);
    return arr;
}

// order_list 다 섞어버려서 1차원배열로 만들기
function open_w_카드결제() {
    console.log(order_list[0].name);
    var arr = make_array();
    console.log(arr);
    
        fetch("http://52.79.219.108:5000/", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                //menu: order_list[i].name, 
                //num: order_list[i].number,
                order: arr
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
 
    document.getElementById("w_카드결제").style.display = 'block';
    document.getElementById("window_pay").style.display = 'none';
    document.getElementById("w_카드결제_total_price").innerText = total_list[1]+"원";

    //document.getElementById("insert_card_moving").style.display='block'; 
}

function close_w_카드결제() {
    document.getElementById("w_카드결제").style.display = 'none';
    document.getElementById("screen_to_window_pay").style.display = 'none';
    //document.getElementById("insert_card_moving").style.display = 'none';

}


function 결제완료() {
    alert("감사합니다. 결제가 완료되었습니다. 교환권과 카드를 챙겨가세요.");
    location.href = "okiosk.html";
}

function herf_home() {
    location.href = "okiosk.html";
}