$(function () {
    const url = 'https://api.edamam.com/search?';
    // const appID = '757e0f3f';
    // const appKey = '12f04ba0f91861aefd92599ce31a1611';
    const appID = '932cf510';
    const appKey = 'a27fa1a8048f0263635265953ec76ae9';

    const Q = 'q=';
    var ingredient = JSON.parse(localStorage.ingredientArr);
    var selections = [];

    // ==========ACCESS TO API  ===================
    $.get(url + Q + ingredient + '&app_id=' + appID + '&app_key=' + appKey)
        .done((result) => {
            for (let i = 0; i < 10; i++) { // To loop through the 10 results on the page

                // if data exist, put in variables
                let recipeUrl = (result.hits[i].recipe.url !== '' ? result.hits[i].recipe.url : "");
                let imageUrl = (result.hits[i].recipe.image !== '' ? result.hits[i].recipe.image : "");
                let dishName = (result.hits[i].recipe.label !== '' ? result.hits[i].recipe.label : "");

                let ingredientLines = (result.hits[i].recipe.ingredientLines !== '' ? result.hits[i].recipe.ingredientLines : "");
                let cookingTime = (result.hits[i].recipe.totalTime !== '' ? result.hits[i].recipe.totalTime :"")+' Minutes';
                let servingSize = (result.hits[i].recipe.yield !== '' ?result.hits[i].recipe.yield : "")+' Servings';
                let noOfIngre = (result.hits[i].recipe.ingredientLines.length >0 ? result.hits[i].recipe.ingredientLines.length : "")+' Ingredients';

                //---(CARD)------
                let $divCardCol = $('<div>', {'class': 'col-6 col-lg-2 col-md-3 col-sm-4'});
                let $divCardMain = $('<div>', {'class': 'card border border-0'});
                let $imgCard = $('<img>', {
                    "class": 'card-img-top rounded',
                    "src": imageUrl,
                    'name': dishName,
                    'alt': recipeUrl,
                    'id' : 'img'+i
                });
                let $pIngredients = $('<p>',{ 
                    'class':'d-none', 
                    'text':ingredientLines 
                });
                let $spanServingSize = $('<span>',{ 
                    'class':'d-none', 
                    'text':servingSize 
                });

                let $divCardBody = $('<div>', {"class": 'card-body'});
                let $divCardTitle = $('<div>', {"class": 'card-title pt-2'});
                let $aCardTitle = $('<a>', {
                    'class': 'card-title',
                    'href': recipeUrl,
                    'text': dishName
                });
                let $ulLarge = $('<ul>',{'class':'list-unstyled card-text'})
                $ulLarge.append("<li>"+cookingTime+"</li>"+"<li>"+noOfIngre+"</li>"+"<li>"+servingSize+"</li>")
                // ---- append for med to large (CARD)
                $divCardTitle.append($aCardTitle);
                
                $divCardBody.append($divCardTitle);
                $divCardBody.append($ulLarge);

                $imgCard.append($pIngredients);
                $imgCard.append($spanServingSize);

                $divCardMain.append($imgCard);
                $divCardMain.append($divCardBody);


                $divCardCol.append($divCardMain);
                $('#resultsForBigGuys').append($divCardCol)
            }
            // jquery plugin image checkbox
            $("img").imgCheckbox({
                onclick: function(el){
                    var isChecked = el.hasClass("imgChked"),
                    imgEl = el.children()[0];  // the img element
                    // console.log(el.children().children())
                    let checked = {
                        recipeName: imgEl.name,
                        recipeUrl:imgEl.alt,
                        imageUrl:imgEl.src,
                        ingredientLines:el.children().children()[0].textContent,
                        servingSize:el.children().children()[1].textContent
                    }
                    if (isChecked){
                        selections.push(checked)
                    }else {
                        selections.pop(checked)
                    }
                }
            });
        }) // End of GET

        $('#finished').on("click", event =>{
            // console.log(JSON.stringify(selections))
            localStorage.myArrData=JSON.stringify(selections)
        });
        

}); // End of Script