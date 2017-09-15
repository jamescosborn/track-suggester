$(document).ready(function() {
  $("form#trackSuggester").submit(function(event) {
    var whichTeam = $("#whichTeam").val();
    var whichLang = $("#whichLang").val();
    var whichCpu = $("#whichCpu").val();

    if (whichLang === "1" && whichCpu === "1") {
      var thisTrack = "C#/.Net"
    }
    else if (whichLang === "2" && whichCpu === "2") {
      var thisTrack = "Ruby/Rails"
    }
    else if (whichTeam === "2" && whichLang === "2") {
      var thisTrack = "PHP/Drupal"
    }
    $("#track").text(thisTrack);
    $("#trackSuggestion").show();

  event.preventDefault();
 });
});
