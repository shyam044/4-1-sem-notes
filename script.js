let topic=document.getElementById("topics");
let clicktopic = document.getElementById("clicktopics")
topic.classList.add("d-none");
clicktopic.onclick=function()
{
    topic.classList.remove("d-none");
}


let algo_topic = document.getElementById("algorithmtopics");
let container = document.getElementById("algo-container");

// Initially hide the topics
algo_topic.classList.add("d-none");

// Show on hover of entire container (button + topics)
container.addEventListener("mouseenter", function () {
    algo_topic.classList.remove("d-none");
});

// Hide when mouse leaves the container
container.addEventListener("mouseleave", function () {
    algo_topic.classList.add("d-none");
});



let ds_topic=document.getElementById("DStopics");
let click2=document.getElementById("clickds");
ds_topic.classList.add("d-none");
click2.onclick=function()
{
    ds_topic.classList.remove("d-none");
}