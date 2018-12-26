$(function () {
    const url = 'https://api.edamam.com/search?';
    // const appID = '757e0f3f';
    // const appKey = '12f04ba0f91861aefd92599ce31a1611';
    const appID = '932cf510';
    const appKey = 'a27fa1a8048f0263635265953ec76ae9';

    const Q = 'q=';
    var ingredient = 'chicken';
    var selections = [{
        "recipeName": "",
        "recipeUrl":""
    }]

    // ==========ACCESS TO API  ===================
    $.get(url + Q + ingredient + '&app_id=' + appID + '&app_key=' + appKey)
        .done((result) => {
            for (let i = 0; i < 3; i++) { // To loop through the 10 results on the page

                // if data exist, put in variables
                let recipeUrl = (result.hits[i].recipe.url !== '' ? result.hits[i].recipe.url : "");
                let imageUrl = (result.hits[i].recipe.image !== '' ? result.hits[i].recipe.image : "");
                let dishName = (result.hits[i].recipe.label !== '' ? result.hits[i].recipe.label : "");
                let cookingTime = (result.hits[i].recipe.totalTime !== '' ? result.hits[i].recipe.totalTime :"")+' Minutes';
                let servingSize = (result.hits[i].recipe.yield !== '' ?result.hits[i].recipe.yield : "")+' Servings';
                let noOfIngre = (result.hits[i].recipe.ingredientLines.length >0 ? result.hits[i].recipe.ingredientLines.length : "")+' Ingredients';

                //---(CARD)------
                let $divCardCol = $('<div>', {'class': 'col-6 col-lg-2 col-md-3 col-sm-4'});
                let $divCardMain = $('<div>', {'class': 'card border border-0'});
                let $imgCard = $('<img>', {
                    "class": 'card-img-top rounded',
                    "src": imageUrl,
                    'name': 'Dish image',
                    'id' : 'img'+i
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

                $divCardMain.append($imgCard);
                $divCardMain.append($divCardBody);
                $divCardCol.append($divCardMain);
                $('#resultsForBigGuys').append($divCardCol)
            }
            // jquery plugin image checkbox
            $("img").imgCheckbox();

        }) // End of GET

        $('#finished').click(event =>{

        })
                
}); // End of Script


// ======For future implementation ============
    // /* === elements for small  */
    // //------- variables for elements for small devices(MEDIA)-------
    // let $divMedia = $('<div>', {'class': 'media p-2'});
    // let $aMediaImg = $('<a>', {'href': recipeUrl});

    // let $imgMedia = $('<img>', {
    //     "class": 'mr-3',
    //     "width": '100',
    //     "name":dishName,
    //     "src": imageUrl,
    //     'alt': 'Dish image'
    // });
    // let $divMediaBody = $('<div>', {'class': 'media-body'});
    // let $divMediaHeader = $('<div>', {'class': 'media-header'});

    // let $aMediaHeader = $('<a>', {
    //     'href': recipeUrl,
    //     'class': 'aMediaHeader',
    //     'text': dishName
    // });
    // let spani = "<span class='float-right m-2 d-inline-block'><i class='fas fa-folder-plus' id='plus1'></i></span>"
    // let $divMediaText = $('<div>', {'class': 'media-text'}) 
    // let $ul = $('<ul>',{'class':'list-unstyled card-text'})
    // $ul.append("<li>"+cookingTime+"</li>"+"<li>"+noOfIngre+"</li>"+"<li>"+servingSize+"</li>")

    // // append for small devices (MEDIA)
    // $aMediaImg.append($imgMedia);
    // $divMediaHeader.append($aMediaHeader).append(spani);

    // $divMediaBody.append($divMediaHeader);
    // $divMediaBody.append($divMediaText).append($ul);

    // $divMedia.append($aMediaImg);
    // $divMedia.append($divMediaBody);
    // $("#resultsForSmall").append($divMedia);
