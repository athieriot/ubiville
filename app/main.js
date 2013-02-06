function getMeta(property) {
   var metas = document.getElementsByTagName('meta');

   for(var i=0;i<metas.length;i++) {
      if(metas[i].getAttribute('name') == property) {
         return metas[i].getAttribute('content');
      }
   }

   return {};
}

var id = getMeta("ustream:channel_id");
var url = "http://www.ustream.tv/channel/" + id;

var link = document.createElement("a");
link.href = url;
link.innerHTML = "channel";

var share = document.createElement("span");
share.innerHTML = url + " links to this ";
share.className = "share";
share.appendChild(link);

var follows = document.querySelectorAll('.content-title');
for(i in follows) {
   follows[i].appendChild(share);
}
