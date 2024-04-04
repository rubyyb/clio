function openView() {
    var popupW = 450;
    var popupH = 650;
    var left = Math.round((window.screen.width/2) - (popupW/2));
    var top = Math.ceil((window.screen.height - popupH) / 2);
    window.open('https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fclubclio.co.kr%252Fcontroller%252Fmember%252Fkakao%252Flogin%26state%3D310647093%26through_account%3Dtrue%26client_id%3D26730907262e50424e561eacc6262936#login', '', 'width=' + popupW + ',height=' + popupH + ',left=0' + ',top=' + top + ',scrollbars=yes,resizable=no,toolbar=no,titlebar=no,menubar=no,location=no')
    console.log(left)
    console.log(top)
}
