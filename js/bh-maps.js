var myCenter=new google.maps.LatLng(13.13548,75.641826);
var marker;

function initialize()
{
    var mapProp = {
        center:myCenter,
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("MyMap"),mapProp);

    var marker=new google.maps.Marker({
        position:myCenter,
        animation:google.maps.Animation.BOUNCE
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
