$(function() {
    // this replaces document.ready
    setTimeout(function() {
        $("#preloader").fadeOut("slow", function() {
            $(this).remove();
        });
    }, 1500);
});

function getTotalExpInDays() {
    const noOfMilliSecInDay = 24 * 60 * 60 * 1000;

    const careerStartDate = new Date(2017, 09, 3); //months are 0 based in JS
    //console.log("%cCareer started on: ", 'background: #222; color: #bada55', careerStartDate);

    const todaysDate = new Date();
    const totalExperienceInDays = Math.round((todaysDate - careerStartDate) / noOfMilliSecInDay);
    return totalExperienceInDays;
}

function calculateTotalExperience() {
    const totalExpInDays = getTotalExpInDays();
    var totalExp;
    const totalMonths = totalExpInDays / 30;

    var yearsOfExperience = Math.floor(totalMonths / 12);
    var monthsOfExperience = Math.floor(totalMonths % 12);

    if (monthsOfExperience == 12) {
        yearsOfExperience++;
        totalExp = yearsOfExperience + " years";
    } else if (monthsOfExperience == 0) {
        totalExp = yearsOfExperience + " years";
    } else {
        totalExp = yearsOfExperience + " years and " + monthsOfExperience + " months";
    }

    console.log('%cTotal Experience: ', 'background: #222; color: #bada55', totalExp);

    return totalExp;

}

function fillCertificateData(imgSrc, certUrl, isValidateButtonVisible) {
    console.log("isValidateButtonVisible: " + isValidateButtonVisible);
    if (isValidateButtonVisible == false) {
        document.getElementById("cert_url_field").style.display = "none";
    }
    document.getElementById("cert_img_field").src = imgSrc;
    document.getElementById("cert_url_field").href = certUrl;
    console.log("Certificate modal opened");
}

function fillCertificateDataCarousel(isValidateButtonVisible, ...certificateUrls) {

    var carouselIndicators = "";

    for (var i = 0; i < certificateUrls.length; i++) {
        console.log("URL: " + certificateUrls[i]);
        carouselIndicators += "<li data-target='#carouselImageIndicators' data-slide-to='" + i + "'";
        if (i == 0) {
            carouselIndicators += " class='active'";
        }
        carouselIndicators += " ></li>";
    }

    document.getElementById("carousel-indicators").innerHTML = carouselIndicators;

    var carouselInners = "";

    for (var i = 0; i < certificateUrls.length; i++) {
        carouselInners += "<div class='carousel-item ";
        if (i == 0) {
            carouselInners += "active";
        }
        carouselInners += "'><img class='cert_img' src='" + certificateUrls[i] + "' alt='Certificate' /></div>";
    }

    document.getElementById("carousel-inner").innerHTML = carouselInners;

}

function activateTooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}

function renderLastUpdatedTime() {
    fetch('https://api.github.com/repos/tingreavinash/tingreavinash.github.io/commits?per_page=1')
        .then(res => res.json())
        .then(res => {
            const lastCommitDate = moment(res[0].commit.committer.date).format("dddd, MMM Do, YYYY");
            const timeFromNow = moment(res[0].commit.committer.date).fromNow();
            document.getElementById('last-update-time').innerHTML = "Updated " + timeFromNow;
        });
}

$(function() {
    activateTooltips();
    renderLastUpdatedTime();
    document.getElementById("totalExperience").innerHTML = calculateTotalExperience();
})



$(function() {
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out-back',
        once: true

    });
})