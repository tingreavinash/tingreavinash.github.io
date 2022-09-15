$(function () {
  // this replaces document.ready
  setTimeout(function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  }, 1500);
});

function getTotalExpInDays() {
  const noOfMilliSecInDay = 24 * 60 * 60 * 1000;

  const careerStartDate = new Date(2017, 09, 3); //months are 0 based in JS
  console.log("%cCareer started on: ", 'background: #222; color: #bada55', careerStartDate);

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

function fillCertificateData(imgSrc, certUrl, isValidateOptionHidden) {

  if (isValidateOptionHidden == true) {
    document.getElementById("cert_url_field").style.display = "none";
  }
  document.getElementById("cert_img_field").src = imgSrc;
  document.getElementById("cert_url_field").href = certUrl;
  console.log("Certificate modal opened");
}



$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  document.getElementById("totalExperience").innerHTML = calculateTotalExperience();
})



$(function () {
  AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back',
    once: true

  });
})
