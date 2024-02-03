(() => {
    const projectInfoBtn = document.querySelectorAll('.project-info-btn');
    const boxProjectInfo = document.querySelector('.container-project-info');
    const closeBtn = document.querySelector('.container-project-info .close');

    projectInfoBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            boxProjectInfo.classList.add('active');
            document.querySelector('.info-back-blocker').classList.add('active');
            if (!document.body.classList.contains("body-disabled")) {
                document.body.classList.add("body-disabled");
            }
            if(btn.classList.contains("container-right")) {
                closeBtn.classList.add("right");
            }
            document.querySelector('.info-back-blocker').addEventListener('click', () => {
                boxProjectInfo.classList.remove('active');
                document.querySelector('.info-back-blocker').classList.remove('active');
                if (btn.classList.contains('container-right')) {
                    document.body.classList.remove("body-disabled");
                }
            });
        });
    });
    
    closeBtn.addEventListener('click', () => {
        if (closeBtn.classList.contains('right')) {
            document.body.classList.remove("body-disabled");
            closeBtn.classList.remove('right');
        }
        boxProjectInfo.classList.remove('active');
        document.querySelector('.info-back-blocker').classList.remove('active');
    });
})();