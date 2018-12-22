$(function () {
    const url = 'https://api.edamam.com/search?';
    const appID = '757e0f3f';
    const appKey = '12f04ba0f91861aefd92599ce31a1611';
    const Q = 'q=';
    var ingredient = 'chicken';

    $("img.checkableGroup1").imgCheckbox();
    // ==========ACCESS TO API  ===================
    $.get(url + Q + ingredient + '&app_id=' + appID + '&app_key=' + appKey)
        .done((result) => {
            for (var i = 0; i < 3; i++) { // To loop through the 10 results on the page

                // if data exist, put in variables
                let recipeUrl = (result.hits[i].recipe.url !== '' ? result.hits[i].recipe.url : "");
                let imageUrl = (result.hits[i].recipe.image !== '' ? result.hits[i].recipe.image : "");
                let dishName = (result.hits[i].recipe.label !== '' ? result.hits[i].recipe.label : "");
                let cookingTime = (result.hits[i].recipe.totalTime !== '' ? result.hits[i].recipe.totalTime :"")+' Minutes';
                let servingSize = (result.hits[i].recipe.yield !== '' ?result.hits[i].recipe.yield : "")+' Servings';
                let noOfIngre = (result.hits[i].recipe.ingredientLines.length >0 ? result.hits[i].recipe.ingredientLines.length : "")+' Ingredients';
                
                /* === elements for small  */
                //------- variables for elements for small devices(MEDIA)-------
                let $divMedia = $('<div>', {'class': 'media p-2'});
                let $aMediaImg = $('<a>', {'href': recipeUrl});

                let $imgMedia = $('<img>', {
                    "class": 'mr-3',
                    "width": '100',
                    "name":dishName,
                    "src": imageUrl,
                    'alt': 'Dish image'
                });
                let $divMediaBody = $('<div>', {'class': 'media-body'});
                let $divMediaHeader = $('<div>', {'class': 'media-header'});

                let $aMediaBody = $('<a>', {
                    'href': recipeUrl,
                    'class': 'aHeadingMobile',
                    'text': dishName
                });
                let spani = "<span class='float-right m-2 d-inline-block'><i class='fas fa-folder-plus' id='plus1'></i></span>"
                let $divMediaText = $('<div>', {'class': 'media-text'}) 
                let $ul = $('<ul>',{'class':'list-unstyled'})
                $ul.append("<li>"+cookingTime+"</li>"+"<li>"+noOfIngre+"</li>"+"<li>"+servingSize+"</li>")

                /* === elements for medium and Large(  */
                //------ variables for elements for medium and Large(CARD)------
                let $divCardCol = $('<div>', {'class': 'col-lg-2 col-md-3 d-none d-sm-none d-md-block'});
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

                // append for small devices (MEDIA)
                $aMediaImg.append($imgMedia);
                $divMediaHeader.append($aMediaBody).append(spani);
                $divMediaBody.append($divMediaHeader);
                $divMediaBody.append($divMediaText).append($ul);
                $divMedia.append($aMediaImg);
                $divMedia.append($divMediaBody);
                $("#resultForSmall").append($divMedia);

                // append for dropdown
                $divDropdownMenu.append($aDropdownItemsMon).append($aDropdownItemsTue).append($aDropdownItemsWed).append($aDropdownItemsThu).append($aDropdownItemsFri).append($aDropdownItemsSat).append($aDropdownItemsSun);
                $aDropdown.append(spani);
                $divDropdown.append($aDropdown);
                $divDropdown.append($divDropdownMenu);

                // ---- append for med to large (CARD)
                // $aCardImg.append($imgCard);
                // $divCardTitle.append($divDropdown);
                // $divCardMain.append($aCardImg);
                $divCardTitle.append($aCardTitle);
                $divCardBody.append($divCardTitle);
                $divCardBody.append($ulLarge);
                $divCardMain.append($imgCard);
                $divCardMain.append($divCardBody);
                $divCardCol.append($divCardMain);
                $('#rowsForBigGuys').append($divCardCol)

            }


            // $.get(url + Q + ingredient + '&app_id=' + appID + '&app_key=' + appKey)
            // .done((result)=>{
            //     for (var i=0;i<3;i++){                                                  // To loop through the 10 results on the page
            //         console.log(result.hits[i].recipe.label);                           //  Name
            //         console.log(result.hits[i].recipe.url);                             //  Link to site
            //         console.log(result.hits[i].recipe.image);                           //  Image
            //         console.log(result.hits[i].recipe.totalTime)                        // Total Cooking Time
            //         console.log(result.hits[i].recipe.ingredientLines.length                        // Total Cooking Time
            //         console.log('This recipe feeds '+result.hits[i].recipe.yield);      //  Number that are fed
            //     }

        }) // End of GET
    
}); // End of Script
