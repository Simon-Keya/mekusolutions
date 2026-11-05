(function(){
  var S=["Purchase","Inventory","Stock movement","Production","Recipe","Sales","Variance","Waste"];
  var D={
    "Tomatoes":["Bought from a supplier and recorded against the purchase.","Added to stock, so the system knows what's on hand.","Moved from storage to the kitchen as it's needed.","Used in kitchen production, such as a batch of sauce.","The recipe says how much each dish should use.","Dishes sold through the POS show how much was expected to be used.","Compares what should have been used with what was actually used.","Spoiled or discarded amounts are logged so they show up clearly."],
    "Cooking oil":["Delivered and entered with the purchase.","Held as a stock item with quantities.","Transferred between storage and the cooking line.","Used across fryer and stove production.","Recipes define the oil per dish.","Sales of fried items feed expected usage.","The gap between expected and actual oil use is flagged.","Used oil that can't be reused is recorded as waste."],
    "Chicken":["Purchased in bulk and recorded by weight.","Stocked and tracked by remaining quantity.","Portioned and moved to the kitchen.","Prepared and cooked in batches.","Recipes set the portion per dish.","POS sales show how many portions went out.","Unexplained differences become visible.","Trimmings and spoilage are logged."]
  };
  var trace=document.querySelector("#trace");
  if(!trace) return;
  var chips=trace.querySelector(".chips"), ol=document.getElementById("stages"), det=document.getElementById("detail");
  if(!chips || !ol || !det) return;
  var cur="Tomatoes", idx=0, lastFocus=null;

  function render(){
    ol.innerHTML="";
    ol.setAttribute("aria-label", "Trace stages");
    S.forEach(function(s,i){
      var li=document.createElement("li");
      li.className=i<idx?"done":i===idx?"on":"";
      li.dataset.stage=s.toLowerCase().replace(/\s+/g,"-");
      var b=document.createElement("button");
      b.className="stage"; b.type="button";
      b.setAttribute("aria-current",i===idx?"step":"false");
      var dot=document.createElement("span"); dot.className="dot"; dot.dataset.n=String(i+1); dot.setAttribute("aria-hidden","true");
      var n=document.createElement("span"); n.className="n"; n.textContent=s;
      b.appendChild(dot); b.appendChild(n);
      b.addEventListener("click",function(){ lastFocus=s; idx=i; render(); });
      li.appendChild(b); ol.appendChild(li);
    });

    det.innerHTML="";
    var k=document.createElement("span"); k.className="kicker"; k.textContent="Stage "+(idx+1)+" of "+S.length;
    var h=document.createElement("h4"); h.textContent=S[idx]+": "+cur;
    var p=document.createElement("p"); p.textContent=D[cur][idx];
    det.appendChild(k); det.appendChild(h); det.appendChild(p);
    det.setAttribute("aria-label", "Current Trace stage: "+S[idx]);
    Array.prototype.forEach.call(chips.children,function(c){
      c.setAttribute("aria-pressed",c.textContent===cur?"true":"false");
    });
    var active=ol.children[idx] && ol.children[idx].querySelector("button.stage");
    if(lastFocus && active && active.textContent===lastFocus){ active.focus(); lastFocus=null; }
  }

  Object.keys(D).forEach(function(k){
    var c=document.createElement("button");
    c.type="button"; c.className="chip"; c.textContent=k; c.setAttribute("aria-pressed",k===cur?"true":"false");
    c.addEventListener("click",function(){ cur=k; idx=0; render(); });
    chips.appendChild(c);
  });
  render();
})();
