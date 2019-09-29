//location.assign("/"); reloads
$(window).on('load', () => {
    listTheBurgers();
    
    $(`.burger-container`).on('click','.devour-burger',(event)=> {
        //grabs varibles from elements
        let id = $(event.target).data('id');
        let state = $(event.target).data('state');
        let burgerId = {
            burgId: id,
            burgState: state
        }
        
        //makes a put call
        $.ajax('/burger',{
            type: 'PUT',
            data: burgerId
        }).then(() => {
            if(state === 0){                
                $(`#${id}`).detach().appendTo('#Burger-bin');
                $(`#button-${id}`).data('state',1);
                $(`#button-${id}`).text('Cook It!');
            }else{ 
                $(`#${id}`).detach().appendTo('#Burger-menu');
                $(`#button-${id}`).data('state',0);
                $(`#button-${id}`).text('Devour It!');
            }
        });
    });
    $(`#new-burger`).on('click', (event) => {
        location.reload();
        window.location.href='/newBurger';
    });
    $('#more-toppings').on('click',function(event){ //this code is janky but it works
                                                    //es5 function so i can use this because the syntax of calling itself
        let topID = $(this).data('topcount');       //looked wierd. the selects can be read with .map during collection
        makeToppings(topID);
    });
    $('#submit-burger').on('click',(event)=>{
        let newBurg = grabToppings();
        let burgerObj = {name: newBurg};
        $.ajax('/burger',{
            type: 'POST',
            data: burgerObj
        }).then(()=>{
            window.location.href='/';
        });
    });
    $('#go-back').on('click',(event)=>{
        window.location.href='/';
    });
    function makeToppings(topID){
        if(topID < 6){ //5 is enough
            topID++;
            let toppingString=`<select class="u-full-width ingredient slider" id="topping-${topID}">`;
            toppingString+=`<option value="Pickle">Pickles</option>`;
            toppingString+=`<option value="Onion">Onions</option>`;
            toppingString+=`<option value="Red Onion">Red Onions</option>`;
            toppingString+=`<option value="Pepper">Peppers</option>`;
            toppingString+=`<option value="Mushroom">Mushrooms</option>`
            toppingString+=`<option value="Avocado">Avocado</option>`;
            toppingString+=`<option value="Bacon">Bacon</option>`;
            toppingString+=`</select>`;
            $(toppingString).appendTo('#topping-list');
            $(`#more-toppings`).data('topcount',topID);
           }
           else{
               let errorText=$('<p class="err">Max topping reached!(5)</p>');
               errorText.appendTo('#topping-list');
           }
    }
    function grabToppings(){
        let toppings = $('.ingredient :selected').map(function() {
            return this.value;
        }).get();

        let mainBurger = $('.the-meats :selected').map(function(){
            return this.value;
        }).get();

        let newBurgerName = toppings.join(" ") + " " + mainBurger.join(" ");
        return newBurgerName;
    }
    function listTheBurgers(){
        $.ajax('/burger',{
            type:'GET'
        }).then((data)=>{
            let counter =0;
            appendTheBurgers(data,counter);
        });
    }
    function appendTheBurgers(data,counter){
        let burger = data[counter];
        if(burger.eaten === 0){
            listString(burger,'#Burger-menu')
        }
        else{
            listString(burger,'#Burger-bin');
        }

        counter++;
        setTimeout(() => {
            if (counter < data.length) {
                appendTheBurgers(data,counter);
            }
    
        },100);
    }
    function listString(burger,location){
        let buttonText = '';
        if(burger.eaten === 0){
            buttonText = 'Devour It!';
        }else{
            buttonText = 'Cook It!';
        }
        liString = `<li class ="slider burger-option" id="${burger.id}">`;
        liString+=` <p style="white-space:normal"> #${burger.id} - ${burger.burger_name}`; //style to avoid eplise text cut off
        liString+=`<button data-id="${burger.id}" id="button-${burger.id}" data-state="${burger.eaten}" class="devour-burger">${buttonText}</button></p></li>`
        $(liString).appendTo(location);

    }

});