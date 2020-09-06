$(document).ready(function(){
    var arr = [];
    var output = "";
    for(var i = 0; i <10; i++){
        arr[i] = Math.floor(Math.random() * (500 - 10) + 10);
        var bar_width = 920/10;
        output += '<div id = "' + i + '" class = "array_bar" style = "background-color: pink;  margin: 0px 1px; font-size: 8px; width:' + bar_width + 'px; height: ' + arr[i] + 'px;">'+ arr[i] + '</div>';
    }
    $('#array').html(output);
    $(".sort_select_btn").click(function(){
        var sort_type = $(this).attr('id');
        $('#sort_type_value').attr('value', sort_type);
        var output = "";
        output += sort_type;
        output += " Sort";
        $('#current_sort_type').html(output);
    })
    $("#new_array_btn").click(function(){
        var x = $('#array_len').html();
        arr = [];
        var output = "";
        for(var i = 0; i <x; i++){
            arr[i] = Math.floor(Math.random() * (500 - 10) + 10);
            var bar_width = 920/x;
            if(x > 50){
                output += '<div id = "' + i + '" class = "array_bar" style = "background-color: pink; margin: 0px 1px; font-size: 8px; width:' + bar_width + 'px; height: ' + arr[i] + 'px;">'+  '</div>';
            }else{
                output += '<div id = "' + i + '" class = "array_bar" style = "background-color: pink; margin: 0px 1px; font-size: 8px; width:' + bar_width + 'px; height: ' + arr[i] + 'px;">'+ arr[i] + '</div>';
            }
        }
        $('#array').html(output);
    })
    $('#array_len_input').change(function(){
        var x = $('#array_len').html();
        arr = [];
        var output = "";
        for(var i = 0; i <x; i++){
            arr[i] = Math.floor(Math.random() * (500 - 10) + 10);
            var bar_width = 920/x;
            if(x > 50){
                output += '<div id = "' + i + '" class = "array_bar" style = "background-color: pink; margin: 0px 1px; font-size: 8px; width:' + bar_width + 'px; height: ' + arr[i] + 'px;">'+  '</div>';
            }else{
                output += '<div id = "' + i + '" class = "array_bar" style = "background-color: pink; margin: 0px 1px; font-size: 8px; width:' + bar_width + 'px; height: ' + arr[i] + 'px;">'+ arr[i] + '</div>';
            }
        }
        $('#array').html(output);
    })

    $("#sort_btn").click(function(){
        console.log($('#sort_type_value').attr('value'));
        var type = $('#sort_type_value').attr('value');
        console.log(arr.length);
        if(type == 'Merge'){
        }
        else if(type == 'Bubble'){
        }
        else if(type == 'Selection'){
        }
        else if(type == 'Heap'){
        }
        else if(type == 'Insertion'){
        }
        else{
            // quickSort(arr);
        }
    })
    // function quickSort(arr){

    // }
 });



