//traverse the DOM—it's the act of selecting an element from another element.

//The currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(btn => {
//     btn.addEventListener("click", e => {
//          //console.log(e.currentTarget.parentElement);
//         //currentTarget is button element
//         //parent element of the button is the div class "question-title". so if you click the btn you have access to the quesion-title.we can use traverse to also search for siblings

//         //parentElement x2 displays the two classes
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");

//     });

// });

//OR
//selects all the questions/for each question in questions,selects button add event listner on btn when u click on it it removes the show test from the question co-class

window.addEventListener("load", () => {});

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	const btn = question.querySelector(".question-btn");
	btn.addEventListener("click", () => {
		//item or question same
		questions.forEach((item) => {
			if (item !== question) {
				item.classList.remove("show-text");
			}
		});
		question.classList.toggle("show-text");
	});
});
//if you click on one close the rest
