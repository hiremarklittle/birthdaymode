$('#rulesToggle').click(function () {
    if ($('#rules').hasClass('hidden')) {
        $('#rules').removeClass('hidden');
        $('#leaderboard').addClass('hidden');
    }
});

 $('#leaderboardToggle').click(function () {
    if ($('#leaderboard').hasClass('hidden')) {
        $('#leaderboard').removeClass('hidden');
        $('#rules').addClass('hidden');
    }
});