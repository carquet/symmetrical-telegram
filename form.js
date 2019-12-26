//TODO: I need to be able to edit the comment box while selecting other things.
//TODO: be able to change the gender after being selected???
//TODO: clear button
//TODO: counting words? character? when they enter the comment box
//TODO: check the conjugation for they/ or the other around add s if he or she?
//TODO: BBDD for one year, recording score of student for to compare and comment not to repeat.



//return the gender value
const genderButton = document.querySelector("#genderBtn");
//text area where all the comments go
const commentBox = document.getElementById("comments");
//button that triggers the finetuning of the comment
const FINISH = document.querySelector("#finishBt");
//area where the all form is with several buttons to add content
const FORM = document.querySelector("FORM");

//A. buttons that add comments onto the text field
FORM.addEventListener("click", clickButtonAdd);
//B. finetune the final textarea
FINISH.addEventListener("click", finishText);
//button that check the gender
//genderButton.addEventListener("click",checkGender);


//1.click on any button to retrieve the comment linked to it
function clickButtonAdd(event){

  if (event.target.nodeName == "BUTTON") {
      addComments(event.target.parentNode.id);
    }
}
//2.take what's inside the option drop down and add it in the comment box without erasing the previous comment.
function addComments(e) {
  //dropdown selection
 let strUser =  document.getElementById("select" + e).value;
  commentBox.append(strUser + " ");
  //here launch a function that count the charcates/words?
}

//replace pronouns
let replacement;
// step 1/2 replace pronoun: check student's gender and return a pronoun
function checkGender(){
  const ele = document.getElementsByName('gender');
    for(let i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
          return ele[i].value + " ";   
    } 
}

//step 2/2 replace pronoun: insert pronoun 
function finishText(){
  //confirm finishText triggers several times
  console.log("hello");
  //any of the three pronouns with space after
  let regex = /she |he |they |std /ig;
  replacement = checkGender();

    let replace = commentBox.innerHTML.replace(regex, replacement);
  commentBox.innerHTML = replace;
  console.log(typeof(commentBox.innerHTML));

}


//to handle the text area counting characters
//https://eloquentjavascript.net/15_event.html
      