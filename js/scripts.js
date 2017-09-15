$(document).ready(function() {
  $("form#trackSuggester").submit(function(event) {
    var whichTeam = $("#whichTeam").val();
    var whichLang = $("#whichLang").val();
    var whichCpu = $("#whichCpu").val();

    if (whichLang === "2" && whichCpu === "2") {
      var thisTrack = "C#/.Net"
    }
    else if (whichLang === "3" && whichCpu === "3") {
      var thisTrack = "Ruby/Rails"
    }
    else if (whichTeam === "3" && whichLang === "3") {
      var thisTrack = "PHP/Drupal"
    }
    else if (whichCpu != "2") {
      var thisTrack = "Java/Android"
    }
    $("#track").text(thisTrack);
    $("#trackSuggestion").slideDown();

  event.preventDefault();
 });
});
