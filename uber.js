//TASK : 06
//DATE : 27/11/2023   
    
//04) uber price calculater: ₹52.5 base fare, ₹6.3/km 
    class UberPriceCalculator {
        constructor(km) { 
            this.km = km;
            this.baseFare = 52.5;
            this.ratePerKm = 6.3;
        }
        calculation(){
        
            let Rate = this.ratePerKm * this.km;
            let TripAmout = this.baseFare + Rate;

            return TripAmout; //147
        }

        getEstimatedTripAmount() {
            
            let Totel = this.calculation(); 
            return `Your Estimated Uber Amount is ₹${Totel.toFixed(2)} for ${this.km} KM's` ;
            
        }

    }

    let user1 = new UberPriceCalculator(15);

    console.log(user1.getEstimatedTripAmount());
    console.log("Thanks for Using Uber Cab Services...!")


//output --------------------------------------

// Your Estimated Uber Amount is ₹147.00 for 15 KM's
// Thanks for Using Uber Cab Services...!
