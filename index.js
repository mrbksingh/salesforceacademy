$(document).ready(function () {
    // Handle navigation link clicks
    $('.nav-link').click(function (e) {
        e.preventDefault();

        // Get the target section ID from the data attribute
        var targetSection = $(this).data('target');

        // Hide all sections
        $('.section').hide();

        $.get(targetSection + '.html')
                    .done(function (data) {

                        // Inject the loaded content into the target section
                        $('#' + targetSection).html(data);

                        // Show the target section after content is loaded
                        $('#' + targetSection).show();
                    })
                    .fail(function () {
                        // If HTML page not found, show an error message or redirect to an error page
                        alert('Error: Page doesn\'t exist');
                    });
    });

    // Show the initially visible section on page load
    $('.section.show').show();
});
