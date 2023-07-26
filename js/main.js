function toast({
    title = '',
    massage = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const autoRemovedID = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemovedID)
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-info',
            warning: 'fa-solid fa-exclamation',
        };

        const delay = (duration / 1000).toFixed(2);
        const icon = icons[type];
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideleft ease .4s, fadeout linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
        <div class="toast__body">
                <h3 class="toast__title"> ${title} </h3>
                <p class="toast__massage"> ${massage} </p>
        </div>
        <div class="toast__close">
                <i class="ti-close"></i>
        </div>
        
        `;
        main.appendChild(toast);

    }
}

// khi nao can thi link file js nay vo html va goi ham ben duoi

// toast({
//     title: 'success',
//     massage: 'Anyone with access can view your invited visitors but ',
//     type: 'info',
//     duration: 3000
// });


// function showSuccessToast() {
//     toast({
//         title: 'success',
//         massage: 'Anyone with access can view your invited visitors but ',
//         type: 'success',
//         duration: 3000
//     });
// };

// function showWarningToast() {
//     toast({
//         title: 'info',
//         massage: 'Anyone with access can view your invited visitors but ',
//         type: 'info',
//         duration: 3000
//     });
// };

// function showDangerToast() {
//     toast({
//         title: 'warning',
//         massage: 'Anyone with access can view your invited visitors but ',
//         type: 'warning',
//         duration: 3000
//     });
// };