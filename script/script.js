window.addEventListener('scroll', function () {
        var notification = document.getElementById('notification');
        if (this.window.scrollY > 0.5) {
            notification.style.display = 'none'
        } else {
            notification.style.display = "flex"
        }
    }
)