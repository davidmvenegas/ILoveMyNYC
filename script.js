document.querySelectorAll('.activity-controls').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})

// TYPEWRITER
class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 300 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    }
}
window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    setTimeout(() => {
        document.querySelector('body').classList.add("display");
    }, 3500);
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
    if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
}
};
// TYPEWRITER


// ACTIVITY_SLIDER
const boroughs = document.querySelector('.borough-slides')
const activities = document.querySelector('.activities-slides')

const activityTopControl = document.querySelector('.activity-top-control')
const activityRightControl = document.querySelector('.activity-right-control')
const activityBottomControl = document.querySelector('.activity-bottom-control')
const activityLeftControl = document.querySelector('.activity-left-control')

let axisY = 0
let axisX = 0

activityBottomControl.classList.add('hideControl')
activityLeftControl.classList.add('hideControl')

const heightControl = () => {
    if(axisY === -175) {
        activityTopControl.classList.add('hideControl')
    } else {
        activityTopControl.classList.remove('hideControl')
    }
    if(axisY === 0) {
        activityBottomControl.classList.add('hideControl')
    } else {
        activityBottomControl.classList.remove('hideControl')
    }
    if(axisX === -140) {
        activityRightControl.classList.add('hideControl')
    } else {
        activityRightControl.classList.remove('hideControl')
    }
    if(axisX === 0) {
        activityLeftControl.classList.add('hideControl')
    } else {
        activityLeftControl.classList.remove('hideControl')
    }
}

activityTopControl.addEventListener('click', () => {
    if(-170 > axisY < 1) {
        activities.style.marginTop = `${axisY -= 35}rem`
    heightControl()
    console.log(axisY + "Y")
}})

activityBottomControl.addEventListener('click', () => {
    if(-213 < axisY && axisY != 0) {
        activities.style.marginTop = `${axisY += 35}rem`
    heightControl()
    console.log(axisY + "Y")
}})

activityRightControl.addEventListener('click', () => {
    if(-135 > axisX < 1) {
        boroughs.style.marginTop = `${axisX -= 35}rem`
    heightControl()
    console.log(axisX + "X")
}})

activityLeftControl.addEventListener('click', () => {
    if(-177 < axisX && axisX != 0) {
        boroughs.style.marginTop = `${axisX += 35}rem`
    heightControl()
    console.log(axisX + "X")
}})
// ACTIVITY_SLIDER


// RANDOM_BUTTON
const spinBtn = document.querySelector('.in')

spinBtn.addEventListener('click', () => {
    spinBtn.classList.add('in360')
    let Xarray = [0, -35, -70, -105, -140]
    let Yarray = [0, -35, -70, -105, -140, -175]
    let Xrand = Xarray[Math.floor(Math.random() * Xarray.length)]
    let Yrand = Yarray[Math.floor(Math.random() * Yarray.length)]
    boroughs.style.marginTop = `${axisX = Xrand}rem`
    activities.style.marginTop = `${axisY = Yrand}rem`
    heightControl()
    setTimeout(() => {spinBtn.classList.remove('in360')}, 600)
})
// RANDOM_BUTTON


// ACTIVITY_LINKS
const activityBtn = document.querySelector('.activity-btn')

activityBtn.addEventListener('click', () => {
    if (axisX === 0 && axisY === 0) {
        window.location.href = "/activity_pages/manhattan-1.html";
    } else if (axisX === 0 && axisY === -35) {
        window.location.href = "/activity_pages/manhattan-2.html";
    } else if (axisX === 0 && axisY === -70) {
        window.location.href = "/activity_pages/manhattan-3.html";
    } else if (axisX === 0 && axisY === -105) {
        window.location.href = "/activity_pages/manhattan-4.html";
    } else if (axisX === 0 && axisY === -140) {
        window.location.href = "/activity_pages/manhattan-5.html";
    } else if (axisX === 0 && axisY === -175) {
        window.location.href = "/activity_pages/manhattan-6.html";
    } else if (axisX === -35 && axisY === 0) {
        window.location.href = "/activity_pages/queens-1.html";
    } else if (axisX === -35 && axisY === -35) {
        window.location.href = "/activity_pages/queens-2.html";
    } else if (axisX === -35 && axisY === -70) {
        window.location.href = "/activity_pages/queens-3.html";
    } else if (axisX === -35 && axisY === -105) {
        window.location.href = "/activity_pages/queens-4.html";
    } else if (axisX === -35 && axisY === -140) {
        window.location.href = "/activity_pages/queens-5.html";
    } else if (axisX === -35 && axisY === -175) {
        window.location.href = "/activity_pages/queens-6.html";
    } else if (axisX === -70 && axisY === 0) {
        window.location.href = "/activity_pages/brooklyn-1.html";
    } else if (axisX === -70 && axisY === -35) {
        window.location.href = "/activity_pages/brooklyn-2.html";
    } else if (axisX === -70 && axisY === -70) {
        window.location.href = "/activity_pages/brooklyn-3.html";
    } else if (axisX === -70 && axisY === -105) {
        window.location.href = "/activity_pages/brooklyn-4.html";
    } else if (axisX === -70 && axisY === -140) {
        window.location.href = "/activity_pages/brooklyn-5.html";
    } else if (axisX === -70 && axisY === -175) {
        window.location.href = "/activity_pages/brooklyn-6.html";
    } else if (axisX === -105 && axisY === 0) {
        window.location.href = "/activity_pages/staten_island-1.html";
    } else if (axisX === -105 && axisY === -35) {
        window.location.href = "/activity_pages/staten_island-2.html";
    } else if (axisX === -105 && axisY === -70) {
        window.location.href = "/activity_pages/staten_island-3.html";
    } else if (axisX === -105 && axisY === -105) {
        window.location.href = "/activity_pages/staten_island-4.html";
    } else if (axisX === -105 && axisY === -140) {
        window.location.href = "/activity_pages/staten_island-5.html";
    } else if (axisX === -105 && axisY === -175) {
        window.location.href = "/activity_pages/staten_island-6.html";
    } else if (axisX === -140 && axisY === 0) {
        window.location.href = "/activity_pages/the_bronx-1.html";
    } else if (axisX === -140 && axisY === -35) {
        window.location.href = "/activity_pages/the_bronx-2.html";
    } else if (axisX === -140 && axisY === -70) {
        window.location.href = "/activity_pages/the_bronx-3.html";
    } else if (axisX === -140 && axisY === -105) {
        window.location.href = "/activity_pages/the_bronx-4.html";
    } else if (axisX === -140 && axisY === -140) {
        window.location.href = "/activity_pages/the_bronx-5.html";
    } else if (axisX === -140 && axisY === -175) {
        window.location.href = "/activity_pages/the_bronx-6.html";
    }
})
// ACTIVITY_LINKS


// GETTING_AROUND_BUTTON
Array.from(document.querySelectorAll(".getting-around-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    }
})
// GETTING_AROUND_BUTTON


// KEYFRAME_DELAYS
let observer1 = new IntersectionObserver(updates => {
    updates.forEach(update => {
        if (update.isIntersecting) {
            update.target.classList.add('shift_frame_firstEle');
        } else {
            update.target.classList.remove('shift_frame_firstEle');
        }
    });
}, { threshold: 0 });
let observer2 = new IntersectionObserver(updates => {
    updates.forEach(update => {
        if (update.isIntersecting) {
            update.target.classList.add('shift_frame_secondEle');
        } else {
            update.target.classList.remove('shift_frame_secondEle');
        }
    });
}, { threshold: 0 });
let observer3 = new IntersectionObserver(updates => {
    updates.forEach(update => {
        if (update.isIntersecting) {
            update.target.classList.add('shift_frame_thirdEle');
        } else {
            update.target.classList.remove('shift_frame_thirdEle');
        }
    });
}, { threshold: 0 });
let observer4 = new IntersectionObserver(updates => {
    updates.forEach(update => {
        if (update.isIntersecting) {
            update.target.classList.add('shift_frame_fourthEle');
        } else {
            update.target.classList.remove('shift_frame_fourthEle');
        }
    });
}, { threshold: 0 });
let observer5 = new IntersectionObserver(updates => {
    updates.forEach(update => {
        if (update.isIntersecting) {
            update.target.classList.add('shift_frame_fifthEle');
        } else {
            update.target.classList.remove('shift_frame_fifthEle');
        }
    });
}, { threshold: 0 });
let observer6 = new IntersectionObserver(updates => {
    updates.forEach(update => {
        if (update.isIntersecting) {
            update.target.classList.add('shift_frame_sixthEle');
        } else {
            update.target.classList.remove('shift_frame_sixthEle');
        }
    });
}, { threshold: 0 });
let observer_img = new IntersectionObserver(updates => {
    updates.forEach(update => {
        if (update.isIntersecting) {
            update.target.classList.add('shift_frame_center_img');
        } else {
            update.target.classList.remove('shift_frame_center_img');
        }
    });
}, { threshold: 0 });
[...document.querySelectorAll('.feature:nth-child(1)')].forEach(element => observer1.observe(element));
[...document.querySelectorAll('.feature:nth-child(2)')].forEach(element => observer2.observe(element));
[...document.querySelectorAll('.feature:nth-child(3)')].forEach(element => observer3.observe(element));
[...document.querySelectorAll('.feature:nth-child(4)')].forEach(element => observer4.observe(element));
[...document.querySelectorAll('.feature:nth-child(5)')].forEach(element => observer5.observe(element));
[...document.querySelectorAll('.feature:nth-child(6)')].forEach(element => observer6.observe(element));
[...document.querySelectorAll('.features-img-wrapper img')].forEach(element => observer_img.observe(element));
// KEYFRAME_DELAYS