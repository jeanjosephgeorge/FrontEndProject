$(function() {
    var selections = JSON.parse(localStorage.myArrData);

    for (let i=0;i<selections.length;i++){
        // create image and append to div
        let $divSelectedImg = $('<div>', {
            "class": 'selectedImg m-2',
            "draggable":"true",
            "refreshPositions":"true",
            "ondragstart":"drag(event)",
            'id' : 'dragImg'+i
        });
        // image of recipe
        let $imgCard = $('<img>', {
            "class": 'card-img-top rounded',
            "src": selections[i]['imageUrl'],
            'name': selections[i]['recipeName'],
            'alt': selections[i]['recipeUrl'],
            'id':'img'+i
        });
        let $pRecipeName =$('<p>',{
            "class":"recipeName showWhenPrint",
            "text":selections[i]['recipeName'],
            "id":'pRecipeName'+i
        });

        // Name of recipe on hover
        let $divText = "<div class='textarea'><a href='"+selections[i]['recipeUrl']+"'><div class='text'>"+selections[i]['recipeName']+"</div></a></div>";
        $divSelectedImg.append($imgCard);
        $divSelectedImg.append($divText);
        $divSelectedImg.append($pRecipeName);
        $("#selectionTop").append($divSelectedImg);
    };
}); // end of jQuery
