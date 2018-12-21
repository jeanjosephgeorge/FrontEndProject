$(function () {
    const url = 'https://api.edamam.com/search?';
    const appID = '757e0f3f';
    const appKey = '12f04ba0f91861aefd92599ce31a1611';
    const Q = 'q=';
    var ingredient = 'chicken';

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

                // ======= CREATE DROPDOWNS==
                let $divDropdown = $('<div>', {"class": "dropdown"});
                let $aDropdown = $('<a>', {
                    "id": 'dropdownMenuButton' + i,
                    "data-toggle": "dropdown",
                    "aria-haspopup": 'true',
                    "aria-expanded": 'false'
                });
                let $divDropdownMenu = $('<div>', {
                    "class": "dropdown-menu drop",
                    "data-toggle": "dropdown",
                    "aria-labelledby": "dropdownMenuButton" + i
                })
                let $aDropdownItemsMon = $('<a>', {
                    "class": "dropdown-item",
                    "href": '#',
                    "text": 'Monday'
                })
                let $aDropdownItemsTue = $('<a>', {
                    "class": "dropdown-item",
                    "href": '#',
                    "text": 'Tuesday'
                })
                let $aDropdownItemsWed = $('<a>', {
                    "class": "dropdown-item",
                    "href": '#',
                    "text": 'Wednesday'
                })
                let $aDropdownItemsThu = $('<a>', {
                    "class": "dropdown-item",
                    "href": '#',
                    "text": 'Thursday'
                })
                let $aDropdownItemsFri = $('<a>', {
                    "class": "dropdown-item",
                    "href": '#',
                    "text": 'Friday'
                })
                let $aDropdownItemsSat = $('<a>', {
                    "class": "dropdown-item",
                    "href": '#',
                    "text": 'Satday'
                })
                let $aDropdownItemsSun = $('<a>', {
                    "class": "dropdown-item",
                    "href": '#',
                    "text": 'Sunday'
                })
                
                /* === elements for small  */
                //------- variables for elements for small devices(MEDIA)-------
                let $divMedia = $('<div>', {'class': 'media p-2'});
                let $aMediaImg = $('<a>', {'href': recipeUrl});

                let $imgMedia = $('<img>', {
                    "class": 'mr-3',
                    "width": '100',
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
                let $divCardCol = $('<div>', {'class': 'col-lg-2 col-md-2 d-none d-sm-none d-md-block'});
                let $divCardMain = $('<div>', {'class': 'card border border-0'});
                let $aCardImg = $('<a>', {'href': recipeUrl});
                let $imgCard = $('<img>', {
                    "class": 'card-img-top rounded',
                    "src": imageUrl,
                    'alt': 'Dish image'
                });
                let $divCardBody = $('<div>', {"class": 'card-body'});
                let $divCardTitle = $('<div>', {"class": 'card-title d-flex pt-2'});
                let $aCardTitle = $('<a>', {
                    'class': 'card-title',
                    'href': recipeUrl,
                    'text': dishName
                });
                let $ulLarge = $('<ul>',{'class':'list-unstyled'})
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
                $aCardImg.append($imgCard);
                $divCardTitle.append($aCardTitle);
                $divCardTitle.append($divDropdown);
                $divCardBody.append($divCardTitle);
                $divCardBody.append($ulLarge);
                $divCardMain.append($aCardImg);
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
