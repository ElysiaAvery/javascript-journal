var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var entry = $('#entry').val();
    var journalReader = new Entry();
    var wordCount = journalReader.wordCount(entry);
    $('#solution').append("<p>Number of words in your entry: " + wordCount + "</p>");
    var vowelCount = journalReader.vowelCount(entry);
    $('#solution').append("<p>Number of vowels in your entry: " + vowelCount + "</p>");
    var consonantCount = journalReader.consonantCount(entry);
    $('#solution').append("<p>Number of consonants in your entry: " + consonantCount + "</p>");
    var firstEightWords = journalReader.firstEightWords(entry);
    $('#solution').append("<p>Preview of your entry: " + firstEightWords.join(" ") + "...</p>");
  });
});
