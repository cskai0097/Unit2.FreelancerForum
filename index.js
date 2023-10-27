const freelancers = [
{name: "Alice", occupation: "Writer", startingPrice: 30},
{name: "Bob", occupation: "Teacher", startingPrice: 50},
{name: "Carol", occupation: "Programmer", startingPrice: 70}
]
const freelancerList = document.getElementById("freelancer-list")//get an ul element by its id

//function to update the average starting price
const updateAverageStartingPrice = () => {
    //Calculate the avg starting price of the freelancers using reduce()
    const totalStartingPrice = freelancers.reduce((sum, freelancer)=>{return sum+freelancer.startingPrice},0);
    const averageStartingPrice = totalStartingPrice/freelancers.length;

    //Check if there's already a paragraph element for the avg starting price
    //if so, update innterHTML with the new avg starting price
    //if not, create a new p element and append it to doc body
    let averagePriceElement = document.getElementById('average-price')

    if (averagePriceElement){
        averagePriceElement.innerHTML = `Average starting price: $${averageStartingPrice.toFixed(2)}`;
    }
    else{
        averagePriceElement = document.createElement("p");
        averagePriceElement.id = "average-price";
        averagePriceElement.innerHTML = `Average starting price: $${averageStartingPrice.toFixed(2)}`;
        document.body.appendChild(averagePriceElement);
    }
};

    //function to add new random freelancer to array and update the list and average price
    const addNewFreelancer = () => {
        const occupations = ["writer","programmer","designer"];
        const names = ["Eve", "Frank","Grace","Henry","Ivy","Jake","Kelly"];
        const newFreelancer = {
            name: names[Math.floor(Math.random()*names.length)],
            occupation: occupations[Math.floor(Math.random()*occupations.length)],
            startingPrice: Math.floor(Math.random()*101)+50
        };
        freelancers.push(newFreelancer);

    //create a list item for the new freelancer and add it to the ul
    const listItem = document.createElement("li")
    listItem.innerHTML = `${newFreelancer.name} - ${newFreelancer.occupation}(starting price: $${newFreelancer.startingPrice})`;
    freelancerList.appendChild(listItem);

    //update average starting price
    updateAverageStartingPrice();
    };

    //add the existing freelancers to the unordered list and update the average starting price
    for (let i = 0; i < freelancers.length; i++){
        const freelancer = freelancers[i]
        const listItem = document.createElement("li");
        listItem.innerHTML = `${freelancer.name} - ${freelancer.occupation}(starting price:
        $${freelancer.startingPrice})`;
        freelancerList.appendChild(listItem);
    }
    
    

    //add a new freelancer every 5 seconds using setInterval()
    setInterval(addNewFreelancer, 5000)






