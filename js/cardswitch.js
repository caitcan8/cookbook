const thisYear = new Date().getFullYear();
document.getElementById('year').textContent = thisYear;
let tabPressed = false;
let ended = true;
document.addEventListener('DOMContentLoaded', () => {
    // get all the cards
    const cards = document.querySelectorAll('.app, .entree, .dessert');
    let count = 0; 

    

    cards.forEach(meal => {
       
      // Add event listeners to each card within the set
      meal.querySelectorAll('div').forEach(card => {
        // card.addEventListener('focus', () => {
        //     if(!ended){
        //         ended = true;
        //         return;
        //     }
        //     // ++count;
        //     // if(count > 2){
        //     //     count = 0;
        //     //     return;
        //     // }
        //     if (tabPressed && count > 1) {
        //         count = 0;
        //         return;
        //     }
        //     //when the card is clicked
        //   if (card.classList.contains('activepage')) {
        //     return; //if its already active dont do anything
        //   }
  
        //   //get current classes 
        //   const a = meal.querySelector('.activepage');
        //   const b = meal.querySelector('.secondpage');
        //   const c = meal.querySelector('.lastpage');
  
        //   //swap the inner html of the cards correctly
        //   if (card.classList.contains('secondpage')) {
        //     //if user selects second page
        //     const aContent = a.innerHTML;
        //     const bContent = b.innerHTML;
        //     const cContent = c.innerHTML;
  
        //     //switch inner html
        //     a.innerHTML = bContent;
        //     b.innerHTML = cContent;
        //     c.innerHTML = aContent;
  
        //   } else if (card.classList.contains('lastpage')) {
        //     // if user selects last page
        //     const aContent = a.innerHTML;
        //     const cContent = c.innerHTML;
  
        //     // Swap the content
        //     a.innerHTML = cContent;
        //     c.innerHTML = aContent;
        //   }
        //   //change the focus to A 
        //   ended = false;
        //   //a.focus();


        //   if (tabPressed) {
        //     count++;
        //     tabPressed = false; // Reset the Tab key flag after the action
        // }
        // else{
        //     count = 0;
        // }
        // if (!(tabPressed && count >= 2)) {
        //     a.focus();
        // }
          
          
        // });


        card.addEventListener('focus', () => {

            if (!ended) {
                ended = true;
                return;
            }
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    tabPressed = true; // Tab key was pressed
                }
            });
        
            if (tabPressed && count >= 3) {
                console.log("here");
                const allCards = Array.from(document.querySelectorAll('div'));
                const current = document.activeElement;
                const currentIndex = allCards.indexOf(current);
            
                const nextCard = allCards[currentIndex + 1]; // next .activepage in DOM
            
                if (nextCard) {
                    ended = false;
                    nextCard.focus(); // move to next deck's first card
                }
            
                tabPressed = false;
                count= 0;
                return;
            }
        
            if (card.classList.contains('activepage')) {
                return;
            }
        
            const a = meal.querySelector('.activepage');
            const b = meal.querySelector('.secondpage');
            const c = meal.querySelector('.lastpage');
        
            if (card.classList.contains('secondpage')) {
                const aContent = a.innerHTML;
                const bContent = b.innerHTML;
                const cContent = c.innerHTML;
        
                a.innerHTML = bContent;
                b.innerHTML = cContent;
                c.innerHTML = aContent;
        
            } else if (card.classList.contains('lastpage')) {
                const aContent = a.innerHTML;
                const cContent = c.innerHTML;
        
                a.innerHTML = cContent;
                c.innerHTML = aContent;
            }
        
            ended = false;
        
            if (!(tabPressed && count >= 2)) {
                a.focus();
            }
        
            if (tabPressed) {
                ++count;
                console.log("works");
                tabPressed = false;
            }
        });
        
        
      });
    });
  
});
