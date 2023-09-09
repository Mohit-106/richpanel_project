function getBotResponse(input) {

    if (input == "Where is my order?"){
        return "To check the status and location of your order, go to the -> Your Orders section of your Amazon account.";
    }
    else if (input == "How do I track my package?"){
        return "To track your package, go to the Your Orders section of your Amazon account Find the order you want to track and click on the Track Package button to view detailed tracking information.";
    } 
    else if (input == "Can I change my shipping address?"){
        return "You can change the shipping address for an order if it hasn't shipped yet!";
    } 
    else if (input == "What are the shipping options and delivery times?"){
        return "Amazon offers various shipping options, including standard, expedited, and same-day delivery, depending on your location.";
    } 
    else if (input == "How can I cancel an order?"){
        return "You can cancel an order if it hasn't entered the shipping process.";
    } 
    else if (input == "What is Amazon Prime and its benefits?"){
        return "Prime members also have early access to deals and exclusive promotions.";
    } 
    else if (input == "How do I return or exchange a product?"){
        return "To return or exchange a product, go to the Your Orders section, find the order containing the item you want to return, and click on Return or replace items";
    } 
    else if (input == "What is the status of my refund?"){
        return "After initiating a return, Amazon processes refunds once the returned item is received and inspected.";
    } 
    else if (input == "Goodbye"){
        return "Bye have a nice day!";
    } else {
        return "Try asking something else!";
    }
}