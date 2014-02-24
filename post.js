imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif";
showRandomImg = true;aBold = true;summaryPost = 69; summaryTitle = 25; numpostsf  = 3;numposts3 = 9;numposts1 = 6;numposts  = 16;summaryPost9 = 299;summaryPost1= 89; summaryTitle = 35; numposts = 1; numposts1 =5; numposts2 =4; numposts3 = 6; numposts4 = 1; numposts5 = 6;numposts6 = 10;numposts7 = 10;numposts8= 6;numposts9 =9;

function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}
function showrecentposts1(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
	if (numposts5 <= json.feed.entry.length) {
		maxpost = numposts1;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
     for (var i = 0; i < maxpost; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	if (i==0) {
	var trtd = '<div class="rectags_left"><a class="thumbL" title="'+posttitle+'" href="'+posturl+'"><img src="'+img[i]+'"/></a><div class="clear"></div><h3 class="posttitle"><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></h3><div class="contentstyle"><p>'+removeHtmlTag(postcontent,summaryPost)+'...</p></div><div class="clear"></div></div><div class="rectags_right">';					 
		document.write(trtd);
	          }
	if ((i>0)&&(i<maxpost)) {
	var trtd = '<a class="thumbR" href="'+posturl+'"><img title="'+posttitle+'" src="'+img[i]+'"/></a><div class="redPost"><h3 class="posttitle"><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></h3><div class="borderfix"></div></div>';		
	document.write(trtd);
	 }				
	 j++;
	}
	document.write('</div>');
}

function showrecentposts9(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
	if (numposts5 <= json.feed.entry.length) {
		maxpost = numposts9;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
     for (var i = 0; i < maxpost; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	if (i==0) {
	var trtd = '<div class="Thumb_left"><a  class="thumbailleft" title="'+posttitle+'" href="'+posturl+'"><img src="'+img[i]+'"/></a><h3 class="posttitle"><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></h3><div class="contentstyle"><p>'+removeHtmlTag(postcontent,summaryPost9)+'...</p></div><div class="clear"></div></div><div class="top_right">';					 
		document.write(trtd);
	          }
	if ((i>0)&&(i<maxpost)) {
	var trtd = '<a href="'+posturl+'"></a><div class="topPost"><h3 class="posttitle"><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></h3></div>';		
	document.write(trtd);
	 }				
	 j++;
	}
	document.write('</div>');
}
