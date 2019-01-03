$(function() {
    var selections = JSON.parse(localStorage.myArrData);
    console.log(selections)
    for (let i=0;i<selections.length;i++){
        // create image and append to div
        let newIng = selections[i]['ingredientLines'].split(",");

        let $divSelectedImg = $('<div>', {
            "class": 'selectedImg',
            "draggable":"true",
            "refreshPositions":"true",
            "ondragstart":"drag(event)",
            'id' : 'dragImg'+i
        });
        // image of recipe
        let $imgCard = $('<img>', {
            "class": 'card-img-top rounded hideWhenPrint',
            "src": selections[i]['imageUrl'],
            'name': selections[i]['recipeName'],
            'alt': selections[i]['recipeUrl'],
            'id':'img'+i
        });
        let $spanRecipeName =$('<span>',{
            "class":"recipeName showWhenPrint",
            "text":selections[i]['recipeName'],
            "id":'pRecipeName'+i
        });
        let $spanServingSize = $('<span>',{
            "class":"showWhenPrint servingSize",
            "text":"("+selections[i]['servingSize']+")"
        })

        // Name of recipe on hover
        let $divText = "<div class='textarea'><a href='"+selections[i]['recipeUrl']+"'><div class='text'>"+selections[i]['recipeName']+"</div></a></div>";
        $divSelectedImg.append($imgCard);
        $divSelectedImg.append($divText);

        $divSelectedImg.append($spanRecipeName);   //shown only at printing
        $divSelectedImg.append($spanServingSize);  //shown only at printing
        newIng.forEach(ing => {                     //shown only at printing
            let $spanIngredientLines =$('<span>',{
                "class":"showWhenPrint ingredients",
                "text":ing,
                "id":'spanIngLines'+i
            });      
            $divSelectedImg.append($spanIngredientLines);      
        });

        $("#selectionTop").append($divSelectedImg);
    };
}); // end of jQuery
