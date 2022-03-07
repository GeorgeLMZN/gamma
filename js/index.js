(function(){
    const btnContent = document.querySelector('.content-footer');
    const content = document.querySelector('.content-bar');
    const contentClosest = '.content-bar';
    
    const btnFondList = document.querySelector('.fond-open');
    const fondList = document.querySelector('.fond-list')
    const fondClosest = '.fond-list';
    
    const btnSubCats = document.querySelectorAll('.fond-item__link');
    const closestCats = '.fond-item__link';

    function openMenu() {
        const btn = document.querySelector('.burger-btn');
        const sidebar = document.querySelector('.sidebar');
        const btnClose = document.querySelector('.btn-close');
        btn.addEventListener('click', (e) => {
            if(e.target.closest('.burger-btn')) {
                sidebar.classList.add('open');
                btn.classList.add('hidden');
            }
        })
        btnClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
            btn.classList.remove('hidden');
        }) 
    }
    
    function openClose(btn, item, closest) {
        btn.addEventListener('click', (e) => {
            if(e.target.closest(closest)) {
                item.classList.toggle('open');
                btn.classList.toggle('open');
            }
        })
    }
    
    openClose(btnFondList, fondList, fondClosest);
    openClose(btnContent, content, contentClosest);

    for(let i = 0; i < btnSubCats.length; i++) {
        const fondList = btnSubCats[i].parentNode;
        openClose(btnSubCats[i], fondList, closestCats);
    }
    openMenu();

    function Notifications() {
        const Notification1 = document.querySelector('#notification-1');
        const Notification2 = document.querySelector('#notification-2');
        const Notification3 = document.querySelector('#notification-3');
        const Notification4 = document.querySelector('#notification-4');
        const Notification5 = document.querySelector('#notification-5');
        const Notification6 = document.querySelector('#notification-6');
        const shadow1 = document.querySelector('.shadow-1');
        const shadow2 = Notification2.parentNode.querySelector('.shadow');
        const shadow3 = Notification3.parentNode.querySelector('.shadow');
        const shadow4 = Notification4.parentNode.querySelector('.shadow');
        const shadow5 = Notification5.parentNode.querySelector('.shadow');
        const shadow5Mobile = document.querySelector('.mobile-shadow');
        const shadow6 = Notification6.parentNode.querySelector('.shadow');
        const circle2 = Notification2.parentNode.querySelector('.circle');
        const circle3 = Notification3.parentNode.querySelector('.circle');
        const circle4 = Notification4.parentNode.querySelector('.circle');
        const circle5 = document.querySelector('.burger-circle');
        const circle6 = Notification6.parentNode.querySelector('.circle');
        const icon2 = Notification2.parentNode.querySelector('.svg-icon');
        const icon3 = Notification3.parentNode.querySelector('.svg-icon');
        const icon4 = Notification4.parentNode.querySelector('.svg-icon');
        const icon5 = circle5.parentNode.querySelector('.svg-icon');
        const icon6 = Notification6.parentNode.querySelector('.svg-icon');
        const btn1 = Notification1.querySelector('.next-step');
        const btn2 = Notification2.querySelector('.next-step');
        const btn3 = Notification3.querySelector('.next-step');
        const btn4 = Notification4.querySelector('.next-step');
        const btn5 = Notification5.querySelector('.next-step');
        const btn6 = Notification6.querySelector('.next-step');
        const sidebar = document.querySelector('.sidebar');
        const panels = document.querySelector('.row-panels');

        Notification1.classList.add('visible');
        shadow1.classList.add('visible');
        btn1.addEventListener('click', () => {
            Notification1.classList.remove('visible');
            shadow1.classList.remove('visible');
            Notification2.classList.add('visible');
            shadow2.classList.add('visible');
            circle2.classList.add('visible');
            icon2.style.zIndex = 13;
        })
        btn2.addEventListener('click', () => {
            Notification2.classList.remove('visible');
            shadow2.classList.remove('visible');
            circle2.classList.remove('visible');
            Notification3.classList.add('visible');
            shadow3.classList.add('visible');
            circle3.classList.add('visible');
            icon2.style.zIndex = 0;
            icon3.style.zIndex = 13;
        })
        btn3.addEventListener('click', () => {
            Notification3.classList.remove('visible');
            shadow3.classList.remove('visible');
            circle3.classList.remove('visible');
            Notification4.classList.add('visible');
            shadow4.classList.add('visible');
            circle4.classList.add('visible');
            icon3.style.zIndex = 0;
            icon4.style.zIndex = 13;
            panels.classList.add('no-scroll');
        })
        btn4.addEventListener('click', () => {
            Notification4.classList.remove('visible');
            shadow4.classList.remove('visible');
            circle4.classList.remove('visible');
            Notification5.classList.add('visible');
            circle5.classList.add('visible');
            shadow5.classList.add('visible');
            shadow5.style.position = 'absolute';
            shadow5Mobile.classList.add('visible');
            circle5.classList.add('visible');
            icon4.style.zIndex = 0;
            icon5.style.zIndex = 13;
            panels.classList.remove('no-scroll');
        })
        btn5.addEventListener('click', () => {
            Notification5.classList.remove('visible');
            circle5.classList.remove('visible');
            Notification6.classList.add('visible');
            shadow6.classList.add('visible');
            circle6.classList.add('visible');
            sidebar.classList.add('open');
            icon5.style.zIndex = 0;
            icon6.style.zIndex = 13;
        })
        btn6.addEventListener('click', () => {
            Notification6.classList.remove('visible');
            shadow6.classList.remove('visible');
            circle6.classList.remove('visible');
            sidebar.classList.remove('open');
            icon6.style.zIndex = 0;
            shadow5.classList.remove('visible');
            shadow5Mobile.classList.remove('visible');
        });
    }
    Notifications();
    
    const btnShowNotifications = document.querySelector('.notifications.icon .svg-icon');
    const notificationsBlock = document.querySelector('.notifications-block ');
    const closestClass = '.notifications.icon';

    openClose(btnShowNotifications, notificationsBlock, closestClass);

    const searchBtn = document.querySelector('.search.icon .svg-icon');
    const searchBlock = document.querySelector('.search-input');
    const searchClosest = '.search.icon svg';

    openClose(searchBtn, searchBlock, searchClosest);

    const openActionsBtn = document.querySelector('.open-actions');
    const openActionsBlock = document.querySelector('.actions-line');
    const closestActions = '.open-actions';

    openClose(openActionsBtn, openActionsBlock, closestActions);
})();