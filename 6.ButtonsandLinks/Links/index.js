// let form = document.querySelector("form");
// let formChanged = false;
// form.addEventListener("change", () => (formChanged = true));
// window.addEventListener("beforeunload", (event) => {
// 	if (formChanged) {
// 		event.returnValue = "You have unfinished changes!";
// 	}
// });
// form.addEventListener("submit", () => {
// 	console.log("form submitted");
// 	window.removeEventListener("beforeunload", () => {});
// });
const links = document.querySelectorAll(".navbar a:not(.logo)");
console.log(links);
for (let index = 0; index < links.length; index++) {
	if (links[index]?.href === location.href) {
		links[index].className = "active";
		links[index].setAttribute("aria-current", "page");
	}
}
// console.log(location.href);
