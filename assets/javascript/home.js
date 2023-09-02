//function to toggle completion status
let toggleCompletion = function(){
    let toggleBtn = $('.mark-status');
    toggleBtn.click(function(e){
        var elem = $(this);
        var icon = $(this).find('i'); //the status icon
        e.preventDefault();
        $.ajax({
            type: "get",
            url: $(this).prop('href'),
            success: function(data) {
                var num=0;
                $(elem).html("");
                if($(icon).attr('data-status')==='yes'){
                    $(elem).html('<i class="fa-solid fa-xmark" style="color: #d41111;" data-status="no"></i>');
                    num=-1;
                }else if($(icon).attr('data-status')==='no'){
                    $(elem).html('<i class="fa-solid fa-circle" data-status="none"></i>');
                }else{
                    $(elem).html('<i class="fa-solid fa-check" style="color: #35b724;" data-status="yes"></i>');
                    num=1;
                }
                num=parseInt($('#streak'+$(elem).attr('data-parentId')).attr('data-val'))+num; //update streak value
                $('#streak'+$(elem).attr('data-parentId')).find('span').html(num);
                $('#streak'+$(elem).attr('data-parentId')).attr('data-val',num);
            },
            error: function(error){
                console.log(error.responseText);
            }
        });
    });
}();