window.onload = window.onresize = toggleResponsiveDesign;

function recursiveList(children) {
  if (children == null || !Array.isArray(children)) {
    return document.createElement("span");
  } else {
    let ul = document.createElement("ul");
    for (let i = 0; i < children.length; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = children[i].a;
      a.innerHTML = children[i].title;
      li.appendChild(a);
      li.appendChild(recursiveList(children[i].children));
      ul.appendChild(li);
    }
    return ul;
  }
}

function toggleResponsiveDesign(event) {
  let isMobile = window.navigator.userAgent.toLowerCase().includes("mobile");
  let desk = document.getElementById("desktop-splash");
  let mobl = document.getElementById("mobile-splash");
  if (isMobile) {
    console.log("GOING MOBILE");
    try {
      desk.style.display = "none";
      mobl.style.display = "table";
    } catch(e) {}
  } else {
    console.log("GOING DESKTOP");
    try {
      desk.style.display = "table";
      mobl.style.display = "none";
    } catch(e) {}
  }
}

function initDropdownMenu(parent, classname, el) {
  let nav = document.createElement("nav");
  nav.className = classname;
  nav.appendChild(el);
  parent.appendChild(nav);
}

 function anchor(id) {
   document.getElementById(id).scrollIntoView({
     "behavior": "smooth",
     "block": "start"
   });
 }

 function copyDiscordUsername() {
   document.getElementById("discord-un").select();
   document.execCommand('copy');
   let gotoDiscord = window.confirm("Copied to clipboard! Would you like to continue at Discord?");
   if (gotoDiscord) window.location.href = "https://discordapp.com/channels/@me";
 }
