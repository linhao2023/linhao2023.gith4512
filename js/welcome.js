function welcome(){
    let welcome_text = '欢迎光顾cool的机网~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n打开页面左下方音乐以获得更佳体验！',
        imageUrl: "/img/avatar.jpg",
        timer: 3000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})