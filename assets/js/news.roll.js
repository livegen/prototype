// Init

$(document).ready(function() {
    
    $('#filter-settings').hide();
    $('#sort-settings').hide();
    
    // For demonstration purposes
    
    $('input').prop('checked', true);
    $('.content-settings li input:checked').parent().toggleClass('filter-platform-checked');
    getSortCriteria();
    getCheckedValues();
    
});

var filterSettings = $('#filter-settings');
var sortSettings =  $('#sort-settings');

// Hover style by platform

var platformHoverClass;

$('.content-item').not('.star-items').hover(
    
    function(){
        
        var platform = $(this).find('div[class^="platform-"]');
        var platformDetails = platform[0].className.split(" ");
        var itemTitle =$(this).find('.item-title');
        
        platformDetails.splice(platformDetails.indexOf('platform-capsule'), 1);
        
        platformHoverClass = platformDetails[0] + "-item-hover";
        
        $(this).find('.item-title').addClass(platformHoverClass);
    }, 
    
    function(){
        $(this).find('.item-title').removeClass(platformHoverClass);
    }

);

// Check inputs on li click and toggle li checked status

filterSettings.find('li').click(function() {    
    setPlatformCheckedStatus($(this))
});

sortSettings.find('li').click(function() {    
    setSortOptionCheckedStatus($(this))
});


filterSettings.find('li input').click(   
   function(e) {
        e.stopPropagation();
        $(this).parent().toggleClass('filter-platform-checked');
    }
);

sortSettings.find('li input').click(   
   function(e) {
        e.stopPropagation();
        $('#sort-settings li').removeClass('filter-platform-checked');
        $(this).parent().toggleClass('filter-platform-checked');        
    }
);

// Toggle settings blocks

$('.filter').click(
    
    function() {
        $('#filter-settings').slideToggle(200);
        $('#sort-settings').slideUp(200);
        $(this).toggleClass('filter-active');
        $('.sort').removeClass('filter-active');
        
    }
);

$('.sort').click(
    
    function() {
        $('#sort-settings').slideToggle(200);
        $('#filter-settings').slideUp(200);
        $(this).toggleClass('filter-active');
        $('.filter').removeClass('filter-active');
    }
);

// Display checked values in control

filterSettings.find('input[type=checkbox]').on("click",getCheckedValues);
filterSettings.find('li').on("click",getCheckedValues);
sortSettings.find('input[type=radio]').on("click",getSortCriteria);
sortSettings.find('li').on("click",getSortCriteria);



function setPlatformCheckedStatus(platformChecked) { 
        
    platformChecked.toggleClass('filter-platform-checked');
    
    var checkbox = platformChecked.find(":checkbox");  
        
    if(checkbox.is(':checked')) {
        checkbox.prop('checked', false);            
    }
    else {
        checkbox.prop('checked', true);
    }
}

function setSortOptionCheckedStatus(sortOptionChecked) {    
        
    sortSettings.find('li').removeClass('filter-platform-checked');
    sortOptionChecked.toggleClass('filter-platform-checked');
    sortOptionChecked.find(":radio").prop('checked', true);
}

function getCheckedValues() {    
    
    var checked = filterSettings.find('input[type=checkbox]:checked');
    var checkedString ="";
    
    checked.each(function() {
        checkedString += $(this).attr("data-platform-label") + " • ";
    });
    
    checkedString = checkedString.slice(0, checkedString.length-2);
    $('#filter-platform').text(checkedString);
}

function getSortCriteria() {    
    
    var checked = sortSettings.find('input[type=radio]:checked');
    var checkedString = checked.attr("data-sort-label");
    $('#sort-criteria').text(checkedString);
}












