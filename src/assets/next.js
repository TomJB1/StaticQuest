// get the uri 

/*
function querystring(key) {
    var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
    var r=[], m;
    while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
    return r;
 }

// query the 'host' value
var host = querystring("host")[0];
*/

var url = new URL(window.location) 
var host = url.searchParams.get('host')

fetch('/assets/members.json')
    .then((response) => response.json())
    .then((json) => { 
        console.log("Host: " + host);
        console.log(json)
        for (var i = 0; i < json.length; i++) {
            for (var key in json[i]) {
                if (json[i][key] == host) {
                    if (i == json.length-1){
                        console.log('At the end of the rope...')
                        console.log(key + ' == ' + json[i-json.length+1][key] );
                        window.location.href = "https://" + json[i-json.length+1][key]
                    }else{
                        console.log('Next stop... ' + json[i+1][key] );
                        window.location.href = "https://" + json[i+1][key]
                    }
                }
            }
        }
    }
);