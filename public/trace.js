(function(){
var S=["Purchase","Inventory","Stock movement","Production","Recipe","Sales","Variance","Waste"];
var D={
"Tomatoes":["Bought from a supplier and recorded against the purchase.","Added to stock, so the system knows what's on hand.","Moved from storage to the kitchen as it's needed.","Used in kitchen production, such as a batch of sauce.","The recipe says how much each dish should use.","Dishes sold through the POS show how much was expected to be used.","Compares what should have been used with what was actually used.","Spoiled or discarded amounts are logged so they show up clearly."],
"Cooking oil":["Delivered and entered with the purchase.","Held as a stock item with quantities.","Transferred between storage and the cooking line.","Used across fryer and stove production.","Recipes define the oil per dish.","Sales of fried items feed expected usage.","The gap between expected and actual oil use is flagged.","Used oil that can't be reused is recorded as waste."],
"Chicken":["Purchased in bulk and recorded by weight.","Stocked and tracked by remaining quantity.","Portioned and moved to the kitchen.","Prepared and cooked in batches.","Recipes set the portion per dish.","POS sales show how many portions went out.","Unexplained differences become visible.","Trimmings and spoilage are logged."]};
var chips=document.querySelector(".chips"),ol=document.getElementById("stages"),det=document.getElementById("detail");
var cur="Tomatoes",idx=0;
function render(){
ol.innerHTML="";
S.forEach(function(s,i){
var li=document.createElement("li");li.className=i<idx?"done":i===idx?"on":"";
var b=document.createElement("button");b.className="stage";b.type="button";
b.setAttribute("aria-current",i===idx?"step":"false");
b.innerHTML='<span class="dot"></span><span class="n">'+s+'</span>';
b.addEventListener("click",function(){idx=i;render();b.focus&&0;});
li.appendChild(b);ol.appendChild(li);});
det.innerHTML="<h4>"+S[idx]+": "+cur+"</h4><p>"+D[cur][idx]+"</p>";
Array.prototype.forEach.call(chips.children,function(c){c.setAttribute("aria-pressed",c.textContent===cur)});
var cb=ol.children[idx].firstChild;
}
Object.keys(D).forEach(function(k){
var c=document.createElement("button");c.type="button";c.className="chip";c.textContent=k;
c.addEventListener("click",function(){cur=k;render();});chips.appendChild(c);});
render();
})();